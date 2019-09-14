
module.exports = () => {
  const PersonService = require('./../app/services/person-service')
  const personService = new PersonService()
  personService.create({
    firstName: 'João',
    lastName: 'Silva',
    email: 'joao.silva@teste.com',
    photo: '',
    deleted: '0',
    active: '1',
    createdAt: '2019-09-14T00:29:44.975Z',
    updatedAt: null,
    deletedAt: null
  })

  personService.create({
    firstName: 'Maria',
    lastName: 'Silva',
    email: 'maria.silva@teste.com',
    photo: '',
    deleted: '0',
    active: '1',
    createdAt: '2019-09-14T00:29:44.975Z',
    updatedAt: null,
    deletedAt: null
  })
}
