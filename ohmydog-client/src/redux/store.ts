import { User } from '@/models/user.model'
import { Session } from '@/models/session.model'
import { userSlice } from './states/user.state'
import { sessionSlice } from './states/session.state'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
    session: sessionSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export interface AppStore {
    user: User,
    session: Session,
}

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)