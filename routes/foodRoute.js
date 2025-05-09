import express from 'express'
import { addFood, listFood ,removeFood } from '../controllers/foodController.js';
import multer from 'multer'


const fooRouter = express.Router();
//Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


fooRouter.post("/add",upload.single("image"),addFood)

fooRouter.get("/list",listFood)
fooRouter.post("/remove",removeFood)




export default fooRouter;