import bcrypt from 'bcrypt'

export class HashUtils {

     async encrypt(salt, value){
        try {
            return await bcrypt.hash(value, salt)
        } catch (error) {
             console.error('Error when encrypting', error)
        } 
    }

     async compare(plainValue, hashedValue){
        try {
            return await bcrypt.compare(plainValue, hashedValue)
        } catch (error) {
            console.error('Error when comparing', error)
        }
    }
    
}