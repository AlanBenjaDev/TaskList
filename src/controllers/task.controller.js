"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskController = exports.updateTaskController = exports.getTaskController = exports.createTaskController = void 0;
const task_service_1 = require("../services/task.service");
const createTaskController = async (req, res) => {
    try {
        const { nombre } = req.body;
        const task = await (0, task_service_1.createTaskService)(nombre);
        return res.status(200).json({
            message: "Succesful created task"
        });
    }
    catch (error) {
        console.log("El error es", error);
        return res.status(500).json({
            mesasge: "Internal server error."
        });
    }
};
exports.createTaskController = createTaskController;
const getTaskController = async (req, res) => {
    try {
        const tasks = await (0, task_service_1.getTaskService)();
        return res.status(200).json({
            data: tasks
        });
    }
    catch (error) {
        console.log("El error es", error);
        return res.status(500).json({
            message: "Internal server error."
        });
    }
};
exports.getTaskController = getTaskController;
const updateTaskController = async (req, res) => {
    try {
        const id = (Number(req.params.id));
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }
        const { nombre, estado } = req.body;
        const update = await (0, task_service_1.updateTaskService)(id, nombre, estado);
        return res.status(200).json({
            message: ("Succesful updated")
        });
    }
    catch (error) {
        console.log("El error es", error); //Esto lo hago para que me diga el error exacto asi no tardo mucho
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
exports.updateTaskController = updateTaskController;
const deleteTaskController = async (req, res) => {
    try {
        const id = (Number(req.params.id));
        if (isNaN(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }
        await (0, task_service_1.deleteTaskService)(id);
        return res.status(200).json({
            message: "Succesful delete Task"
        });
    }
    catch (error) {
        console.log("El error es", error);
        return res.status(500).json({
            message: "Internal server error."
        });
    }
};
exports.deleteTaskController = deleteTaskController;
//# sourceMappingURL=task.controller.js.map