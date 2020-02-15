'use strict'

const test = require('ava')
const setConfig = require('../lib/set-config.js')

test('Validate config', t => {
  const config = setConfig(__dirname)
  t.truthy(config.content)
})