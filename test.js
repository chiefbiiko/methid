const tape = require('tape')
const methid = require('.')

tape('hashin a method signature to its id', t => {
  const sig = 'baz(uint32,bool)'
  const expected = '0xcdcd77c0'

  t.equal(methid(sig), expected)

  t.end()
})
