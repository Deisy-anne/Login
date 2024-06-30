import { SignUpUseCase } from "./use-cases/sign-up.js"
import cors from 'cors'


import express from 'express'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/sign-up', async (req, res) =>  {
    const { name, cnpj, email, password } = req.body
    const user = new SignUpUseCase()
    const result = await user.execute(name, cnpj, email, password)
    const isError = result instanceof Error
    res.status(isError ? 400: 200).send(isError ? {message: result.message} : result)
})

app.listen(3000, () => {
    console.log('Server is running')
})

//const newSignIn = new SignInService()
//console.log(await newSignIn.execute('teste@domain.com', 'Teste#12345'))




//const newPassword = newSignIn.resetPassword('teste@domain.com', 'Teste#12345')
//console.log(await newPassword)