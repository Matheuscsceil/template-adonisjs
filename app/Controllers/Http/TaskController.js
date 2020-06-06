'use strict'

const Task = use('App/Models/Task')

class TaskController {
  // eslint-disable-next-line space-before-function-paren
  async index({ params, request, response, view }) {
    const tasks = await Task.query()
      .where('project_id', params.projects_id)
      .with('user')
      .with('project')
      .with('file')
      .fetch()
    return tasks
  }

  // eslint-disable-next-line space-before-function-paren
  async store({ params, request, response }) {
    const data = request.only([
      'user_id',
      'title',
      'description',
      'due_date',
      'file_id'
    ])
    const task = await Task.create({ ...data, project_id: params.projects_id })
    return task
  }

  // eslint-disable-next-line space-before-function-paren
  async show({ params, request, response, view }) {
    const task = await Task.findOrFail(params.id)
    return task
  }

  // eslint-disable-next-line space-before-function-paren
  async update({ params, request, response }) {
    const task = await Task.findOrFail(params.id)
    const data = request.only([
      'user_id',
      'title',
      'description',
      'due_date',
      'file_id'
    ])
    task.merge(data)
    await task.save()
    return task
  }

  // eslint-disable-next-line space-before-function-paren
  async destroy({ params, request, response }) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
  }
}

module.exports = TaskController
