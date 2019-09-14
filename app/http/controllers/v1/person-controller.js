const ApiResponse = require('./../../api-response')
const PersonService = require('../../../services/person-service')

const personService = new PersonService()
/**
 *
 */
class PersonController {
  /**
     *
     */
  static get (request, response) {
    const apiResponse = new ApiResponse(request, response)
    const uuid = request.params.uuid
    const promise = personService.get(uuid)
    promise.then((person) => {
      apiResponse.body = {
        result: true,
        message: 'Person found with success',
        data: person
      }

      apiResponse.json()
    }).catch((err) => {
      console.error(err)

      apiResponse.status(400)
      apiResponse.body = {
        result: false,
        message: personService.getErrorMessage()
      }
      apiResponse.json()
    })
  }

  /**
     *
     */
  static list (request, response) {
    const apiResponse = new ApiResponse(request, response)

    // TODO implementar RESTful filters etc
    const promise = personService.list()
    promise.then((resultList) => {
      apiResponse.body = {
        result: true,
        message: 'Person list success',
        data: resultList
      }

      apiResponse.json()
    }).catch((err) => {
      console.error(err)

      apiResponse.status(400)
      apiResponse.body = {
        result: false,
        message: personService.getErrorMessage()
      }
      apiResponse.json()
    })
  }

  /**
     *
     */
  static create (request, response) {
    const apiResponse = new ApiResponse(request, response)

    const person = personService.factoryPersonObject(request.body)

    if (personService.validate(person)) {
      const promise = personService.create(person)
      promise.then((res) => {
        // filter data
        // res.

        apiResponse.body = {
          result: true,
          message: 'Person registered with success',
          data: res
        }
        apiResponse.status(201)
        apiResponse.json()
      }).catch((err) => {
        console.error(err)

        apiResponse.status(400)
        apiResponse.body = {
          result: false,
          message: personService.getErrorMessage()
        }
        apiResponse.json()
      })
    } else {
      apiResponse.status(400)
      apiResponse.body = {
        result: false,
        message: personService.getErrorMessage()
      }
      apiResponse.json()
    }
  }

  /**
     *
     */
  static update (request, response) {
    const apiResponse = new ApiResponse(request, response)
    apiResponse.body = {
      result: false,
      message: 'Not Implemented yet!'
    }
    apiResponse.json()
  }

  static delete (request, response) {
    const apiResponse = new ApiResponse(request, response)
    apiResponse.body = {
      result: false,
      message: 'Not Implemented yet!'
    }
    apiResponse.json()
  }
}

module.exports = PersonController
