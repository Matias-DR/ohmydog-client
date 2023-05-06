import { createSlice } from '@reduxjs/toolkit';
import { ReduxUser } from '@/redux/models/user.redux-model';

const initialState: ReduxUser = {
    username: '',
    lastname: '',
    email: '',
    telephone: 0,
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