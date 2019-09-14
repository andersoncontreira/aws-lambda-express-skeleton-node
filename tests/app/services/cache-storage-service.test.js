const uuidService = require('uuid')
const CacheStorageService = require('./../../../app/services/cache-storage-service')
const storage = new CacheStorageService()

let uuid = null

beforeAll(() => {
  uuid = uuidService.v1()
})

describe('Testing the cache storage', () => {
  test('Cache putItem', (done) => {
    const params = {
      Key: uuid,
      Item: {
        uuid: { S: uuid },
        name: { S: 'John' }
      }
    }

    console.log('testing with params', params)
    storage.putItem(params, (error, result) => {
      if (error) {
        console.error('error', error)
        result = null
      } else {
        console.log('result', result)
      }

      expect(result).not.toBeNull()
      done()
    })
  })

  test('Cache getItem', (done) => {
    const params = {
      Key: { uuid: { S: uuid } }
    }

    console.log('testing with params', params)
    storage.getItem(params, (error, result) => {
      if (error) {
        console.error('error', error)
        result = null
      } else {
        console.log('result', result)
      }
      expect(result).not.toBeNull()
      done()
    })
  })

  test('Cache scan', (done) => {
    const params = []
    console.log('testing with params', params)
    storage.scan(params, (error, result) => {
      if (error) {
        console.error('error', error)
        result = null
      } else {
        console.log('result', result)
      }

      expect(result).not.toBeNull()
      done()
    })
  })

  test('Cache search', (done) => {
    const putUuid = uuidService.v1()
    const putParams = {
      Key: putUuid,
      Item: {
        uuid: { S: putUuid },
        name: { S: 'Maria' }
      }
    }
    console.log('Saving new item with params', putParams)
    storage.putItem(putParams, (err, result) => {
      const params = {
        Search: true,
        KeyName: 'uuid',
        KeyValue: { S: uuid }
      }
      console.log('testing with params', params)
      storage.scan(params, (error, result) => {
        if (error) {
          console.error('error', error)
          result = null
        } else {
          console.log('result', result)
        }

        expect(result).not.toBeNull()
        // TOOD implement other validations
        done()
      })
    })
  })
})
