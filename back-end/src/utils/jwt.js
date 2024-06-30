import jwt from "jsonwebtoken"

export class JWTUtils {

   static generateToken(user) {
        const payload = {
            userId: user.id,
            userEmail: user.email
        }
        const options = {
            expiresIn: '8h'
        }

        return jwt.sign(payload, process.env.SECRET_KEY, options)

    }
}