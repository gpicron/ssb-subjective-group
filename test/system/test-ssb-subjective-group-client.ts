/* eslint @typescript-eslint/no-var-requires: off, @typescript-eslint/ban-ts-ignore: off */
import anyTest, { TestInterface } from 'ava'
import { SubjectiveIdentity } from '../../src/model/SubjectiveIdentity'
import { SubjectiveGroupPlugin } from '../../src/ssb-subjective-group-types'
import { StrongPassword } from '../../src/model/IdentityKeysGenerator'
import { Name } from '../../src/model/About'
import rimraf = require('rimraf')
import pify = require('pify')
import getPort = require('get-port')

const SecretStack = require('secret-stack')
const Config = require('ssb-config/inject')
const ssbClient = require('ssb-client')
const ssbKeys = require('ssb-keys')

interface TestContext {
    server: SSBServer
    plugin: SubjectiveGroupPlugin
    client: SSBClient
}

interface SSBServer {
    close: Function
    config: {
        path: string
    }
    whoami: Function
}

interface SSBClient {
    close: Function
    id: string
    config: {
        path: string
    }
    whoami: Function
}

const test = anyTest as TestInterface<TestContext>

test.beforeEach(async t => {
    const port = await getPort()
    const config = Config(`testnet${port}`, { port: port })

    const serverFactory = SecretStack(config)
        .use(require('ssb-db'))
        .use(require('ssb-master'))
        .use(require('ssb-backlinks'))
        .use(require('../../src/index'))

    const server = serverFactory(config) // start application

    config.manifest = server.getManifest()

    const keys = await pify(ssbKeys.load)(`${config.path}/secret`)

    const client = await pify(ssbClient)(keys, config)
        // @ts-ignore
        .then(value => {
            t.log('client connected')
            return value
        })
        // @ts-ignore
        .catch(reason => t.fail(`failed to connect client ${reason}`))

    t.context = {
        server: server,
        plugin: client.subjectiveGroup,
        client: client
    }

    return server.ready()
})

test.afterEach.always(async t => {
    await pify(t.context.client.close)()
    await pify(t.context.server.close)()
    await pify(rimraf)(t.context.server.config.path)
})

test('test simple about, no identity created', async t => {
    const client = t.context.client
    const plugin = t.context.plugin

    const currentFeed = await client.whoami()

    const identity: SubjectiveIdentity = await plugin.about(client.id)

    t.is(identity.id, currentFeed.id)
    t.is(identity.feeds.length, 1)
    t.is(identity.feeds[0], currentFeed.id)
})

test('test simple whoami, no identity created', async t => {
    const server = t.context.server
    const plugin = t.context.plugin

    const currentFeed = server.whoami()

    const identity = await plugin.whoami()

    t.is(identity.id, currentFeed.id)
    t.is(identity.feeds.length, 1)
    t.is(identity.feeds[0], currentFeed.id)
})

test('test simple about, identity created', async t => {
    const server = t.context.server
    const plugin = t.context.plugin

    const currentFeed = server.whoami()

    const identityPublished = await plugin.publishSubjectiveIdentity(
        'my strong passphrase X&U123' as StrongPassword,
        'myname' as Name
    )

    t.is(identityPublished.id[0], 'I')
    t.true(identityPublished.feeds.includes(currentFeed.id))
    t.is(identityPublished.name, 'myname')

    const identity: SubjectiveIdentity = await plugin.about(currentFeed.id)

    t.is(identity.id, identityPublished.id)
    t.true(identity.feeds.includes(currentFeed.id))
    t.is(identity.name, 'myname')
})
