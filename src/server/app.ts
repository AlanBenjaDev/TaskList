import  express  from "express";
import usuariosRouter from "../routes/user.routes"
import taskRouter from "../routes/task.routes";
const app = express();


app.use(express.json())

app.use("/user", usuariosRouter);
app.use("/task", taskRouter)

export default app
