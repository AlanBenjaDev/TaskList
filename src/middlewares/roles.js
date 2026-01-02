"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleEstatus = void 0;
exports.autorizarRolesAdmin = autorizarRolesAdmin;
exports.autorizarRolesModerador = autorizarRolesModerador;
var RoleEstatus;
(function (RoleEstatus) {
    RoleEstatus["cliente"] = "user";
    RoleEstatus["moderador"] = "moderador";
    RoleEstatus["admin"] = "admin";
})(RoleEstatus || (exports.RoleEstatus = RoleEstatus = {}));
function autorizarRolesAdmin(req, res, next) {
    const userRol = req.user?.role;
    console.log("→ Pasó por autorizarRolesOrganizador, req.user =", req.user);
    console.log("Payload del token:", req.user);
    console.log("Rol del usuario:", userRol);
    if (userRol !== RoleEstatus.admin) {
        console.log("→ Rol recibido:", userRol);
        console.log("→ Rol no autorizado:", userRol);
        return res.status(403).json({ mensaje: "Acceso denegado: rol no autorizado" });
    }
    next();
}
function autorizarRolesModerador(req, res, next) {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ mensaje: "Token inválido" });
    }
    const userRol = user.role;
    console.log("Rol del usuario", userRol);
    if (userRol !== RoleEstatus.moderador) {
        return res.status(403).json({ mensaje: "Acceso denegado, no eres organizador." });
    }
    next();
}
//# sourceMappingURL=roles.js.map