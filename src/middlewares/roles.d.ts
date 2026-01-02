import Express from "express";
import type { Request, Response, NextFunction } from "express";
export declare enum RoleEstatus {
    cliente = "user",
    moderador = "moderador",
    admin = "admin"
}
export declare function autorizarRolesAdmin(req: Request, res: Response, next: NextFunction): Express.Response<any, Record<string, any>> | undefined;
export declare function autorizarRolesModerador(req: Request, res: Response, next: NextFunction): Express.Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=roles.d.ts.map