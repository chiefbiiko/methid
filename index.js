const createHash = require('keccak')

module.exports = sig =>
  '0x' + createHash('keccak256').update(sig).digest('hex').slice(0, 8)
