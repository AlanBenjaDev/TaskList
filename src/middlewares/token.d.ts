import type { Request, Response, NextFunction } from "express";
import { RoleEstatus } from "./roles";
export declare function autenticarToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function generarToken(payload: {
    id: number;
    role: RoleEstatus;
}): string;
//# sourceMappingURL=token.d.ts.map