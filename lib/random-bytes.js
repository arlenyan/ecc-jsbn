const randomBytes = (length) => {
  const bytes = []
  const _crypto = self.crypto || self.msCrypto
  const array = new Uint8Array(length)
  _crypto.getRandomValues(array)
  for (let i = 0; i < array.length; i++) {
    bytes.push(array[i])
  }
  return bytes
}

module.exports = {
  randomBytes
}