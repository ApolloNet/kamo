'use strict'

module.exports = function formatJson (fileObjects) {
  const formattedObject = {}
  fileObjects.forEach(fileObject => {
    formattedObject[fileObject.slug] = fileObject
  })
  return JSON.stringify(formattedObject)
}