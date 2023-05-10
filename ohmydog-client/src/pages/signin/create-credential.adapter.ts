import { Credential } from './credential.model'

export const createCredentialAdapter = (data: any): Credential => ({
    email: data.useremail,
    contraseña: data.userpassword,
})