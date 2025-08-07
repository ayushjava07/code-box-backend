import express from "express";
import { PORT } from "./config/ServerConfig.js";
import apiRouter from "./routes/index.js"
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: "http://localhost:5173", // or "*" for all
  credentials: true
}));
app.use("/api",apiRouter);
app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"all good"
    })
})

app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
})