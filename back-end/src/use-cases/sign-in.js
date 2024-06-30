import { UserDatabase } from "../infra/database/user.js";
import { HashUtils } from "../utils/bcrypt.js";
import { JWTUtils } from "../utils/jwt.js";

export class SignInUseCase {

   async execute(email, password){
        const signInpDatabaseInstance = new UserDatabase()
        const user = await signInpDatabaseInstance.getUser(email)
        if (user.length === 0 || user === undefined) return new Error('User not registered')
        const hash = new HashUtils()
        const isPasswordEqual = await hash.compare(password, user[0].password)
        if (!isPasswordEqual) return new Error('Email or password incorrect')
        const token = JWTUtils.generateToken(user)
        return token
    }

}



