import Room from "./Room";
import "./RoomList.css";
export default function RoomList() {
  const rooms = [
    {
      number: 0,
      cost: 0,
      status: "Available",
    },
    {
      number: 1,
      cost: 0,
      status: "Available",
    },
    {
      number: 2,
      cost: 0,
      status: "Available",
    },
    {
      number: 3,
      cost: 0,
      status: "Available",
    },
  ];
  return (
    <div className="room__list__container">
      {rooms.map((room, index) => (
        <Room key={index} room={room} />
      ))}
    </div>
  );
}
