# Room Booking App

## Project Overview

This React application simulates a room booking system where users can view available rooms, their costs, and book them according to their credit availability. Each room has a unique status based on the user's credits and whether it has already been reserved.

## Functional Requirements

1. **Display Rooms**: Render all rooms on the screen. Each room should visually indicate its status and display the room number and cost.
2. **Room Status**:

   - **Available**: The room can be booked if the cost is less than or equal to the user's available credits.
   - **Reserved**: Indicates the room is already booked by the user.
   - **Not Enough Credits**: Indicates the user does not have enough credits to book the room.

3. **User Sidebar**: Implement a sidebar displaying user details (name and credits) and a list of rooms that the user has booked.

4. **Dynamic Credit Updates**: Update user credits in real time when a room is booked or a booking is cancelled.

5. **Data Fetching**: Utilize asynchronous API calls to fetch initial data for rooms and user details (check utils.js).

## Setup and Installation

### Prerequisites

- Node.js
- npm or yarn

### Getting Started

Clone the repository and install the dependencies:

```bash
git clone [repository-url]
cd [project-directory]
npm install
```
