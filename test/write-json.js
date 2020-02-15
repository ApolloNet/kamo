'use strict'

const os = require('os')
const path = require('path')
const test = require('ava')
const fs = require('fs-extra')
const writeJson = require('../lib/write-json.js')

test('Write Json', async t => {
  const fileObjects = [
    {
      title: "The Ugly Duckling",
      slug: 'the-ugly-duckling'
    }
  ]
  const outputDir = fs.mkdtempSync(os.tmpdir() + path.sep)
  const written = await writeJson(outputDir, fileObjects)
  t.truthy(written)
})