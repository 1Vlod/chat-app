import { DialogsStore } from "./stores/DialogsStore"
import { MessagesStore } from "./stores/MessagesStore"
import { UserStore } from "./stores/UserStore"

export class RootStore {
  userStore: UserStore
  dialogsStore: DialogsStore
  messagesStore: MessagesStore

  constructor() {
    this.userStore = new UserStore(this)
    this.dialogsStore = new DialogsStore(this)
    this.messagesStore = new MessagesStore(this)
  }
}
