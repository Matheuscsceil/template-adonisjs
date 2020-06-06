'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class File extends Model {
  // eslint-disable-next-line space-before-function-paren
  static get computed() {
    return ['url']
  }

  // eslint-disable-next-line space-before-function-paren
  getUrl({ id }) {
    return `${Env.get('APP_URL')}/files/${id}`
  }
}

module.exports = File
