
const NodeCache = require('node-cache')
const cache = new NodeCache()

function filter (searchCriteria, value) {
  let filtered = []
  if (!Array.isArray(value)) {
    value = Object.values(value)
  }

  if (Array.isArray(value)) {
    filtered = value.filter((item) => {
      if (item.hasOwnProperty(searchCriteria.KeyName)) {
        const subKey = Object.keys(item[searchCriteria.KeyName])
        if (Array.isArray(subKey) && subKey.length > 0) {
          return (item[searchCriteria.KeyName][subKey[0]] === searchCriteria.KeyValue[subKey[0]])
        } else {
          return (item[searchCriteria.KeyName] === searchCriteria.KeyValue)
        }
      }
    })
  }

  return filtered
}

class CacheStorageService {
  constructor () {

  }

  putItem (params, callback) {
    if (!params.hasOwnProperty('Key')) {
      throw new Error('Params must have Key')
    }

    if (!params.hasOwnProperty('Item')) {
      throw new Error('Params must have Item')
    }
    cache.set(params.Key, params.Item, (err, success) => {
      if (err || success === false) {
        const error = (err) || new Error('Unable to create item')
        callback(error)
      } else {
        callback(null, success)
      }
    })
  }

  getItem (params, callback) {
    if (!params.hasOwnProperty('Key')) {
      throw new Error('Params must have Key')
    }

    const objKeys = Object.keys(params.Key)
    if (!Array.isArray(objKeys) || objKeys.length === 0) {
      throw new Error('Params must contain type')
    }

    const objKey = objKeys[0]
    let key = params.Key[objKey]
    const getKeyType = Object.keys(key)
    if (Array.isArray(getKeyType) && getKeyType.length > 0) {
      key = key[getKeyType[0]]
    }

    cache.get(key, (err, value) => {
      if (err || value === undefined) {
        const error = (err) || new Error('Unable to get item')
        callback(error)
      } else {
        const result = {
          Item: value
        }
        callback(null, result)
      }
    })
  }

  scan (params, callback) {
    let search = false
    let searchCriteria = {}
    if (params.hasOwnProperty('Search') && params.Search === true) {
      search = true
      searchCriteria = params
      params = cache.keys()
    } else {
      if ((Array.isArray(params) && params.length === 0) || !Array.isArray(params)) {
        params = cache.keys()
      }
    }
    cache.mget(params, (err, value) => {
      const result = {
        Items: {}
      }

      if (err) {
        callback(err, null)
      } else {
        if (search) {
          result.Items = filter(searchCriteria, value)
        } else {
          result.Items = Object.values(value)
        }

        callback(null, result)
      }
    })
  }
}

module.exports = CacheStorageService
