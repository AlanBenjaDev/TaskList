import { RoleEstatus } from "../middlewares/roles.js";
declare global {
    namespace Express {
        interface UserPayload {
            id: number;
            email: string;
            user: string;
            role: RoleEstatus;
        }
        interface Request {
            user?: UserPayload;
        }
    }
}
//# sourceMappingURL=express.d.ts.map