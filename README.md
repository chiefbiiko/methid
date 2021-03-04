# methid

[![ci](https://github.com/chiefbiiko/methid/workflows/ci/badge.svg)](https://github.com/chiefbiiko/methid/actions)

func & cli that computes an ethereum method id given its signature

## usage

### `.js`

```js
var methid = require("methid")

methid("baz(uint32,bool)")
//> 0xcdcd77c0
```

### `cli`

```bash
methid v1.0.0

Usage: methid [SIGNATURE]

Computes an ethereum method id given its signature.

Checks stdin for piped data, otherwise assumes SIGNATURE to be set.

Options:
  -h, --help            print help
  -v, --version         print version

Examples:
  methid "baz(uint32,bool)"
  echo "baz(uint32,bool)" | methid

```

## License

[MIT](./LICENSE)