import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { saveUser } from '../services/authService.js';


const registerUser = async (req, res) => {
    //get username, email and password
    const {username, password} = req.body;

    try {
    //check if their are no missing fields
  if (!username || !password ) {
      console.log(`missing fields`);
      return res.status(404).json({message: `MISSING_FIELDS`})
    }; 
  
    const hashedPassword = await bcrypt.hash(password, 8);
    
    const save = await saveUser(username, hashedPassword)
    
    console.log(save);
    console.log(`user created`); 
    

    res.status(201).json({message: `USER CREATED`})
        
    } catch (error) {
        console.log(error);
    };

}

export {registerUser}