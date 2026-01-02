import { Router } from "express";
import { registerController,loginController, adminListController } from "../controllers/user.controller";
import { registerValidator,loginValidator } from "../middlewares/user.validator";
import { validationControl } from "../middlewares/validation.result";
import { autorizarRolesAdmin,autorizarRolesModerador } from "../middlewares/roles";
import { autenticarToken } from "../middlewares/token";

const usuariosRouter = Router();

usuariosRouter.post('/register', registerController);
usuariosRouter.post('/login',  loginController);
usuariosRouter.get('/admin', autenticarToken, autorizarRolesAdmin,adminListController)

export default usuariosRouter