const cosmetic = require('cosmetic')

module.exports = (error) => {
  if (!error) return
  console.log(`${cosmetic.red(`Gatekeeper ${error.name}:`)} ${error.message}`)
}
