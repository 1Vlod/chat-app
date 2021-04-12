import { flow, makeObservable, observable } from "mobx";
import { axios } from "../../core/axios";
import { RootStore } from "../RootStore";
import { statusLoadingType } from "../types";
import { userDataInterface } from "./UserStore";

export interface IFilterUsers {
  fullname?: string;
  email?: string;
}

export class UsersStore {
  rootStore: RootStore;
  users: userDataInterface[] = [];
  status: statusLoadingType = statusLoadingType.NEVER;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      users: observable,
      status: observable,
      fetchUsers: flow,
    });
  }

  *fetchUsers({ fullname, email }: IFilterUsers) {
    this.users = [];
    this.status = statusLoadingType.LOADING;
    try {
      const { data } = yield axios.get(`/users?fullname=${fullname}&email=${email}`);
      this.status = statusLoadingType.LOADED;
      this.users = data.data;
      console.log(data)
    } catch (error) {
      console.log(error);
      this.status = statusLoadingType.ERROR;
    }
  }
}
