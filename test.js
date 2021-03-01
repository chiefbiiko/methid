var tape = require("tape")
var meth = require(".")

tape("hashin a method signature to its id", t => {
  var sig = "baz(uint32,bool)"
  var expected = "0xcdcd77c0"

  t.equal(meth(sig), expected)

  t.end()
})
