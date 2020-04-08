const test = require('ava')
const handleDirs = require('../lib/handle-dirs.js')

test('Handle dirs', async t => {
  const files = await handleDirs()
  t.truthy(files.includes('test/mock/birdman.md'))
})