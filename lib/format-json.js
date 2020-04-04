/**
 * Format json.
 * @param array contents
 * @return string json
 */
module.exports = function formatJson (contents) {
  const formattedObject = {}
  contents.forEach(content => {
    formattedObject[content.slug] = content
  })
  return JSON.stringify(formattedObject)
}