import { Request,Response } from "express";
import { createTaskService,getTaskService,updateTaskService,deleteTaskService } from "../services/task.service";

export const createTaskController = async(req:Request,res:Response) =>{
    try {
        const {nombre} = req.body

    const task= await createTaskService(nombre);

    return res.status(200).json({
        message:"Succesful created task"
    }
    )
   
    } catch (error) {
        console.log("El error es", error)
        return res.status(500).json({
            mesasge:"Internal server error."
        })
        
    }
}

export const getTaskController = async(req:Request,res:Response) =>{
    try {
        const tasks = await getTaskService()

         return res.status(200).json({
            data:tasks
         })


    } catch (error) {
        console.log("El error es", error)
        return res.status(500).json({
            message:"Internal server error."
        })
    }
}



export const updateTaskController = async(req:Request,res:Response)=>{
    try {
                const id = (Number(req.params.id)) 
                if (isNaN(id)) {
  return res.status(400).json({ message: "ID inválido" });
}

        const {nombre,estado} = req.body


        const update = await updateTaskService(id,nombre,estado)

  return res.status(200).json({
    message:("Succesful updated")
  })

    } catch (error) {
                console.log("El error es", error) //Esto lo hago para que me diga el error exacto asi no tardo mucho

     return res.status(500).json({
        
        message:"Internal server error"
     })
        
    }
}

export const deleteTaskController = async(req:Request,res:Response) =>{
    try {
const id = (Number(req.params.id)) 
    if (isNaN(id)) {
  return res.status(400).json({ message: "ID inválido" });
}

 await deleteTaskService(id)

  return res.status(200).json({
    message:"Succesful delete Task"
  })
        
    } catch (error) {
        console.log("El error es", error)

        return res.status(500).json({
            message:"Internal server error."
        })
    }
}