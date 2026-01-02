import { ResultSetHeader, RowDataPacket } from "mysql2";
interface UsuarioDB {
    user: string;
    mail: string;
    passwordHash: string;
}
export declare const registerService: ({ user, mail, passwordHash }: UsuarioDB) => Promise<[ResultSetHeader, import("mysql2").FieldPacket[]]>;
export declare const loginService: (user: string) => Promise<RowDataPacket | undefined>;
export declare const adminService: () => Promise<RowDataPacket[]>;
export {};
//# sourceMappingURL=user.service.d.ts.map