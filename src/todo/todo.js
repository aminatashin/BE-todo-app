import express from "express";
import todoModel from "./todoModel.js";
// ===================================
const todoRouter = express.Router();
// ===================================
todoRouter.post("/", async (req, res, next) => {
  try {
    const todo = await todoModel(req.body);
    const { _id } = await todo.save();
    res.send({ _id });
  } catch (error) {
    next(error);
  }
});
// =====================================
todoRouter.get("/", async (req, res, next) => {
  const getTodo = await todoModel.find();
  res.send(getTodo);
});
// ======================================
todoRouter.get("/:todoId", async (req, res, next) => {
  const getTodo = await todoModel.findById(req.params.todoId);
  res.send(getTodo);
});
// ===================================
export default todoRouter;
