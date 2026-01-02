import { Router } from "express";

import { createTaskController,getTaskController,updateTaskController,deleteTaskController } from "../controllers/task.controller";
import { autenticarToken } from "../middlewares/token";

const taskRouter = Router()

taskRouter.post('/createTask', autenticarToken,createTaskController)
taskRouter.get('/getTasks', autenticarToken,getTaskController)
taskRouter.put("/updateTask/:id", updateTaskController);
taskRouter.put("/deleteTask/:id", deleteTaskController);
export default taskRouter;