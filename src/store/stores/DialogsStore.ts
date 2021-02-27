import { action, computed, flow, makeObservable, observable } from "mobx"
import { axios } from "../../core/axios"
import { RootStore } from "../RootStore"
import { statusLoadingType } from "../types"
import { userDataInterface } from "./UserStore"

export interface dialogInterface{
  _id: string
  members: userDataInterface[]
  newMessagesCount?: number
  lastMessage?: string
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
      fetchDialogs: flow,
      userId: computed,
      dialogAvatar: computed,
    })
  }

  setCurrentDialog(id: dialogInterface["_id"]) {
    console.log(id)
    const dialog: dialogInterface | undefined = this.dialogsList.find(item => item._id === id)
    if (dialog) {
      this.currentDialog = dialog
    }
  }

  
  get userId() {
    return this.rootStore.userStore.userData._id
  }

  get dialogAvatar() {
    return this.currentDialog?.members.filter(dialog => dialog._id !== this.userId)[0].avatar
  }

  *fetchDialogs() {
    if (this.rootStore.userStore.userDataStatus === statusLoadingType.LOADED) {
      this.dialogsList = []
      this.status = statusLoadingType.LOADING
      try {
        const { data } = yield axios.get(`/dialogs/forUser/${this.userId}`)
        this.dialogsList = data.data
        this.status = statusLoadingType.LOADED
      } catch (error) {
        console.log(error)
      }
    }
  }

}
