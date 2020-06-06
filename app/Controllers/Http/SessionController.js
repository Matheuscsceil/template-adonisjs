'use strict'

class SessionController {
  // eslint-disable-next-line space-before-function-paren
  async store({ request, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return token
  }
}

module.exports = SessionController
