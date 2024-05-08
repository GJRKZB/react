import "./Sidebar.css";

export default function Sidebar({ user, bookedRooms }) {
  return (
    <aside className="sidebar">
      <h2>Username: {user.firstname}</h2>
      <p>Credits: {user.credits}</p>
      <h3>Booked Rooms:</h3>
      <ul>
        {bookedRooms.map((room) => (
          <li key={room.id}>Room {room.roomNumber}</li>
        ))}
      </ul>
    </aside>
  );
}
