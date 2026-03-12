# ChatApp Web | Full-Stack Real-Time Communication Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

A premium, full-stack real-time chat application inspired by modern communication platforms like WhatsApp Web and Slack. Built with a focus on seamless user experience, low-latency communication, and scalable architecture.

## 🚀 Key Features

- **Real-Time Synchronous Messaging**: Instant message delivery using WebSocket (Socket.io) with persistence in MongoDB.
- **Online Presence Tracking**: Dynamic status indicators showing user connectivity in real-time.
- **Secure Authentication**: JWT-based session management with HttpOnly cookies for enhanced security against XSS/CSRF.
- **Glassmorphic UI/UX**: A polished midnight theme with smooth animations, custom scrollbars, and responsive full-screen layout.
- **Smart Notifications**: Visual and auditory feedback (shake animations + sound) for incoming messages.
- **Context-Driven State**: Efficient state management using React Context API for global auth, socket, and messaging states.

## 🛠️ Technical Deep Dive

### High-Performance Frontend
- **Framework**: React 18 with Vite for lightning-fast HMR and build performance.
- **Styling**: Utility-first CSS using Tailwind 4, customized with a premium color palette and glassmorphism tokens.
- **Logic**: Decoupled UI logic into custom hooks (`useListenMessages`, `useSendMessage`, etc.) for better maintainability and readability.

### Scalable Backend
- **Core**: Node.js & Express server with a clean, modular folder structure separating concerns (Controllers, Routes, Models, Middleware).
- **Communication**: Bi-directional event-driven architecture using Socket.io.
- **Data Integrity**: Strictly typed schemas with Mongoose and secure password hashing using `bcryptjs`.

## 📂 Project Structure

```text
├── backend
│   ├── config          # Database connection
│   ├── controllers     # Business logic
│   ├── middleware      # Auth guards & error handlers
│   ├── models          # Mongoose schemas
│   ├── routes          # API endpoints
│   ├── socket          # WebSocket server logic
│   └── utils           # JWT & helper functions
└── frontend
    ├── src
    │   ├── components  # Reusable UI modules
    │   ├── context     # Global state providers
    │   ├── hooks       # Custom business logic hooks
    │   ├── pages       # Main view containers
    │   └── utils       # Formatting & time helpers
```

## ⚙️ Installation & Setup

1. **Clone & Install Dependencies**
   ```bash
   git clone <repo-url>
   cd realtime-chat-app
   # Install Backend
   cd backend && npm install
   # Install Frontend
   cd ../frontend && npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

3. **Run the Application**
   ```bash
   # Terminal 1: Backend
   cd backend && npm start
   
   # Terminal 2: Frontend
   cd frontend && npm run dev
   ```

## 🔐 Security & Optimization
- **JWT in Cookies**: Tokens are stored in HttpOnly cookies to prevent client-side JS access.
- **Optimistic Updates**: Built to feel fast by managing state locally before server confirmation.
- **Auto-Scroll & UX**: Specialized `useRef` logic for smooth message anchoring.

---
*Developed with a focus on code quality and performance.*
