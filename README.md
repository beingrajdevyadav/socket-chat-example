# Socket Chat Example

A simple real-time chat application using **Node.js**, **Express**, and **Socket.IO**.

## Features

- Real-time messaging between all connected clients
- Simple UI to send and receive messages
- Broadcasts messages to all users instantly

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Install dependencies:

   ```
   npm install
   ```

### Running the App

Start the server with:

```
npm start
```

The server will run at [http://localhost:3000](http://localhost:3000).

### Usage

1. Open [http://localhost:3000](http://localhost:3000) in multiple browser windows or tabs.
2. Type a message and click **Send**.
3. All connected clients will see the message in real time.

## Project Structure

```
socket-chat-example/
│
├── index.js           # Main server file
├── package.json       # Project metadata and dependencies
└── public/
    └── index.html     # Client-side HTML and JS
```

## How It Works

- The server uses Express to serve static files and Socket.IO for real-time communication.
- When a user sends a message, it is broadcast to all connected clients using `io.emit`.
- The client listens for messages and appends them to the chat window.

## License

ISC

---
Made by Rajdev Yadav