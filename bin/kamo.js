#!/usr/bin/env node
'use strict'

const setConfig = require('../lib/set-config')
const handleContent = require('../lib/handle-content')
const formatContent = require('../lib/format-content')
const writeJson = require('../lib/write-json')
const quack = require('../lib/quack')

async function kamo() {
  const config = setConfig()
  const filePaths = await handleContent(config.content)
  const fileObjects = await Promise.all(
    filePaths.map(filePath => formatContent(filePath))
  )
  await writeJson(config.outputDir, fileObjects)
  quack()
}

kamo()