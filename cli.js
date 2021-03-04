#!/usr/bin/env node

const fs = require('fs')
const minimist = require('minimist')
const methid = require('.')
const pkg = require('./package.json')

const argv = minimist(process.argv.slice(2), {
  alias: { help: 'h', version: 'v' }
})

if (argv.version) {
  console.log(`${pkg.name} v${pkg.version}`)
  process.exit(0)
}

if (argv.help) {
  console.log(
    `${pkg.name} v${pkg.version}

    Usage: methid [SIGNATURE]

    Computes an ethereum method id given its signature.

    Checks stdin for piped data, otherwise assumes SIGNATURE to be set.

    Options:
      -h, --help\t\tprint help
      -v, --version\t\tprint version

    Examples:
      methid "baz(uint32,bool)"
      echo "baz(uint32,bool)" | methid
      `.replace(/^ {4}/gm, '')
  )
  process.exit(0)
}

fs.fstat(0, function (err, stats) {
  if (err) throw err

  // if sth gettin piped in
  if (stats.isFIFO()) {
    let piped = ''

    process.stdin.once('readable', function () {
      let registeredEndListener = false
      const chunk = process.stdin.read()

      if (!chunk) throw Error('no method signature')

      if (!registeredEndListener) {
        registeredEndListener = true
        process.stdin.once('end', function () {
          console.log(methid(piped.trim()))
        })
      }

      piped += chunk.toString('utf8')
    })
  } else {
    const sig = process.argv[process.argv.length - 1]?.trim()

    if (!sig) throw Error('no method signature')

    console.log(methid(sig))
  }
})
