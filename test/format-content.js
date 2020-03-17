'use strict'

const test = require('ava')
const setConfig = require('../lib/set-config.js')
const formatContent = require('../lib/format-content.js')

test('Format content', async t => {
  const filePath = './test/mock/the-ugly-duckling.md'
  const config = setConfig(__dirname)
  const fileObject = await formatContent(filePath, config)
  t.deepEqual(fileObject.title, "The Ugly Duckling")
})