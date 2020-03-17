#!/usr/bin/env node
'use strict'

const process = require('process')

const setConfig = require('../lib/set-config')
const handleDirs = require('../lib/handle-dirs')
const formatContent = require('../lib/format-content')
const formatJson = require('../lib/format-json')

async function kamokamo() {
  const config = setConfig()
  const filePaths = await handleDirs(config.dirs)
  const fileObjects = await Promise.all(
    filePaths.map(filePath => formatContent(filePath))
  )
  const json = formatJson(fileObjects)
  process.stdout.write(json)
}

kamokamo()