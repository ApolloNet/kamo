const test = require('ava')
const handleDirs = require('../lib/handle-dirs.js')

test('Handle dirs', async t => {
  const files = await handleDirs()
  t.deepEqual(files[0], 'test/mock/birdman.md')
})