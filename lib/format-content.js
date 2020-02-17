'use strict'

const path = require('path')
const fs = require('fs-extra')
const matter = require('gray-matter')
const marked = require('marked')
const slugify = require('slugify')

module.exports = async function formatContent (filePath) {
  const fileObject = {}
  fileObject.dir = formatDir(filePath)
  fileObject.name  = path.basename(filePath, '.md')
  fileObject.slug = slugify(fileObject.name, {
    remove: /[*+~.()'"!:@]/g,
    lower: true
  })
  const fileContent = await fs.readFile(filePath)
  const frontmatter = await matter(fileContent)
  Object.keys(frontmatter.data).map(prop => {
    fileObject[prop] = frontmatter.data[prop]
  })
  fileObject.html = marked(frontmatter.content)
  return fileObject
}

function formatDir (filePath) {
  const dirFull = path.dirname(filePath)
  const dirArray = dirFull.split(path.sep)
  dirArray.shift()
  const dir = dirArray.join(path.sep)
  return dir
}