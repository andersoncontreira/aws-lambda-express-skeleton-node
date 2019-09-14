const DemoController = require('../../controllers/v1/person-controller')

module.exports = {
  map: (router) => {
    const version = 'v1'
    const versionPath = '/' + version

    router.get(process.env.ROOT_PATH + versionPath + '/person/:uuid', (request, response) => DemoController.get(request, response))
    router.get(process.env.ROOT_PATH + versionPath + '/person', (request, response) => DemoController.list(request, response))
    // router.post(process.env.ROOT_PATH + versionPath + '/person', (request, response) => DemoController.create(request, response))
    // router.put(process.env.ROOT_PATH + versionPath + '/person', (request, response) => DemoController.update(request, response))
    // router.delete(process.env.ROOT_PATH + versionPath + '/person', (request, response) => DemoController.delete(request, response))

    return router
  }
}
