const cosmetic = require('cosmetic'),
  { command, option } = require('termkit'),
  { lock, unlock } = require('../actions'),
  { version } = require('../../package.json'),
  CRACKDOWN = cosmetic.magenta('crackdown')

const program = command('crackdown')
  .version(version)
  .description('A CLI utility for creating, checking, and removing lock files')
  .commands([
    // auditShopify
    command('lock', '[filename]')
      .description('create a lockfile with an optional name')
      .action(({ filename }) => {
        try {
          lock({ filename })
          console.log(`${CRACKDOWN} locked ${filename ? filename + ' ' : ''}@ ${new Date().toLocaleString()}`)
        } catch(err) {
          console.log(`${CRACKDOWN} denied ${filename ? filename + ' ' : ''}@ ${new Date().toLocaleString()}`)
          process.exit(1)
        }
      }),
    command('unlock', '[filename]')
      .description('remove a lockfile with an optional name')
      .option('a', 'all', null, 'remove all crackdown lock files')
      .action(({ all, filename }) => {
        unlock({ all, filename })
        console.log(`${CRACKDOWN} unlocked ${filename ? filename + ' ' : ''}@ ${new Date().toLocaleString()}`)
      })
  ])

module.exports = program
