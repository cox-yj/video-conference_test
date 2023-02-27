import { createContext, useContext } from 'react';
import { makeAutoObservable, runInAction } from 'mobx';
import { Room, User } from '../models';
import { ApiService } from '../services';

class RoomStore {
  room: Room | null = null;
  users: User[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async createRoom(name: string): Promise<void> {
    try {
      const room = await ApiService.createRoom(name);
      runInAction(() => {
        this.room = room;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async joinRoom(roomId: string): Promise<void> {
    try {
      const room = await ApiService.joinRoom(roomId);
      runInAction(() => {
        this.room = room;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async leaveRoom(): Promise<void> {
    try {
      await ApiService.leaveRoom(this.room?.id as string);
      runInAction(() => {
        this.room = null;
        this.users = [];
      });
    } catch (error) {
      console.error(error);
    }
  }

  async fetchUsers(): Promise<void> {
    try {
      const users = await ApiService.getUsers(this.room?.id as string);
      runInAction(() => {
        this.users = users;
      });
    } catch (error) {
      console.error(error);
    }
  }
}

const RoomStoreContext = createContext(new RoomStore());

export const useRoomStore = (): RoomStore => useContext(RoomStoreContext);
