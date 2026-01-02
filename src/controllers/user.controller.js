"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.adminListController = exports.registerController = void 0;
const password_js_1 = require("../middlewares/password.js");
const user_service_js_1 = require("../services/user.service.js");
const token_js_1 = require("../middlewares/token.js");
const registerController = async (req, res) => {
    try {
        const mockUser = {
            user: "testusersegundo1234",
            email: "testsegundo@mail.com",
            password: "1234567"
        };
        const passwordHash = await (0, password_js_1.hashPassword)(mockUser.password);
        const { user, email } = mockUser;
        await (0, user_service_js_1.registerService)({
            user,
            mail: email,
            passwordHash
        });
        res.status(201).json({
            message: "Succesful register."
        });
    }
    catch (error) {
        console.error("REGISTER ERROR:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};
exports.registerController = registerController;
const adminListController = async (req, res) => {
    try {
        const userList = await (0, user_service_js_1.adminService)();
        return res.status(200).json({
            ok: true,
            data: userList
        });
    }
    catch (error) {
        console.log("El error es", error);
        return res.status(500).json({
            error: "Error al mostrar los usuarios"
        });
    }
};
exports.adminListController = adminListController;
const loginController = async (req, res) => {
    try {
        const { user, password } = req.body;
        const usuario = await (0, user_service_js_1.loginService)(user);
        if (!usuario) {
            return res.status(400).json({ message: "Cannot find user" });
        }
        const compare = await (0, password_js_1.comparePassword)(password, usuario.password);
        if (!compare) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        const token = (0, token_js_1.generarToken)({ id: usuario.id, role: usuario.role });
        res.status(200).json({
            message: "Succesful Login.",
            usuario: {
                id: usuario.id,
                user: usuario.user,
                email: usuario.email,
                role: usuario.role
            },
            token
        });
    }
    catch (error) {
        console.error("LOGIN ERROR:", error);
        res.status(500).json({
            message: "There was a error to sign in",
            error: error instanceof Error ? error.message : error
        });
    }
};
exports.loginController = loginController;
//# sourceMappingURL=user.controller.js.map