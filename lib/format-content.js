const formatMetas = require('./format-metas')
const formatMarkdown = require('./format-markdown')
const formatDates = require('./format-dates')
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
  props.dates = formatDates(props, config)
  props.geo = await formatGeo(props.address)
  return {...metas, ...props}
}
