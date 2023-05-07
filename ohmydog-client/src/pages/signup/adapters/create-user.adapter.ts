import { User } from '@/models/user.model'

// Esto es lo que se recibe
// age: "23"
// dni: "42174892"
// email: "Matias-DR@outlook.com"
// lastname: "Diz Rendani"
// password: "qweQWE123/*-"
// petage: "7"
// petcaracteristics: ""
// petcolor: "qwe"
// petname: "qwe"
// petorigin: ""
// petrace: "qwe"
// petsex: "Macho"
// petsize: "qwe"
// petweight: "23.7"
// repeated-password: "qweQWE123/*-"
// telephone: "+542216203057"
// username: "Matias"

const createUserAdapter = (data: any): User => ({
    username: data.username,
    lastname: data.lastname,
    age: data.age,
    dni: data.dni,
    email: data.email,
    telephone: data.telephone,
    password: data.password,
})

export default createUserAdapter