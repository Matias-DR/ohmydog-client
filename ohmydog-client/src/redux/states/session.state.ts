import { Session } from '@/models/session.model'
import { createSlice } from '@reduxjs/toolkit';

const initialState: Session = {
    token: '',
    refresh: '',
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        createSession: (state, action) => action.payload,
        modifySession: (state, action) => ({ ...state, ...action.payload }),
        resetSession: () => initialState
    }
})

export const { createSession, modifySession, resetSession } = sessionSlice.actions
export default sessionSlice.reducer