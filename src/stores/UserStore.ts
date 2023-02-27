import { makeObservable, observable, action } from "mobx";
import { User } from "../models/User";

export class UserStore {
  users: User[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      addUser: action,
      removeUser: action,
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(user: User) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
export const userStore = new UserStore();