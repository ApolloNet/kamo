#!/usr/bin/env node

const process = require('process')
const setConfig = require('../lib/set-config')
const handleDirs = require('../lib/handle-dirs')
const formatContent = require('../lib/format-content')
const formatJson = require('../lib/format-json')

async function kamokamo() {
  const config = setConfig()
  const filePaths = await handleDirs(config.dirs)
  const contents = await Promise.all(
    filePaths.map(filePath => formatContent(filePath, config))
  )
  const json = formatJson(contents)
  process.stdout.write(json)
}

kamokamo()