'use strict'

const test = require('ava')
const handleContent = require('../lib/handle-content.js')

test('Handle content', async t => {
  const files = await handleContent('./test/mock')
  t.true(Array.isArray(files))
})