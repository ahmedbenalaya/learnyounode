const http = require('http')
let url = process.argv[2]
let body = ''

let getBody = function (callback) {
  http.get(url, function (response) {
    response.on('data', function (chunk) {
      body += chunk
    })
    response.on('end', function () {
      return callback()
    })
  })
}

getBody(function () {
  console.log(body.length)
  console.log(body)
})