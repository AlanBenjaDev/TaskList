"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const roles_1 = require("../middlewares/roles");
const token_1 = require("../middlewares/token");
const usuariosRouter = (0, express_1.Router)();
usuariosRouter.post('/register', user_controller_1.registerController);
usuariosRouter.post('/login', user_controller_1.loginController);
usuariosRouter.get('/admin', token_1.autenticarToken, roles_1.autorizarRolesAdmin, user_controller_1.adminListController);
exports.default = usuariosRouter;
//# sourceMappingURL=user.routes.js.map