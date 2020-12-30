import axios from "axios"
import { action, flow, makeObservable, observable } from "mobx"
import { RootStore } from "../RootStore"
import { statusLoadingType } from "../types"

export interface dialogInterface{
  id: string | number,
  name: string,
  userId: string,
  unreadMessages: number,
  avatar: string,
  lastMessage: string,
  linkMessages: string,
}

export class DialogsStore {
  rootStore: RootStore
  dialogsList: dialogInterface[] = []
  status: statusLoadingType = statusLoadingType.NEVER
  currentDialog: dialogInterface | undefined = undefined

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      dialogsList: observable,
      status: observable,
      currentDialog: observable,
      setCurrentDialog: action,
      fetchDialogs: flow
    })
  }

  setCurrentDialog(id: dialogInterface["id"]) {
    const dialog: dialogInterface | undefined = this.dialogsList.find(item => item.id === id)
    if (dialog) {
      this.currentDialog = dialog
    }
  }

  *fetchDialogs() {
    if (this.rootStore.userStore.userDataStatus === statusLoadingType.LOADED) {
      this.dialogsList = []
      this.status = statusLoadingType.LOADING
      try {
        const { data } = yield axios.get(`/dialogs/${this.rootStore.userStore.userData._id}`)
        this.dialogsList = data.data
        this.status = statusLoadingType.LOADED
      } catch (error) {
        console.log(error)
      }
    }
  }
}
