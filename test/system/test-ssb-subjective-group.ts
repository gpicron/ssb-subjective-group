/* eslint @typescript-eslint/no-var-requires: off, curly: 2 */
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

interface TestContext {
    server: SSBServer
    plugin: SubjectiveGroupPlugin
}

interface SSBServer {
    close: Function
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
        .use(require('ssb-backlinks'))
        .use(require('../../src/index'))

    const server = serverFactory(config) // start application

    t.context = {
        server: server,
        plugin: server.subjectiveGroup
    }

    return server.ready()
})

test.afterEach.always(async t => {
    return await pify(t.context.server.close)().then(async () =>
        pify(rimraf)(t.context.server.config.path)
    )
})

test('test simple about, no identity created', async t => {
    const server = t.context.server
    const plugin = t.context.plugin

    const currentFeed = server.whoami()

    const identity: SubjectiveIdentity = await plugin.about(currentFeed.id)

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

    const identity: SubjectiveIdentity = await plugin.about(currentFeed.id)

    t.is(identity.id, identityPublished.id)
    t.true(identityPublished.feeds.includes(currentFeed.id))
})
