'use strict'

const path = require('path')
const fs = require('fs-extra')
const matter = require('gray-matter')
const marked = require('marked')
const slugify = require('slugify')
const formatGeo = require('./format-geo')

module.exports = async function formatContent (filePath, config) {
  let fileObject = {}
  fileObject = formatSlug(fileObject, filePath, config)
  fileObject = await formatFrontmatter(fileObject, filePath)
  if (fileObject.address) {
    formatGeo(fileObject.address).then(geo => {
      fileObject.lat = geo.lat
      fileObject.lon = geo.lon
    })
  }
  return fileObject
}

function formatSlug (fileObject, filePath, config) {
  fileObject.dir = path.dirname(filePath)
  fileObject.name = path.basename(filePath, '.md')
  fileObject.name = fileObject.name === 'index'
    ? ''
    : fileObject.name
  const slug = path.join('/', fileObject.dir, fileObject.name)
  fileObject.slug = slugify(slug, {
    remove: /[*+~.()'"!:@]/g,
    lower: true
  })
  if (fileObject.slug === config.home) {
    fileObject.slug = '/'
  }
  return fileObject
}

async function formatFrontmatter (fileObject, filePath) {
  const fileContent = await fs.readFile(filePath)
  const frontmatter = await matter(fileContent)
  Object.keys(frontmatter.data).forEach(prop => {
    fileObject[prop] = frontmatter.data[prop]
  })
  fileObject.html = marked(frontmatter.content)
  return fileObject
}
