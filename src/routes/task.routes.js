"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
const token_1 = require("../middlewares/token");
const taskRouter = (0, express_1.Router)();
taskRouter.post('/createTask', token_1.autenticarToken, task_controller_1.createTaskController);
taskRouter.get('/getTasks', token_1.autenticarToken, task_controller_1.getTaskController);
taskRouter.put("/updateTask/:id", task_controller_1.updateTaskController);
taskRouter.put("/deleteTask/:id", task_controller_1.deleteTaskController);
exports.default = taskRouter;
//# sourceMappingURL=task.routes.js.map