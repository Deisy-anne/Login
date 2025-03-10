import mysql from 'mysql2/promise'

export const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect(err => {
    if (err){
        console.log('Error connecting in database', err.stack)
    return
    }

    console.log('Connected successfully')
})



