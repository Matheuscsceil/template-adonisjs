'use strict'

const Ws = use('Ws')
const Project = use('App/Models/Project')

const ProjectHook = exports = module.exports = {}

ProjectHook.sendWs = async (projectInstance) => {
  const topic = Ws.getChannel('projects').topic('projects')
  if (topic) {
    const projects = await Project.all()
    topic.broadcast('all_projects', projectInstance)
  }
}
