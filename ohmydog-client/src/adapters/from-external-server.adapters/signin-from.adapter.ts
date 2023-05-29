import {
    petsFromSigninAdapter,
    tokenFromAdapter,
    userFromSigninAdapter
} from '../'

const signinFromAdapter = (data: any): any => {
    const token = tokenFromAdapter(data)
    const user = userFromSigninAdapter(data)
    const pets = data.mascotas ? petsFromSigninAdapter(data) : data.Mascotas ? petsFromSigninAdapter(data) : []

    return {
        token,
        user,
        pets
    }
}

export default signinFromAdapter