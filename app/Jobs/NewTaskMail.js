'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')
const sendNotification = require('../Utils/sendNotification')

class NewTaskMail {
  static get concurrency() {
    return 1
  }

  static get key() {
    return 'NewTaskMail-job'
  }

  async handle({ username, title, file, email }) {
    console.log(`Job: ${NewTaskMail.key}`)

    try {
      sendNotification("Nova tarefa criada", "Uma nova tarefa foi criada para você", { user: 22 })
    } catch (error) {
      console.log(error)
    }

    await Mail.send(
      ['emails.new_task'],
      { username, title, hasAttachment: !!file },
      message => {
        message
          .to(email)
          .from('math.cs.ceil@gmail.com', 'Matheus')
          .subject('Nova Tarefa')

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name
          })
        }
      }
    )
  }
}

module.exports = NewTaskMail
