import { UserDatabase } from "../infra/database/user.js"

export class ResetPasswordUseCase {

    async execute(email, password){
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if (regex.test(password) === false) return new Error('Invalid password')
        const signInpDatabaseInstance = new UserDatabase()
        const findUser = await signInpDatabaseInstance.getUser(email)
        return signInpDatabaseInstance.updatePassword(findUser[0].id, password)
    }
}