import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { saveUser, findUser } from '../services/authService.js';


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

const siginUser = async (req, res) => {
    //destructure user information
    const {username, password} = req.body;


    try {
    if (!username, !password) {
        console.log('missing fields');
     return res.status(404).json({message: `MISSING_FEILDS`});
        
    };

    const find = await findUser(username)

    if (find.rows.length === 0) {
        console.log(`user not found`);
        res.json({message: `USER_NOT_FOUND`})
    }

    let userpassword = find.password;

    const isMatch = await bcrypt.compare(password, userpassword);

    if (!isMatch) {
        console.log(`password mismatch`);
     return res.json({message: `INVALID_CREDENTIALS`})
    }

    console.log(`sign in successful`);
    


        
    } catch (error) {
        console.log(error);     
    };

}

export {registerUser, siginUser}