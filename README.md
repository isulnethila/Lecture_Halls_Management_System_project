# Lecture Halls Management System

## Overview

The Lecture Halls Management System is a web application designed to manage lecture halls, courses, and time slots. It allows administrators to add, view, and delete courses, halls, and time slots, as well as assign halls and time slots to specific courses.

## Features

- Add and view courses.
- Add and view halls.
- Add and view time slots.
- Assign halls and time slots to courses.
- Delete courses.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios

## Setup Instructions

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/lecture-halls-management-system.git
   cd lecture-halls-management-system
   
2. Install server dependencies

   cd backend
   npm install

3.Install client dependencies

  cd ../frontend
  npm install



### Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server**

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend application should be available at `http://localhost:3000`.

## Project Structure

### Backend

- `backend/`
  - `models/`: Contains Mongoose models for Course, Hall, and TimeSlot.
    - `Course.js`: Defines the schema for courses.
    - `Hall.js`: Defines the schema for halls.
    - `TimeSlot.js`: Defines the schema for time slots.
  - `routes/`: Contains Express routes for managing courses, halls, and time slots.
    - `courseRoutes.js`: Routes for course-related operations.
    - `hallRoutes.js`: Routes for hall-related operations.
    - `timeSlotRoutes.js`: Routes for time slot-related operations.
  - `server.js`: Entry point of the backend application.

### Frontend

- `frontend/`
  - `src/`
    - `components/`: Contains React components for managing courses, halls, and time slots.
      - `CourseList.js`: Component for displaying and managing courses.
      - `HallList.js`: Component for displaying and managing halls.
      - `TimeSlotList.js`: Component for displaying and managing time slots.
    - `services/`: Contains Axios service files for making HTTP requests.
      - `courseService.js`: Service for course-related API calls.
      - `hallService.js`: Service for hall-related API calls.
      - `timeSlotService.js`: Service for time slot-related API calls.
    - `App.js`: Main application component.
    - `index.js`: Entry point of the React application.

## API Endpoints

### Courses

- `GET /courses`: Get all courses
- `POST /courses/add`: Add a new course
- `DELETE /courses/delete/:id`: Delete a course by ID

### Halls

- `GET /halls`: Get all halls
- `POST /halls/add`: Add a new hall

### Time Slots

- `GET /timeslots`: Get all time slots
- `POST /timeslots/add`: Add a new time slot

## Example Usage

1. **Add a Hall**
   - Go to the "Halls" section.
   - Enter the hall name and capacity.
   - Click "Add Hall".

2. **Add a Time Slot**
   - Go to the "Time Slots" section.
   - Select start and end time.
   - Click "Add Time Slot".

3. **Add a Course**
   - Go to the "Courses" section.
   - Enter the course name.
   - Select a hall and a time slot.
   - Click "Add Course".

4. **View Courses**
   - Go to the "Courses" section.
   - See the list of courses along with their assigned halls and time slots.

