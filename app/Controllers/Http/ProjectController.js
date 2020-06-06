'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  // eslint-disable-next-line space-before-function-paren
  async index({ request, response, view }) {
    const { page } = request.get()
    const projects = await Project.query()
      .with('user')
      .paginate(page)
    return projects
  }

  // eslint-disable-next-line space-before-function-paren
  async store({ request, response, auth }) {
    const data = request.only(['title', 'description'])
    const project = await Project.create({ ...data, user_id: auth.user.id })
    return project
  }

  // eslint-disable-next-line space-before-function-paren
  async show({ params, request, response, view }) {
    const project = await Project.findOrFail(params.id)
    await project.load('user')
    await project.load('tasks')
    return project
  }

  // eslint-disable-next-line space-before-function-paren
  async update({ params, request, response }) {
    const project = await Project.findOrFail(params.id)
    const data = request.only(['title', 'description'])
    project.merge(data)
    await project.save()
    return project
  }

  // eslint-disable-next-line space-before-function-paren
  async destroy({ params, request, response }) {
    const project = await Project.findOrFail(params.id)
    await project.delete()
  }
}

module.exports = ProjectController
