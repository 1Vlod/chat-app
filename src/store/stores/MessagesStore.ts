import axios from "axios"
import { flow, makeObservable, observable } from "mobx"
import { RootStore } from "../RootStore"
import { statusLoadingType } from "../types"

export interface messageInterface {
  id: string
  _id: string
  author: string
  text: string
  timestamp: string
}

interface Response<T> {
  status: string
  data: T
}

export class MessagesStore {
  rootStore: RootStore
  messagesList: messageInterface[] = []
  status: statusLoadingType = statusLoadingType.NEVER

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      messagesList: observable,
      status: observable,
      fetchMessages: flow,
    })
  }

  *fetchMessages(id: string) {
    this.messagesList = []
    this.status = statusLoadingType.LOADING
    try {
      const { data } = yield axios.get<Response<messageInterface[]>>(
        `/messages/${id}`
      )
      this.messagesList = data.data
      this.status = statusLoadingType.LOADED
    } catch (error) {
      console.log(error)
    }
  }
}
