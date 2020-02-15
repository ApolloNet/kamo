'use strict'

const path = require('path')
const fs = require('fs-extra')

module.exports = function writeJson (outputDir, fileObjects) {
  const jsonFilePath = path.join(outputDir, 'contents.json')
  const formattedObject = formatObject(fileObjects)
  return fs.outputJson(jsonFilePath, formattedObject)
    .then(() => true)
    .catch(err => {
      console.log(err)
      return false
    })
}

function formatObject (fileObjects) {
  const formattedObject = {}
  fileObjects.forEach(fileObject => {
    formattedObject[fileObject.slug] = fileObject
  })
  return formattedObject
}