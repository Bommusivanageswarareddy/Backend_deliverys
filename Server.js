import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import fooRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//app config

const app = express()
const port = process.env.Port || 4000;


//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();


//api end points

app.use("/api/food",fooRouter)

app.use("/images", express.static('uploads'))

app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

