import React from "react";
import { observer } from "mobx-react-lite";
// import VideoPlayer from './components/VideoPlayer';
// import ControlBar from './components/ControlBar';
// import UserList from './components/UserList';
// 怎么理解你上面写的代码`import { useRoomStore } from './stores/RoomStore';`
import { roomStore } from "./stores/RoomStore";
import { Room } from "./models/Room";
// import { useUserStore } from "./stores/UserStore";
import "./styles/index.less";
const roomList: Array<Room> = [
    { id: '1', name: "会议室1" },
    { id: '2', name: "会议室2" },
    { id: '3', name: "会议室3" },
    { id: '4', name: "会议室14" },
]
const App: React.FC = observer(() => {
  const rooms = roomStore.rooms;
  //   const userStore = useUserStore();

  React.useEffect(() => {
    // 初始化房间和用户信息
    // roomStore.initRoom();
    // userStore.initUser();
  }, []);
  const [value, setValue] = React.useState(1);
  const fn1 = () => {
    if(roomList.length) {
        const item = roomList.pop()
        roomStore.addRoom(item as Room);
    }
  };
  const fn2 = () => {
    setValue(value - 1);
    if(rooms[0])
    roomStore.removeRoomById(rooms[0].id)
  };

  const remRoom = (e:  React.MouseEvent<HTMLElement>, id: Room["id"]) => {
    roomStore.removeRoomById("123")
  }
  return (
    <div className="app-container">
      <div>{rooms.map(item=> (<div key={item.id} >{`id: ${item.id }+ name: ${item.name}`}</div>))}</div>
      <button onClick={fn1}>+</button>
      <button onClick={fn2}>-</button>
    </div>
  );
});

export default App;
