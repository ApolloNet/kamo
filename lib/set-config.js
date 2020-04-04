const path = require('path')
const fs = require('fs-extra')

/**
 * Set config.
 * @param string rootPath
 * @return object config
 */
module.exports = function setConfig(rootPath) {
  const cwd = rootPath || process.cwd()
  const overridePath = path.join(cwd, 'kamokamo.config.json')
  const override = fs.existsSync(overridePath) ? require(overridePath) : []
  const config = {
    dirs: ['content'],
    home: '',
    locale: 'fr',
    dateFields: ['date', 'dates'],
    dateFormats: [
      {name: 'short', format: 'd MMMM yyyy'},
      {name: 'long', format: 'd MMMM yyyy - H:mm'}
    ],
    dateMultipleFormat: 'From %s to %s',
  }
  Object.keys(config).forEach(setting => {
    config[setting] = override[setting] ? override[setting] : config[setting]
  })
  return config
}