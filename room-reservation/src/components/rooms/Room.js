import "./Room.css";

export default function Room({ room, userCredits, onBookRoom }) {
  const { roomNumber, cost, isReserved } = room;
  const getStatus = () => {
    if (isReserved) return "Reserved";
    if (cost > userCredits) return "Not enough credits";
    return "Available";
  };

  const handleBookRoom = () => {
    if (getStatus() === "Available") {
      onBookRoom(room.id);
    }
  };

  return (
    <div
      className={`room ${getStatus().toLowerCase()}`}
      onClick={handleBookRoom}
    >
      <h4>Room {roomNumber}</h4>
      <p>Cost: {cost}</p>
      <p>Status: {getStatus()}</p>
    </div>
  );
}
