import { flow, makeObservable, observable } from "mobx"
import { axios } from "../../core/axios"
import { RootStore } from "../RootStore"
import { statusLoadingType } from "../types"

export interface messageInterface {
  _id: string
  author: string
  text: string
  dialog: string
  createdAt: string
  updatedAt: string
}

interface Response<T> {
  status: string
  data: T
}

export class MessagesStore {
  rootStore: RootStore
  messagesList: messageInterface[] = []
  status: statusLoadingType = statusLoadingType.NEVER
  addMessageStatus: statusLoadingType = statusLoadingType.NEVER

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      messagesList: observable,
      status: observable,
      addMessageStatus: observable,
      fetchMessages: flow,
      addMessage: flow,
    })
  }

  *fetchMessages(id: string) {
    this.messagesList = []
    this.status = statusLoadingType.LOADING
    try {
      const { data } = yield axios.get<Response<messageInterface[]>>(
        `/messages/forDialog/${id}`
      )
      this.messagesList = data.data
      this.status = statusLoadingType.LOADED
    } catch (error) {
      console.log(error)
      this.status = statusLoadingType.ERROR
    }
  }

  *addMessage(text: string) {
    const message = {
      text,
      author: this.rootStore.userStore.userData._id,
      dialog: this.rootStore.dialogsStore.currentDialog?._id
    }

    this.addMessageStatus = statusLoadingType.LOADING
    try {
      const data = yield axios.post(`/messages`, message)
      console.log(data)
      this.status = statusLoadingType.LOADED
    } catch (error) {
      console.log(error)
      this.addMessageStatus = statusLoadingType.ERROR
    }
  }
}
