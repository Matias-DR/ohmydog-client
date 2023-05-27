import { UpdateUser } from "@/models/update-data/update-user.model"

const updateUserAdapter = (data: UpdateUser) => {
    return {
        Contraseña: data.password,
        NuevContraseña: data.passwordnew,
    }
}

export default updateUserAdapter