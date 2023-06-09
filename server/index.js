import http from "http";
import express from "express";
import logger from "morgan";
import cors from "cors";
// routes
import indexRouter from "./routes/index.js";
import chatRoomRouter from "./routes/chatRoom.js";
import userRouter from "./routes/user.js";
import deleteRouter from "./routes/delete.js";
//middleware
import { decode } from './middleware/jwt.js'

const app = express();

//Get port from environment and store in Express
const port = process.env.PORT || "3000";
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", chatRoomRouter);
app.use("/delete", deleteRouter);

//catch 404 and forward to error handler
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint does not exist'
    })
});

// create http server
const server = http.createServer(app);
server.listen(port)
server.on("listening", () => {
    console.log(`Listening on port:: http://localhost:${port}/`)
})

