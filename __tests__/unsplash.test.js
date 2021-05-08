const axios = require('axios')
const { getRandomImage } = require('../unsplash')

jest.mock('axios', () => ({
  get: jest.fn(),
}))

describe('test unsplash.js', () => {
  describe('test #getRandomImage', () => {
    it('resolves with response', (cb) => {
      const response = {
        urls: {
          full: 'some image url',
        },
      }

      axios.get.mockImplementationOnce(() => Promise.resolve(response))

      getRandomImage({}).then((data) => {
        expect(data).toEqual(response)
        cb()
      })
    })

    it('rejects with error', (cb) => {
      axios.get.mockImplementationOnce(() => Promise.reject('Some error'))

      getRandomImage({})
        .then((_) => {
          throw Error('Ooops, you should not be there')
        })
        .catch((err) => {
          expect(err).toEqual('Some error')
          cb()
        })
    })
  })
})
