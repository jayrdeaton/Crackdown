const { existsSync, unlinkSync } = require('fs'),
  { homedir } = require('os'),
  { join } = require('path'),
  rimraf = require('rimraf'),
  dir = join(homedir(), '.gatekeeper')

module.exports = ({ all, filename }) => {
  if (all) {
    // remove directory and all lock files
    rimraf.sync(dir)
  } else {
    // check path
    const path = join(dir, filename || 'lock')
    if (existsSync(path)) unlinkSync(path)
  }
}
