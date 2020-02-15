'use strict'

const path = require('path')
const fs = require('fs-extra')

function setConfig(rootPath) {
  const cwd = rootPath || process.cwd()
  const overridePath = path.join(cwd, 'kamo.config.json')
  const override = fs.existsSync(overridePath) ? require(overridePath) : []
  const config = require('./kamo.config.json')
  Object.keys(config).map(setting => {
    config[setting] = override[setting] ? override[setting] : config[setting]
  })
  return config
}

module.exports = setConfig