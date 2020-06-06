'use strict'

const User = use('App/Models/User')

class UserController {
  // eslint-disable-next-line space-before-function-paren
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)
    return user
  }
}

module.exports = UserController
