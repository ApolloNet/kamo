#!/usr/bin/env node
'use strict'

const setConfig = require('../lib/set-config')
const handleContent = require('../lib/handle-content')
const formatContent = require('../lib/format-content')

async function kamo() {
  const config = setConfig()
  const filePaths = await handleContent(config.content)
  const objects = await Promise.all(
    filePaths.map(filePath => formatContent(filePath))
  )
  console.log(objects)
}

kamo()