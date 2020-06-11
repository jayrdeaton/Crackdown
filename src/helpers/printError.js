const cosmetic = require('cosmetic')

module.exports = (error) => {
  if (!error) return
  console.log(`crackdown ${cosmetic.red(`${error.name}:`)} ${error.message}`)
}
