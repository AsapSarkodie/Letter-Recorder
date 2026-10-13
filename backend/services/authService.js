import { pool } from "../database/db.js";




const saveUser = async (username, password) => {
    try {

        const save = await pool.query(`INSERT INTO admins VALUES ($1, $2) RETURNING * `, [username, password])
        
        return save.rows[0]
    } catch (error) {
        console.log(error);
        throw error
    }
}

export {saveUser}