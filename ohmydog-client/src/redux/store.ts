import { Session } from '@/models/session.model'
import { sessionSlice } from './states'
import {
    configureStore,
    combineReducers,
} from '@reduxjs/toolkit'
import {
    persistReducer,
    persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    session: sessionSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export interface AppStore {
    session: Session,
}

export const store = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
})

export const persistor = persistStore(store)