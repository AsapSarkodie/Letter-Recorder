import { Router } from "express";
import { registerUser } from "../controllers/auth.js";

const authentication = Router();


authentication.post("/register", registerUser);


export {authentication}