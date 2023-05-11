import { Server } from "socket.io";
import {CatchAsync} from "../utils/catchAsync.js";
import chatService from "../services/v1/chat.service.js";
import httpService from "../utils/httpResponse.js";
export class MySocket {
  constructor(server) {
    let io = new Server(server, {
      /* options */
    });
    io.on("connection", (client) => {
      console.log("New user connected");
      client.emit("connection", "done");
      client.on("message", async (body) => {
        const d = await chatService.createMessage(body);
        const data = await chatService.getChatMessage(d._id);
        const finalData = data.map((i)=>{
          const date = new Date(i.createdAt); // some mock date
          i.createdAt = date.getTime();
          return i;
        });
        client.broadcast.emit("message", JSON.stringify(finalData[0]));
      });
      client.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  }
}
