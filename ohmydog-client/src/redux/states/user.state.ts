import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/user.model'

const initialState: User = {
    nombre: '',
    apellido: '',
    edad: 0,
    dni: 0,
    email: '',
    telefono: '',
    contraseña: '',
    rol: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => action.payload,
        modifyUser: (state, action) => ({ ...state, ...action.payload }),
        resetUser: () => initialState
    }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions
export default userSlice.reducer