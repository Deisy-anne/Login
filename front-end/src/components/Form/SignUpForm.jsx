import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

export function SignUpForm(){

    return (
        <>
            <strong>Crie sua conta</strong>

            <label htmlFor="name">
                <span>Nome</span>
                <Input id="name" name="name" type="text" placeholder="Insira seu nome aqui" />
            </label>

            <label htmlFor="cnpj">
                <span>CNPJ</span>
                <Input id="cnpj" name="cnpj" type="text" placeholder="Insira seu CNPJ aqui" />
            </label>

            <label htmlFor="email">
                <span>E-mail</span>
                <Input id="email" name="email" type="email" placeholder="Insira seu e-mail aqui" />
            </label>

            <label htmlFor="password">
                <span>Senha</span>
                <Input id="password" name="password" type="password" placeholder="Insira sua senha aqui" />
            </label>

            <span>
                Já tem uma conta?
                <a href="">Fazer Login</a>
            </span>

            <Button value="Criar conta" />
            
        </>
    )
}