import "./RoomList.css";
import Room from "./Room";

export default function RoomList({ rooms, userCredits, onBookRoom }) {
  return (
    <div className="rooms-grid">
      {rooms.map((room) => (
        <Room
          key={room.id}
          room={room}
          userCredits={userCredits}
          onBookRoom={onBookRoom}
        />
      ))}
    </div>
  );
}
