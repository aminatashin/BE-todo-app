import express from "express";
import cors from "cors";
import ListEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import todoRouter from "./todo/todo.js";
// =================================================
const server = express();
const port = process.env.PORT || 3004;
// =================================================
server.use(express.json());
server.use(cors());
server.use("/todo", todoRouter);
// ==================================================
mongoose.connect(process.env.MONGO_CONNECTION);
mongoose.connection.on("connected", () => {
  console.log("Mongo is Connected");
  server.listen(port, () => {
    console.table(ListEndpoints(server));
    console.log(`${port}`);
  });
});
