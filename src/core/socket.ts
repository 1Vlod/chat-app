
import { io, Socket } from "socket.io-client"
import { store } from ".."
import { messageInterface } from "../store/stores/MessagesStore"

interface ISocketInst {
  _socket: null | Socket,
  socket: Socket,
  initialize: (socket: Socket) => void
}
const socketInst: ISocketInst = {
  _socket: null,
  get socket() {
    if (!this._socket) {
      this._socket = io()
      this.initialize(this._socket)
    }
    return this._socket
  },

  initialize(socket: Socket) {
    socket.on("connect", () => {
      console.log(socket.id)
    })
    
    socket.on("newMessage", (msg: messageInterface) => {
      console.log(msg)
      store.messagesStore.addMessageToList(msg)
    })
  }
}

export { socketInst }
