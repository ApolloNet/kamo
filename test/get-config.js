const test = require('ava')
const config = require('../lib/get-config.js')

test('Load config from config file', t => {
  const testFormat = 'EEE, dd LLL yyyy HH:mm:ss xx'
  const configDate = config.dateFormats
    .filter(format => format.name === 'rss')
    .pop()
  t.deepEqual(configDate.format, testFormat)
})