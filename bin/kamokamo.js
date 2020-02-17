#!/usr/bin/env node
'use strict'

const setConfig = require('../lib/set-config')
const handleDirs = require('../lib/handle-dirs')
const formatContent = require('../lib/format-content')
const writeJson = require('../lib/write-json')
const quack = require('../lib/quack')

async function kamokamo() {
  const config = setConfig()
  const filePaths = await handleDirs(config.content)
  const fileObjects = await Promise.all(
    filePaths.map(filePath => formatContent(filePath))
  )
  await writeJson(config.outputDir, fileObjects)
  quack()
}

kamokamo()