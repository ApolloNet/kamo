const test = require('ava')
const formatGeo = require('../lib/format-geo.js')

test('Format geo', async t => {
  const props = {
    address: '36 rue Molière 76000 Rouen'
  }
  const geo = await formatGeo(props)
  t.truthy(geo[0].lat)
})