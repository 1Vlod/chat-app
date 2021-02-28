
import { computed, flow, makeObservable, observable } from "mobx"
import { axios } from "../../core/axios"
import { socket } from "../../core/socket"
import { RootStore } from "../RootStore"
import { statusLoadingType } from "../types"

export interface userDataInterface {
  _id?: string
  email: string
  fullname: string
  online?: boolean
  dialogs?: string[]
  avatar?: string
  about?: string
}

export interface registerData {
  email: string
  fullname: string
  password: string
}

export class UserStore {
  rootStore: RootStore
  userData: userDataInterface = {} as userDataInterface
  userDataStatus: statusLoadingType = statusLoadingType.NEVER
  registerStatus: statusLoadingType = statusLoadingType.NEVER
  loginStatus: statusLoadingType = statusLoadingType.NEVER

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      userData: observable,
      userDataStatus: observable,
      registerStatus: observable,
      loginStatus: observable,
      fetchUser: flow,
      registerUser: flow,
      loginUser: flow,
      dialogs: computed,
      getAvatar: computed,
    })
  }

  *fetchUser() {
    this.userData = {} as userDataInterface
    this.userDataStatus = statusLoadingType.LOADING
    try {
      const { data } = yield axios.get("/users/me")
      this.userDataStatus = statusLoadingType.LOADED
      this.userData = data.data
      socket.emit("user online", {id: this.userData._id})
    } catch (error) {
      console.log(error)
      this.userDataStatus = statusLoadingType.ERROR
    }
  }

  *loginUser(payload: { username: string; password: string }) {
    this.loginStatus = statusLoadingType.LOADING
    try {
      const { data } = yield axios.post("/auth/login", payload)
      localStorage.setItem("token", data.data.token)
      this.loginStatus = statusLoadingType.LOADED
      this.fetchUser()
    } catch (error) {
      this.loginStatus = statusLoadingType.ERROR
    }
  }

  *registerUser(payload: registerData) {
    this.registerStatus = statusLoadingType.LOADING
    try {
      yield axios.post("/auth/register", payload)
      this.registerStatus = statusLoadingType.LOADED
    } catch (error) {
      this.registerStatus = statusLoadingType.ERROR
    }
  }

  get dialogs() {
    return this.userData.dialogs
  }

  get getAvatar() {
    return this.userData.avatar
  }
}
