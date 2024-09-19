# Video Sharing Platform

## Overview
This project is a **YouTube-like video-sharing platform** where users can upload, view, and manage videos. It features user authentication, watch history, video management, and API integration for retrieving videos from third-party databases. The platform's backend is built with **Node.js** and **SQLite**, while the frontend is developed using **React** with **Redux** and **Material UI** for a modern, responsive user interface.

## Features
- **User Authentication**: Secure registration and login using JWT.
- **Video Management**: Users can upload, edit, and delete videos.
- **Watch History**: Track the videos users have watched.
- **Third-party API Integration**: Connect to external video databases via API calls.
- **Cloudinary Integration**: Store and manage video files using Cloudinary.
- **Modern UI**: Built with React, Redux Toolkit, Material UI, and React Query for efficient data fetching.

## Tech Stack

### Frontend
- **React**: Build interactive user interfaces.
- **Redux + Redux Toolkit**: State management for global application state.
- **React Query**: Efficient server data fetching and caching.
- **Axios**: Handle HTTP requests.
- **Material UI**: Component library for creating modern, responsive designs.

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **SQLite**: Lightweight database for storing user data and video metadata.
- **Multer**: Middleware for handling multipart/form-data (video uploads).
- **Cloudinary**: Cloud service to store and serve videos.
- **JWT**: Secure user authentication with JSON Web Tokens.
- **Bcrypt**: Password hashing for secure storage.
- **Express**: Fast and minimalist web framework for Node.js.

## Installation

### Prerequisites
- Node.js
- SQLite
- Cloudinary Account

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Mmulobi/video-sharing-platform.git
    cd video-sharing-platform
    ```

2. **Install dependencies**:
    ```bash
    npm install
    cd client
    npm install
    ```

3. **Environment Variables**:
    Create a `.env` file in the root directory and add the following:

    ```bash
    JWT_SECRET=your_jwt_secret
    CLOUD_NAME=your_cloudinary_cloud_name
    API_KEY=your_cloudinary_api_key
    API_SECRET=your_cloudinary_api_secret
    ```

    - You can generate the `JWT_SECRET` as per the instructions [here](#jwt-secret).
    - Get your Cloudinary credentials from your [Cloudinary Dashboard](https://cloudinary.com/).

4. **Run the backend**:
    ```bash
    npm run dev
    ```

5. **Run the frontend**:
    ```bash
    cd client
    npm start
    ```

6. **SQLite Database**:
   The application will automatically create an SQLite database (`database.sqlite`) in the root folder when the backend is started.

## API Endpoints

### Authentication
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Authenticate an existing user.

### Video Management
- **GET** `/api/videos`: Fetch all videos.
- **POST** `/api/videos/upload`: Upload a new video (Multer + Cloudinary).
- **DELETE** `/api/videos/:id`: Delete a video by ID.

### Watch History
- **GET** `/api/history`: Get user watch history.
- **POST** `/api/history`: Add a video to watch history.

### External API Integration
- **GET** `/api/external-videos`: Fetch videos from third-party databases.

## Frontend Structure

- **Redux**: Manage authentication, video lists, and user data across the app.
- **React Query**: Handles data fetching and caching for efficient updates.
- **Material UI**: Ensures a responsive, modern user interface.

## Usage

1. **Sign up/Login**: Users can register and log in.
2. **Upload Videos**: Authenticated users can upload videos that will be stored on Cloudinary.
3. **View Videos**: Browse the video library.
4. **Watch History**: Track and view previously watched videos.
5. **External API Videos**: Fetch and watch videos from third-party sources.

## File Structure

```bash
.
├── backend
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   └── utils
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── hooks
│   │   └── utils
├── .env
├── package.json
└── README.md

Future Enhancements
Comments and Likes: Add a feature to comment and like videos.
Playlists: Users can create playlists and organize their favorite videos.
Advanced Search: Implement a better search functionality with filters.
Contributing
Contributions are welcome! Please fork this repository and submit a pull request for review.

License
This project is licensed under the MIT License.


This `README.md` covers the setup, usage, and structure of your new video-sharing platform project. Let me know if you need any adjustments!
