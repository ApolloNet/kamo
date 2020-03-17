'use strict'

const test = require('ava')
const setConfig = require('../lib/set-config.js')

test('Set config', t => {
  const config = setConfig(__dirname)
  t.truthy(config.dirs)
})