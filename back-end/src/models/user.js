
export class User {

    constructor(id, name, cnpj, email, password) {
        this.id = id
        this.name = name
        this.cnpj = cnpj
        this.email = email
        this.password = password
    }

    static create(id, name, cnpj, email, password) {
        if (!this.isAValidId(id)) return new Error('Invalid id')
        if (!this.isAValidName(name)) return new Error('Invalid name')
        if (!this.isAValidCNPJ(cnpj)) return new Error('Invalid CNPJ')
        if (!this.isAValidEmail(email)) return new Error('Invalid email')
        if (!this.isAValidPassword(password)) return new Error('Invalid password')
        return new User(id, name, cnpj, email, password)
    }

   static isAValidId(id) {
        if (id === undefined || id === null || id.length === 0) return false
        return true
    }

    static isAValidName(name) {
        if (name === undefined || name === null || name.length === 0) return false
        return true
    }

    static isAValidCNPJ(cnpj) {
        if (cnpj === undefined || cnpj === null || cnpj.length !== 14) return false
        return true
    }

    static isAValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    static isAValidPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return regex.test(password)
    }
}