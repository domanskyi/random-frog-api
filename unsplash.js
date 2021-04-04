const axios = require('axios')

exports.getRandomImage = (params) =>
  axios.get('https://api.unsplash.com/photos/random', { params })
