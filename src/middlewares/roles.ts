import  Express  from "express";
import type { Request, Response, NextFunction } from "express";




export enum RoleEstatus {
  cliente = "user",
  moderador = "moderador",
  admin = "admin"
}

export function autorizarRolesAdmin(req: Request, res: Response, next: NextFunction) {
  const userRol = req.user?.role;

  console.log("→ Pasó por autorizarRolesOrganizador, req.user =", req.user);
  console.log("Payload del token:", (req as any).user);

  console.log("Rol del usuario:", userRol);

  if (userRol !== RoleEstatus.admin) {
    console.log("→ Rol recibido:", userRol);
    console.log("→ Rol no autorizado:", userRol);
    return res.status(403).json({ mensaje: "Acceso denegado: rol no autorizado" });
  }

  next();
}

export function autorizarRolesModerador (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = (req as any).user; 



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
