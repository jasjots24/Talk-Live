# Real-Time Chat Application 🌐💬

![Real-Time Chat Demo](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExanE2cXJjZ3c1MnVydHQ0MjhjdTU3OG5tc3lzcWwybXV3dmV3cmJ2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BDcsuRvUcNZEDdK0bE/giphy.gif)


## Overview 🚀

This Real-Time Chat Application allows users to communicate instantly while maintaining a seamless and secure experience. Users can send and receive messages in real time, store previous chats, share media files such as profile pictures or photos, and customize themes through the settings. Built with modern technologies, this application ensures performance, security, and a great user interface.

## Features ✨

- **Real-Time Messaging:** Powered by Socket.io for instant communication.
- **Secure Authentication:** 🔒 Uses JWT tokens for secure user authentication and authorization.
- **Password Security:** 🛡️ Implements bcryptjs for hashing passwords.
- **Media Uploads:** 📸 Supports photo uploads using Cloudinary.
- **Persistent Chat History:** 🗂️ Stores chat history in MongoDB.
- **Responsive UI:** 📱 Designed with Tailwind CSS and DaisyUI for an elegant user experience.
- **Theme Customization:** 🎨 Users can choose different styles of themes through the settings.
- **Notifications:** 🔔 Displays message popups with Toast.



## Technologies Used 🛠️

- **Frontend:** React.js ⚛️, Tailwind CSS 🎨, DaisyUI ✨, Toast 🍞, Zustand 📂
- **Backend:** Node.js 🟢, Express.js 🚏, MongoDB 🍃, Socket.io 🌐
- **Authentication:** JWT 🔑, bcryptjs 🛡️
- **File Storage:** Cloudinary ☁️
- **Middleware:** CORS 🌍, cookie-parser 🍪

![Real-Time Chat Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI5aHZxbHN1Yjd1YWRjNmN4a2F1NjFrOGtkOGFqazNxaXM2eGdyciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NKEt9elQ5cR68/giphy.gif)

## Installation 📦

1. **Clone the repository:**

   ```bash
   git clone https://jasjots24/Talk-Live.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Chat-App
   ```


3. **Configure environment variables:**

   - **Create a** `.env` **file in the backend directory.**
   - **Add the following:**
     ```env
     MONGO_URI=your_mongo_database_url
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

4. **Build and start the application:**

   - **Open a terminal in the root directory and run:**
     ```bash
     npm run build
     npm run start
     ```
   - **Navigate to the** `frontend` **directory and run:**
     ```bash
     npm run dev
     ```

## How It Works 🛠️

![Chat Workflow](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczR4Z3BvcjY0d3c3NXppbXpqb3I5M3M1Y3B2OTNjNDZoenkwdHd4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IvGTPxaGaEOuhYv1jM/giphy.gif)

1. **Sign Up / Login:** Users register with their email and password, which is securely hashed with bcryptjs.
2. **Real-Time Chat:** 💬 Once logged in, users can start chatting in real time. Socket.io facilitates bi-directional communication.
3. **Media Sharing:** Users can upload and share profile pictures or other photos using Cloudinary.
4. **Persistent Storage:** All messages and user data are securely stored in MongoDB.
5. **Notifications:** Toast notifications inform users about message deliveries and errors.


## Folder Structure 📂

```
├── Chat-App
│   ├── backend
│   │   ├── src
│   │   ├── .env
│   │   ├── package.json
│   │   ├── package-lock.json
│   └── frontend
│       ├── dist
│       ├── src
│       ├── public
│       ├── eslint.config.js
│       ├── index.js
│       ├── package.json
│       ├── package-lock.json
│       ├── postcss.config.js
│       ├── tailwind.config.js
│       ├── vite.config.js
├── .gitignore
├── package.json
└── README.md
```

## Contribution 🤝

Feel free to fork this repository and contribute by submitting pull requests. Make sure to follow the coding guidelines!


## Acknowledgments 🙌

- [React.js](https://reactjs.org/) ⚛️
- [Tailwind CSS](https://tailwindcss.com/) 🎨
- [DaisyUI](https://daisyui.com/) ✨
- [Socket.io](https://socket.io/) 🌐
- [Cloudinary](https://cloudinary.com/) ☁️
- [MongoDB](https://www.mongodb.com/) 🍃
- [Zustand](https://github.com/pmndrs/zustand) 📂

Enjoy using the Real-Time Chat Application! 🎉

