const postImage = require('./postImage.controller')

module.exports = server => {
  server.post('/api/postImage', postImage)
  // server.get('/api/getImage')
}
