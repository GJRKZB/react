import { v4 as uuidv4 } from "uuid";

// Simulate fetching room details
export const fetchRoomsDetails = () => {
  const ROOMS_DATA = Array(15)
    .fill(null)
    .map((_, i) => ({
      id: uuidv4(),
      cost: Math.floor(Math.random() * 22) + 1, // Random cost between 1 and 22
      isReserved: false,
      roomNumber: i + 1, // Assuming room numbers start from 1
    }));

  return new Promise((resolve) => {
    setTimeout(() => resolve(ROOMS_DATA), 1000); // Simulate a network delay
  });
};

// Simulate fetching user details
export const fetchUserDetails = () => {
  const USER_DATA = {
    firstname: "Devtools",
    lastname: "Tech",
    credits: Math.floor(Math.random() * 15) + 10, // Random credits between 10 and 24
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(USER_DATA), 1000); // Simulate a network delay
  });
};
