// Copyright (c) 2018, Brandon Lehmann, The TurtleCoin Developers
// Copyright (c) 2018, 2ACoin Developers
//
// Please see the included LICENSE file for more information.

'use strict'

const BlockChainCache = require('turtlecoin-blockexplorer-cache')
const util = require('util')

function log (message) {
  console.log(util.format('%s: %s', (new Date()).toUTCString(), message))
}

var blockCache = new BlockChainCache({
  rpcHost: 'public.2acoin.org',
  rpcPort: 17910,
  dbEngine: 'sqlite',
  dbFolder: 'db',
  dbFile: '2acoin',
  autoStartUpdater: true
})

blockCache.on('error', (err) => {
  log(util.format('[CACHE] %s', err))
})

blockCache.on('info', (info) => {
  log(util.format('[CACHE] %s', info))
})
