import { User } from '@/models/user.model'
import { Session } from '@/models/session.model'
import { Pet } from '@/models/pet.model'
import {
    userSlice,
    sessionSlice,
    petsSlice
} from './states'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    user: userSlice,
    session: sessionSlice,
    pets: petsSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export interface AppStore {
    user: User,
    session: Session,
    pets: Pet[]
}

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)