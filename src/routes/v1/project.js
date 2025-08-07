import express from "express";
import { createProjectController } from "../../controller/projectController.js";
const projectRouter=express.Router();
projectRouter.use("/",createProjectController);
export default projectRouter;