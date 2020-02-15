'use strict'

const test = require('ava')
const formatContent = require('../lib/format-content.js')

test('Format content', async t => {
  const filePath = './test/mock/the-ugly-duckling.md'
  const fileObject = await formatContent(filePath)
  t.deepEqual(fileObject.title, "The Ugly Duckling")
})