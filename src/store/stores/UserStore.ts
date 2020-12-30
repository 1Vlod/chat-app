import axios from "axios"
import { flow, makeObservable, observable } from "mobx"
import { RootStore } from "../RootStore"
import { statusLoadingType } from "../types"

export interface userDataInterface {
  _id: string
  name: string
  email: string
  login: string
  avatar?: string
  info?: string
}



export class UserStore {
  rootStore: RootStore
  userData: userDataInterface = {} as userDataInterface
  userDataStatus: statusLoadingType = statusLoadingType.NEVER

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      userData: observable,
      userDataStatus: observable,
      fetchUser: flow,
    })
  }

  *fetchUser() {
    this.userData = {} as userDataInterface
    this.userDataStatus = statusLoadingType.LOADING
    try {
      const { data } = yield axios.get("/users/1")
      this.userDataStatus = statusLoadingType.LOADED
      this.userData = data
    } catch (error) {
      console.log(error)
      this.userDataStatus = statusLoadingType.ERROR
    }
  }
  
}
