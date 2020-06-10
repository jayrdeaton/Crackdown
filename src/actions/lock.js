const { existsSync, mkdirSync, unlinkSync, writeFileSync } = require('fs'),
  { homedir } = require('os'),
  { join } = require('path'),
  cosmetic = require('cosmetic'),
  dir = join(homedir(), '.gatekeeper')

module.exports = ({ filename }) => {
  // check dir
  if (!existsSync(dir)) mkdirSync(dir)
  // check path
  const path = join(dir, filename || 'lock')
  if (existsSync(path)) {
    console.log(`${cosmetic.magenta('Gatekeeper')} ${filename ? filename + ' ' : ''}locked @ ${new Date().toLocaleString()}`)
    process.exit(1)
  } else {
    writeFileSync(path, '')
  }
}
