const test = require('ava')
const formatContent = require('../lib/format-content.js')

test('Format content', async t => {
  const filePath = './test/mock/the-ugly-duckling.md'
  const content = await formatContent(filePath)
  t.deepEqual(content.name, 'the-ugly-duckling')
  t.deepEqual(content.title, 'The Ugly Duckling')
  t.deepEqual(content.geo.lat, '49.4381635')
  t.deepEqual(content.dates[0].start.short, '13 septembre 2020')
})