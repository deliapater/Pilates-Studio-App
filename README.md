# Pilates Studio App
A simple Vue 3 application for managing class schedules and bookings at a Pilates studio. Built with Vue 3, Vue Router, and Pinia for state management.

## Features
* User login/logout system
* View class schedule
* Book classes with limited spots per user
* Toast notifications for booking actions
* Responsive design
* Loading spinner for async actions
* Centralized state management with Pinia

## Installation
1. Clone the repository:
```
git clone <repo-url>
cd pilates-studio
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
npm run dev
```
Open your browser at http://localhost:5173 (or the URL provided by Vite).


## Usage
* Login with a username (minimum 3 characters)
* Navigate through Home, Schedule, and Bookings
* Book available classes; toast notifications show success/error
* Logout using the button in the navbar

## Technologies Used
* Vue 3 (Composition API)
* Vue Router
* Pinia for state management
* Vite for development & bundling
* Vanilla CSS for styling

## Future Enhancements
* Add user authentication with a backend
* Persistent bookings in a database
* Calendar view for schedule
* Search and filter classes
* Animations for smoother UI

## Screenshots
### Home Page
![Home Page](assets/screenshots/Home.png)

### Booking Page
![Booking Page](assets/screenshots/Booking.png)