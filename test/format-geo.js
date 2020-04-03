'use strict'

const test = require('ava')
const formatGeo = require('../lib/format-geo.js')

test('Format geo', async t => {
  const geo = await formatGeo('36 rue Molière 76000 Rouen')
  t.deepEqual(geo.lat, '49.4381635')
})