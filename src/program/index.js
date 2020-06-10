const { command, option } = require('termkit'),
  { lock, unlock } = require('../actions'),
  { version } = require('../../package.json')

const program = command('gatekeeper')
  .version(version)
  .description('A CLI utility for creating, checking, and removing lock files')
  .commands([
    // auditShopify
    command('lock', '[filename]')
      .description('create a lockfile with an optional name')
      .action(lock),
    command('unlock', '[filename]')
      .description('remove a lockfile with an optional name')
      .option('a', 'all', null, 'remove all gatekeeper lock files')
      .action(unlock)
  ])

module.exports = program
