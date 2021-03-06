const { existsSync, mkdirSync, unlinkSync, writeFileSync } = require('fs'),
  { homedir } = require('os'),
  { join } = require('path'),
  cosmetic = require('cosmetic'),
  dir = join(homedir(), '.crackdown'),
  CRACKDOWN = cosmetic.magenta('crackdown')

module.exports = ({ filename }) => {
  // check dir
  if (!existsSync(dir)) mkdirSync(dir)
  // check path
  const path = join(dir, filename || 'lock')
  if (existsSync(path)) {
    throw new Error(`crackdown ${filename ? filename + ' ' : ''}is locked`)
  } else {
    writeFileSync(path, '')
  }
}
