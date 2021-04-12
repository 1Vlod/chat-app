import { DialogsStore } from "./stores/DialogsStore";
import { MessagesStore } from "./stores/MessagesStore";
import { UsersStore } from "./stores/UsersStore";
import { UserStore } from "./stores/UserStore";

export class RootStore {
  userStore: UserStore;
  dialogsStore: DialogsStore;
  messagesStore: MessagesStore;
  usersStore: UsersStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.dialogsStore = new DialogsStore(this);
    this.messagesStore = new MessagesStore(this);
    this.usersStore = new UsersStore(this);
  }
}
