import React from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from 'react-i18next';
import { roomStore } from "../stores/RoomStore";
import { Room } from "../models/Room";
import '../styles/index.less'


const roomList: Array<Room> = [
    { id: '1', name: "会议室1" },
    { id: '2', name: "会议室2" },
    { id: '3', name: "会议室3" },
    { id: '4', name: "会议室14" },
]

const Home: React.FC = observer(() => {
  const rooms = roomStore.rooms;
  const { t } = useTranslation();

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
    <div className="app-container home">
      <h2>{t('home')}</h2>
      <div>{rooms.map(item=> (<div key={item.id} >{`id: ${item.id }+ name: ${item.name}`}</div>))}</div>
      <button className="Button" onClick={fn1}>+</button>
      <button onClick={fn2}>-</button>
    </div>
  );
});

export default Home;
