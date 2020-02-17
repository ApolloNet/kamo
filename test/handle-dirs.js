'use strict'

const test = require('ava')
const handleDirs = require('../lib/handle-dirs.js')

test('Handle one dir', async t => {
  const dir = './test/mock'
  const files = await handleDirs(dir)
  t.true(Array.isArray(files))
})

test('Handle multiple dirs', async t => {
  const dirs = ['./test/mock']
  const files = await handleDirs(dirs)
  t.true(Array.isArray(files))
})