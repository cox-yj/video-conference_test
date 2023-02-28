// RoomStore 包含一个 Room 对象数组，它存储了所有的房间信息。构造函数使用 makeAutoObservable 方法使 Store 中的属性和方法自动响应式。RoomStore 中的方法包括添加、查找、删除和更新房间信息等基本操作。
import { makeAutoObservable } from 'mobx'
import { Room } from '../models/Room'

class RoomStore {
  rooms: Room[] = []

  constructor() {
    makeAutoObservable(this)
  }

  // 添加房间
  addRoom(room: Room) {
    this.rooms.push(room)
  }

  // 根据 ID 获取房间
  getRoomById(id: string): Room | undefined {
    return this.rooms.find((room) => room.id === id)
  }

  // 根据 ID 删除房间
  removeRoomById(id: string) {
    const index = this.rooms.findIndex((room) => room.id === id)
    if (index !== -1) {
      this.rooms.splice(index, 1)
    }
  }

  // 更新房间信息
  updateRoom(room: Room) {
    const index = this.rooms.findIndex((r) => r.id === room.id)
    if (index !== -1) {
      this.rooms[index] = room
    }
  }
}

export const roomStore = new RoomStore()
