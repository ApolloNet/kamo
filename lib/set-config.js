'use strict'

const path = require('path')
const fs = require('fs-extra')

module.exports = function setConfig(rootPath) {
  const cwd = rootPath || process.cwd()
  const overridePath = path.join(cwd, 'kamokamo.config.json')
  const override = fs.existsSync(overridePath) ? require(overridePath) : []
  const config = {
    dirs: ['content'],
    home: ''
  }
  Object.keys(config).map(setting => {
    config[setting] = override[setting] ? override[setting] : config[setting]
  })
  return config
}