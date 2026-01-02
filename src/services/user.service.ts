import db from "../config/db";
import { ResultSetHeader,RowDataPacket } from "mysql2";


interface UsuarioDB {

  user: string;
  mail: string;
  passwordHash: string;

}

export const registerService = async ({ user, mail, passwordHash }:UsuarioDB) => {
  return db.query<ResultSetHeader>(
    `INSERT INTO users(username, email, password) VALUES (?, ?, ?)`,
    [user, mail, passwordHash]
  );


};

export const loginService = async (user: string) => {
  const [rows] = await db.query<RowDataPacket[]>(
    `
    SELECT id, username, email, password,role
    FROM users
    WHERE username = ?
    LIMIT 1
    `,
    [user]
  );

  return rows[0];
};

export const adminService = async() =>{
  const  query = `SELECT id, username,email 
  FROM users`

  const params:any = []

  const [rows] = await db.query<RowDataPacket[]>(query,params)

  return rows;
}