const formatMetas = require('./format-metas')
const formatMarkdown = require('./format-markdown')
const formatGeo = require('./format-geo')

/**
 * Format content.
 * @param string filePath
 * @param object config
 * @return object content
 */
module.exports = async function formatContent (filePath, config) {
  const metas = formatMetas(filePath, config)
  const props = await formatMarkdown(filePath)
  const geo = props.address && await formatGeo(props.address)
  return {
    ...metas,
    ...props,
    ...geo
  }
}
