import { createSlice } from '@reduxjs/toolkit';
import { Pet } from '@/models/pet.model'

const initialState: Pet[] = []

export const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        createPets: (state, action) => action.payload,
        modifyPets: (state, action) => ({ ...state, ...action.payload }),
        resetPets: () => initialState,
        addDefaultIngredient: (state, action) => {
            if (!(state.find((pet: Pet) => pet === action.payload))) {
                state = [...state, action.payload]
            }
        },
        removeDefaultIngredient: (state, action) => {
            const newPets = [...state]
            newPets.splice(
                newPets.findIndex(
                    (pet: Pet) => { return pet === action.payload }
                ), 1
            )
            state = newPets
        },
    }
})

export const { createPets, modifyPets, resetPets } = petsSlice.actions
export default petsSlice.reducer