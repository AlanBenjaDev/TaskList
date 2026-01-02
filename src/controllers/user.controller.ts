import { hashPassword,comparePassword } from "../middlewares/password.js";
import { Request, Response } from "express";
import { registerService,loginService, adminService } from "../services/user.service.js";
import { generarToken } from "../middlewares/token.js";

export const registerController = async (req: Request, res: Response) => {
  try {
    const mockUser = {
      user: "testusersegundo1234",
      email: "testsegundo@mail.com",
      password: "1234567"
    };

    const passwordHash = await hashPassword(mockUser.password);

    const { user, email } = mockUser;

    await registerService({
      user,
      mail: email,
      passwordHash
    });

    res.status(201).json({
      message: "Succesful register."
    });

  } catch (error) {
  console.error("REGISTER ERROR:", error);

  res.status(500).json({
    message: "Internal server error"
  });
}

};

export const adminListController = async(req: Request, res:Response) =>{
  try{
    const userList = await adminService()

      return res.status(200).json({
            ok: true,
          
            data: userList
        });
  }
  catch(error){
    console.log("El error es", error) 
    return res.status(500).json({ 
            error: "Error al mostrar los usuarios" 
        });
  }
}
export const loginController = async (req: Request, res: Response) => {
  try {
    const { user, password } = req.body;

    
    const usuario = await loginService(user);

    if (!usuario) {
      return res.status(400).json({ message: "Cannot find user" });
    }

    
    const compare = await comparePassword(password, usuario.password);

    if (!compare) {
      return res.status(400).json({ message: "Incorrect password" });
    }


const token = generarToken({ id: usuario.id, role: usuario.role });


    res.status(200).json({
      message: "Succesful Login.",
      usuario: {
        id: usuario.id,
        user: usuario.user,
        email: usuario.email,
        role: usuario.role
      },
      token
    });

  } catch (error) {
  console.error("LOGIN ERROR:", error);

  res.status(500).json({
    message: "There was a error to sign in",
    error: error instanceof Error ? error.message : error
  });
}
};