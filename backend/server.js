import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authentication } from './routes/authRoute.js';
dotenv.config()

//set port
const PORT = process.env.PORT || 3000;
const app = express();

//golbal middlewares
app.use(express.json())
app.use(cors())


//global routes
app.use('/auth', authentication)


app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`);
});


