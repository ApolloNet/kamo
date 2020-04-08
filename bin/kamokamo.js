#!/usr/bin/env node

const process = require('process')
const handleDirs = require('../lib/handle-dirs')
const formatContent = require('../lib/format-content')
const formatJson = require('../lib/format-json')

async function kamokamo() {
  const filePaths = await handleDirs()
  const contents = await Promise.all(
    filePaths.map(filePath => formatContent(filePath))
  )
  const json = formatJson(contents)
  process.stdout.write(json)
}

kamokamo()