#!/usr/bin/env node
'use strict'

const setConfig = require('../lib/set-config')
const handleContent = require('../lib/handle-content')

function kamo() {
  const config = setConfig()
  const files = handleContent(config.content)
    .then((files) => {
      console.log(files)
    })
}

kamo()