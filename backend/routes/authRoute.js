import { Router } from "express";
import { registerUser, siginUser } from "../controllers/auth.js";

const authentication = Router();


authentication.post("/register", registerUser);
authentication.post("/signin", siginUser)


export {authentication}