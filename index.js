import express from "express";
import { createServer } from "http";
import {Server} from "socket.io";
import path from "path";
import { fileURLToPath } from "url";


// setup _dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// to create app
const app = express();
const server = createServer(app);
const io = new Server(server);


// serve static files now
app.use(express.static(path.join(__dirname, "public")));


// handle socket events
io.on("connection", (socket)=>{
    console.log("new user connected : ", socket.id);

    socket.on("sendMessage", (msg)=>{
        console.log("message from client : ", msg);
        io.emit("messageFromServer", ` ${msg}`);
    });

    socket.on("disconnect", ()=>{
        console.log("user disconnected : ", socket.id);
    })
});




app.get("/", (req, res)=>{
    res.send("Hello, World!");
});

server.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000");
});