const fs = require('fs-extra')
const matter = require('gray-matter')
const marked = require('marked')

/**
 * Format Frontmatter and markdown.
 * @param  string filePath
 * @return object props
 */
module.exports = async function formatMarkdown (filePath) {
  const props = {}
  const fileContent = await fs.readFile(filePath)
  const frontmatter = await matter(fileContent)
  Object.keys(frontmatter.data).forEach(prop => {
    props[prop] = frontmatter.data[prop]
  })
  props.html = marked(frontmatter.content)
  return props
}
