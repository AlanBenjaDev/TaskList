import { RowDataPacket,ResultSetHeader } from "mysql2";
import db from "../config/db";

export const createTaskService = async(nombre :string) =>{
    return db.query<ResultSetHeader>(`
        INSERT INTO tasks (nombre)VALUES(?)
        `,[nombre]
    )
}

export const getTaskService = async() =>{
  const  query = `SELECT id, nombre,estado 
  FROM tasks`

  const params:any = []

  const [rows] = await db.query<RowDataPacket[]>(query,params)

  return rows;
}
export const updateTaskService = async (
  id: number,
  nombre: string,
  estado: string
) => {
  return db.query<ResultSetHeader>(
    `
    UPDATE tasks
    SET nombre = ?, estado = ?
    WHERE id = ?
    `,
    [nombre, estado, id]
  );
};

export const deleteTaskService = async (id: number) => {
  return db.query<ResultSetHeader>(
    `
    DELETE FROM tasks
    WHERE id = ?
    `,
    [id]
  );
};
