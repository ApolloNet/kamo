'use strict'

const fs = require('fs-extra')
const recursive = require('recursive-readdir')

module.exports = async function handleDirs (dirs) {
  const dirsArray = Array.isArray(dirs) ? dirs : [dirs]
  const dirsPaths = await Promise.all(
    dirsArray.map(dir => handleDir(dir))
  )
  const filePaths = [].concat(...dirsPaths)
  return filePaths
}

function handleDir (dir) {
  return fs.exists(dir)
    .then(() => recursive(dir))
    .then(filePaths => filePaths.filter(filePath => isMarkdown(filePath)))
    .catch(err => console.log(err))
}

function isMarkdown (filePath) {
  return filePath.substring(filePath.length - 3) === '.md'
}