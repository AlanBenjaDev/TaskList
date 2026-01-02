import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { RoleEstatus } from "./roles";
import dotenv from "dotenv";

dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET || "";


export function autenticarToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("→ Pasó por autenticarToken");

  const authHeader = req.header("authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Token requerido" });
  }

const token = authHeader.startsWith("Bearer ")
  ? authHeader.split(" ")[1]
  : authHeader;

if (!token) {
  return res.status(401).json({ message: "Token requerido" });
}

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.error("→ Error al verificar el token:", err);
      return res.status(403).json({ message: "Token inválido o expirado" });
    }
  console.log("→ DECODED RAW TOKEN:", decoded);

    (req as any).user = decoded;
    console.log("→ Token validado correctamente", req.user);

    next();
  });
}


export function generarToken(payload: { id: number; role: RoleEstatus }): string {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
}

