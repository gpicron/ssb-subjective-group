import test from 'ava'

/**
 * Unit under test
 */

import * as ids from '../../../src/model/Ids'

test('validate FeedIdCodec', t => {
    t.true(
        ids.FeedIdCodec.is(
            '@Rkf51nyXTdgxoN9905Z+jH+Ld6qI4YshrI4PEmBGGXU=.ed25519'
        )
    )
    t.false(ids.FeedIdCodec.is('@Rkf51nyXTdgxoN9905Z+jH+Ld6qI4YshrI4PEmBGGXU='))
    t.false(
        ids.FeedIdCodec.is(
            'Rkf51nyXTdgxoN9905Z+jH+Ld6qI4YshrI4PEmBGGXU=.ed25519'
        )
    )
    t.false(ids.FeedIdCodec.is('Rkf51nyXTdgxoN9905Z+jH+Ld6qI4YshrI4PEmBGGXU='))
})
