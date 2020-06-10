const { existsSync, unlinkSync } = require('fs'),
  { homedir } = require('os'),
  { join } = require('path'),
  dir = join(homedir(), '.gatekeeper')

module.exports = ({ filename }) => {
  // check path
  const path = join(dir, filename || 'lock')
  if (existsSync(path)) unlinkSync(path)
}
