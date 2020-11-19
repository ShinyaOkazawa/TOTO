import { db } from "../config/db.ts";
import { v4 as uuid } from "https://deno.land/std@0.78.0/uuid/mod.ts";
import { TaskType } from "../models/Task.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";

export default class TaskController {
  public task: any;

  constructor() {
    this.task = db.getDatabase().collection("tasks");
  }

  public register = async (ctx: RouterContext, next: () => Promise<void>) => {
      const body = await ctx.request.body();
      if (!ctx.request.hasBody) {
        ctx.throw(400, "Request body can not be empty!");
      }
      const val = await body.value      
      const name = val.name;
      const _id = uuid.generate()
      const insertedTask = await this.task.insertOne({
        _id,
        name
      })

      return new Promise(resolve => {
        ctx.response.status = 200;
        ctx.response.body = insertedTask;
        resolve()
      }).then(next)
  }
}