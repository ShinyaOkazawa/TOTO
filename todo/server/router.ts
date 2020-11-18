import { Router } from "https://deno.land/x/oak/mod.ts";
import TaskController from '../controllers/TaskController.ts'
const router = new Router();
const taskController = new TaskController()
export default router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .post("/task/register", taskController.register)
  // .post("/task/register", async (context) => {
  //   const taskController = new TaskController()
  //   context.response.body = await taskController.register(context)
  // })