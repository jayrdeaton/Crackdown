#!/usr/bin/env node

const { helpers, program } = require('./src'),
  { printError } = helpers

const run = async(args) => {
  try {
    await program.parse(args)
  } catch(err) {
    printError(err)
  }
  process.exit()
}

run(process.argv)
