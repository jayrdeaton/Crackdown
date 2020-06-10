const cosmetic = require('cosmetic')

module.exports = (error) => {
  if (!error) return
  console.log(`Gatekeeper ${cosmetic.red(`${error.name}:`)} ${error.message}`)
}
