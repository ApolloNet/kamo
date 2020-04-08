const fs = require('fs-extra')
const recursive = require('recursive-readdir')
const config = require('./get-config.js')

/**
 * Handle dirs.
 * @return array filePaths
 */
module.exports = async function handleDirs () {
  const dirsPaths = await Promise.all(
    config.dirs.map(dir => handleDir(dir))
  )
  return dirsPaths.flat()
}

/**
 * Handle one dir.
 * @param string dir
 * @return Promised array of filePaths
 */
function handleDir (dir) {
  return fs.exists(dir)
    .then(() => recursive(dir))
    .then(filePaths => filePaths.filter(filePath => isMarkdown(filePath)))
    .catch(err => console.log(err))
}

/**
 * Is markdown ?
 * @param string filePath
 * @return boolean
 */
function isMarkdown (filePath) {
  return filePath.substring(filePath.length - 3) === '.md'
}