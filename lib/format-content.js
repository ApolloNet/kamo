'use strict'

const path = require('path')
const fs = require('fs-extra')
const matter = require('gray-matter')
const marked = require('marked')
const slugify = require('slugify')

module.exports = async function formatContent (filePath) {
  const fileContent = await fs.readFile(filePath)
  const frontmatter = await matter(fileContent)
  const fileObject = {}
  fileObject.dir = path.dirname(filePath)
  fileObject.name  = path.basename(filePath, '.md')
  const pathWithoutExt = path.join(fileObject.dir, fileObject.name)
  fileObject.slug = slugify(pathWithoutExt, {
    remove: /[*+~.()'"!:@]/g,
    lower: true
  })
  Object.keys(frontmatter.data).map(prop => {
    fileObject[prop] = frontmatter.data[prop]
  })
  fileObject.html = marked(frontmatter.content)
  return fileObject
}
