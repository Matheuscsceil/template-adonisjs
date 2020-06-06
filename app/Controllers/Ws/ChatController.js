'use strict'

class ChatController {
  constructor({ socket, request, auth }) {
    this.socket = socket
    this.request = request

    //console.log(auth.user)
  }

  onMessage(data) {
    console.log(data)
  }

  onOpen() {

  }

  onError() {

  }

  onClose() {

  }
}

module.exports = ChatController
