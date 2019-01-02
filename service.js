'use strict'

const TwoACoinAPI = require('./')
const util = require('util')

var server = new TwoACoinAPI()

function log (message) {
  console.log(util.format('%s: %s', (new Date()).toUTCString(), message))
}

server.on('error', (err) => {
  log(err)
})

server.on('ready', (ip, port) => {
  log(util.format('Server is listening on %s:%s ...', ip, port))
})

server.on('info', (info) => {
  log(info)
})

server.start()
