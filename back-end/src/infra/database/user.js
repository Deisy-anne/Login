import { HashUtils } from '../../utils/bcrypt.js'
import { connection } from './connection.js'

export class UserDatabase {
    
    async getUser(email) {
        const sql = 'select * from user where email = ?'
        try {
             const [results, fields] = await connection.query(sql, email)
            return results
        } catch (error) {
            console.error('Error getting user in connection', error)
        }
    }

    async updatePassword(id, password){
        const hash = new HashUtils()
        const passwordEncrypted = await hash.encrypt(12, password)
        const sql = `Update user set password= ? where id= ?`
        try {
             connection.query(sql, [passwordEncrypted, id])
            return 'Password updated successfully'
        } catch (error) {
            console.error('Error updating password', error)
        }
        
    }

    async findEmail(email) {
        const sql = 'select 1 from user where email = ?' 
        try {
            return  await connection.query(sql, [email])
        } catch (error) {
            console.log('Error finding email in database', error)
        }
        
     }
 
     async insertUser(user) {
         const hash = new HashUtils()
         const passwordEncrypted = await hash.encrypt(12, user.password)
        const sql = 'insert into user(id, name, cnpj, email, password) values (?, ?, ?, ?, ?)'
         try {
            return await connection.query(sql, [user.id, user.name, user.cnpj, user.email, passwordEncrypted])
         } catch (error){
            console.error('Error inserting user in database', error)
         }
        
     }

}