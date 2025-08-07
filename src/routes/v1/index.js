import express from "express";
import { pingcheck } from "../../controller/pingCheckker.js";
import projectRouter from "./project.js";
const v1Router=express.Router();
v1Router.get("/ping",pingcheck);
v1Router.post("/project",projectRouter);
export default v1Router;