const signinToAdapter = (data: any) => {
    return {
        email: data.email,
        contraseña: data.password
    }
}

export default signinToAdapter