import { io } from "socket.io-client"
import { store } from ".."
import { messageInterface } from "../store/stores/MessagesStore"

const socket = io()

socket.on("connect", () => {
  console.log(socket.id)
})

socket.on("newMessage", (msg: messageInterface) => {
  console.log(msg)
  store.messagesStore.addMessageToList(msg)
})

export { socket }
