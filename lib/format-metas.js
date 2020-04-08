const path = require('path')
const slugify = require('slugify')
const config = require('./get-config.js')

/**
 * Format dir, name and slug options from filePath.
 * @param string filePath
 * @return object {dir, name, slug}
 */
module.exports = function formatMetas (filePath) {
  const dir = path.dirname(filePath) 
  const basename = path.basename(filePath, '.md')
  const name = basename === 'index' ? '' : basename
  const slugify_options = {
    remove: /[*+~.()'"!:@]/g,
    lower: true
  }
  const slugRaw = path.join('/', dir, name)
  const slugified = slugify(slugRaw, slugify_options)
  const slug = slugified === config.home ? '/' : slugified
  return {dir, name, slug}
}