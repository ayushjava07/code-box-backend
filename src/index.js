import express from "express";
import { PORT } from "./config/ServerConfig.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

app.get("")


app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
})