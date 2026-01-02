import { RowDataPacket, ResultSetHeader } from "mysql2";
export declare const createTaskService: (nombre: string) => Promise<[ResultSetHeader, import("mysql2").FieldPacket[]]>;
export declare const getTaskService: () => Promise<RowDataPacket[]>;
export declare const updateTaskService: (id: number, nombre: string, estado: string) => Promise<[ResultSetHeader, import("mysql2").FieldPacket[]]>;
export declare const deleteTaskService: (id: number) => Promise<[ResultSetHeader, import("mysql2").FieldPacket[]]>;
//# sourceMappingURL=task.service.d.ts.map