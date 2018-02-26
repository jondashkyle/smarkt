module.exports = {
  setBool: setBool
}

function setBool (str) {
  if (str === 'true') return true
  if (str === 'false') return false
  return str
}
