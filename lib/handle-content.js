'use strict'

const fs = require('fs-extra')
const recursive = require('recursive-readdir')

module.exports = function handleContent (dir) {
  return fs.exists(dir)
    .then(() => recursive(dir))
    .then(filepaths => filepaths.filter(filepath => isMarkdown(filepath)))
    .catch(err => console.log(err))
}

function isMarkdown (filepath) {
  return filepath.substring(filepath.length - 3) === '.md'
}