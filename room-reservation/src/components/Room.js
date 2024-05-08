import "./Room.css";

export default function Room({ room }) {
  return (
    <div className="room__container">
      <h1 className="room__number">Room number: {room.number}</h1>
      <h2 className="room__cost">Cost: {room.cost}</h2>
      <p className="room__status">{room.status}</p>
    </div>
  );
}
