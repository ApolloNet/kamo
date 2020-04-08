const path = require('path')
const fs = require('fs-extra')

/**
 * Default config.
 */
const defaultConfig = {
  dirs: ['content'],
  home: '',
  locale: 'fr',
  geoFields: [],
  dateFields: ['date', 'dates'],
  dateFormats: [
    {name: 'short', format: 'd MMMM yyyy'},
    {name: 'long', format: 'd MMMM yyyy - H:mm'}
  ],
  dateMultipleFormat: 'From %s to %s'
}

/**
 * Load user config.
 * @return object
 */
function userConfig () {
  const filename = 'kamokamo.config.json'
  const filepath = process.env.NODE_ENV === 'test'
    ? path.join('./test', filename)
    : path.join(process.cwd(), filename)
  const content = fs.readFileSync(filepath)
  return content ? JSON.parse(content) : {}
}

module.exports = {...defaultConfig, ...userConfig()}