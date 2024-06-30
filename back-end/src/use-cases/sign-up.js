import { UserDatabase } from "../infra/database/user.js"
import { randomUUID } from 'node:crypto'
import { User } from "../models/user.js"

export class SignUpUseCase {

    async execute(name, cnpj, email, password){
        const database = new UserDatabase()
        const result = await database.findEmail(email)
        if (result[0].length > 0) return new Error('User already registered')
        const uuid = randomUUID()
        const userOrError = User.create(uuid, name, cnpj, email, password)
        if (userOrError instanceof Error) return userOrError
        await database.insertUser(userOrError)
        return {
            id: userOrError.id,
            name: userOrError.name,
            cnpj: userOrError.cnpj,
            email: userOrError.email,
            password: userOrError.password
        }
    }
}



