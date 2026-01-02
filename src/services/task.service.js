"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskService = exports.updateTaskService = exports.getTaskService = exports.createTaskService = void 0;
const db_1 = __importDefault(require("../config/db"));
const createTaskService = async (nombre) => {
    return db_1.default.query(`
        INSERT INTO tasks (nombre)VALUES(?)
        `, [nombre]);
};
exports.createTaskService = createTaskService;
const getTaskService = async () => {
    const query = `SELECT id, nombre,estado 
  FROM tasks`;
    const params = [];
    const [rows] = await db_1.default.query(query, params);
    return rows;
};
exports.getTaskService = getTaskService;
const updateTaskService = async (id, nombre, estado) => {
    return db_1.default.query(`
    UPDATE tasks
    SET nombre = ?, estado = ?
    WHERE id = ?
    `, [nombre, estado, id]);
};
exports.updateTaskService = updateTaskService;
const deleteTaskService = async (id) => {
    return db_1.default.query(`
    DELETE FROM tasks
    WHERE id = ?
    `, [id]);
};
exports.deleteTaskService = deleteTaskService;
//# sourceMappingURL=task.service.js.map