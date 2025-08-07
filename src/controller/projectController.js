import util from "node:util"
import uuid4 from "uuid4"
import fs from "fs/promises"
import  ChildProcess, { exec }  from "node:child_process"
import { dir } from "node:console";
const execPromisified=util.promisify(ChildProcess.exec);
export const createProjectController=async(req,res)=>{
const projectId=uuid4();
await fs.mkdir(`./projects/${projectId}`);
const response= await execPromisified('npm create vite@latest sandbox -- --template react',{
    cwd:`./projects/${projectId}`
})
return res.json({
    message:"project created",
    projectId
})

}