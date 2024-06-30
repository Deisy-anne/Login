import styles from './styles.module.css'
import ilustration from '../../assets/balloon.png'
import { SignUpForm } from '../Form/SignUpForm'
import { useState } from 'react'

export function SignUp(){

    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = new FormData(event.target)
        const inputValues = (  
        {
            name: data.get("name"),
            email: data.get("email"),
            cnpj: data.get("cnpj"),
            password: data.get("password"),
        })

        const headers = {
            "content-type": "application/json"
        }
        setError(null)

        return await fetch("http://localhost:3000/sign-up", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(inputValues)
        })
        .then(async (response) => {
           const data = await response.json()
           if (response.status === 400) setError(data.message)
        })

    }
    
    return (
     <div className={styles.signUp}>
        <img src={ilustration} alt="Balão de ar colorido" />
        <form className={styles.form} onSubmit={handleSubmit}>
            <SignUpForm/>
            {error && <p>{error}</p>}
        </form>
     </div>
    )
}