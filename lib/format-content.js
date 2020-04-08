const formatMetas = require('./format-metas')
const formatMarkdown = require('./format-markdown')
const formatDates = require('./format-dates')
const formatGeo = require('./format-geo')

/**
 * Format content.
 * @param string filePath
 * @return object content
 */
module.exports = async function formatContent (filePath) {
  const metas = formatMetas(filePath)
  const props = await formatMarkdown(filePath)
  props.dates = formatDates(props)
  props.geo = await formatGeo(props)
  return {...metas, ...props}
}
