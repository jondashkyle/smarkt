module.exports = {
  parseSpecial: parseSpecial
}

function parseSpecial (str) {
  if (str === 'true') return true
  if (str === 'false') return false
  if (str === '[]') return []
  if (str === '{}') return {}
  return str
}
