import { useState, useEffect } from "react";
import RoomList from "./components/rooms/RoomList";
import Sidebar from "./components/sidebar/Sidebar";
import { fetchRoomsDetails, fetchUserDetails } from "./utils/utils";
import "./App.css";

export default function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const fetchRooms = await fetchRoomsDetails();
      const fetchUser = await fetchUserDetails();
      setRooms(fetchRooms);
      setUser(fetchUser);
    };
    loadData();
  }, []);

  const handleBooking = (roomId) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, isReserved: true } : room
      )
    );
    setUser((prevUser) => ({
      ...prevUser,
      credits: prevUser.credits - rooms.find((room) => room.id === roomId).cost,
    }));
  };

  return (
    <div className="app">
      <Sidebar
        user={user}
        bookedRooms={rooms.filter((room) => room.isReserved)}
      />
      <RoomList
        rooms={rooms}
        userCredits={user.credits}
        onBookRoom={handleBooking}
      />
    </div>
  );
}
