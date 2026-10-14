import { pool } from "../database/db.js";




const saveUser = async (username, password) => {
    try {

        const save = await pool.query(`INSERT INTO admins (username, password_hash) VALUES ($1, $2)`, [username, password])
        
        return save.rows[0]
    } catch (error) {
        console.log(error);
        throw error
    }
}

const findUser = async (username) => {

    try {

    const find = await pool.query(`
        SELECT * FROM admins WHERE username = $1`, [username])

    return find
        
    } catch (error) {
        console.log(error);
        throw error
    }
    
}

export {saveUser, findUser }