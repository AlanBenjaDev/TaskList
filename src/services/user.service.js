"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminService = exports.loginService = exports.registerService = void 0;
const db_1 = __importDefault(require("../config/db"));
const registerService = async ({ user, mail, passwordHash }) => {
    return db_1.default.query(`INSERT INTO users(username, email, password) VALUES (?, ?, ?)`, [user, mail, passwordHash]);
};
exports.registerService = registerService;
const loginService = async (user) => {
    const [rows] = await db_1.default.query(`
    SELECT id, username, email, password,role
    FROM users
    WHERE username = ?
    LIMIT 1
    `, [user]);
    return rows[0];
};
exports.loginService = loginService;
const adminService = async () => {
    const query = `SELECT id, username,email 
  FROM users`;
    const params = [];
    const [rows] = await db_1.default.query(query, params);
    return rows;
};
exports.adminService = adminService;
//# sourceMappingURL=user.service.js.map