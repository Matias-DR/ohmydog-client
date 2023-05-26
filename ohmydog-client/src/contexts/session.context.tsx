import { User } from '@/models/user.model'
import { Pet } from '@/models/pet.model'
import {
    createContext,
    useEffect,
    useState
} from 'react'
import { useRouter } from 'next/router'

export interface ContextProps {
    startSession: (
        user: User,
        pets: Pet[]
    ) => void,
    closeSession: () => void,
    user: () => User,
    updateUser: (data: any) => void,
    pets: () => Pet[],
    getPetById: (id: number) => Pet,
    addPet: (pet: Pet) => void,
    updatePet: (pet: Pet) => void,
    hasSinglePet: () => boolean,
    hasPetById: (id: number) => boolean,
    delPetById: (id: number) => boolean,
}

export interface ComponentProps {
    children: React.ReactNode
}

export const userInitialState: User = {
    name: '',
    lastname: '',
    age: 0,
    dni: 0,
    email: '',
    celphone: '',
    password: '',
    rol: '',
}

export const petInitialState: Pet = {
    id: 0,
    name: '',
    race: '',
    color: '',
    age: '',
    sex: '',
    size: '',
    weight: 0,
    origin: '',
    caracteristics: '',
    photo: '',
}

export const petsInitialState: Pet[] = []

export const SessionContext = createContext<ContextProps>({
    startSession: (
        user: User,
        pets: Pet[]
    ) => { },
    closeSession: () => { },
    user: () => userInitialState,
    updateUser: () => { },
    pets: () => petsInitialState,
    addPet: () => { },
    updatePet: () => { },
    hasSinglePet: () => true,
    getPetById: () => petInitialState,
    hasPetById: () => false,
    delPetById: () => false
})

export default function SessionContextProvider({ children }: ComponentProps) {
    const [session, setSession] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const user = sessionStorage.getItem('user')
        // Si estoy en inicio de sesión o registro
        if (['/signin', '/signup'].includes(router.pathname)) {
            // Y tengo sesión, me voy al inicio
            if (user) router.replace('/home')
            // Si no tengo sesión, me quedo en la página
            else setSession(true)
        }
        // Si estoy en cualquier otra página
        else {
            // Y no tengo sesión, me voy al inicio de sesión
            if (!user) router.replace('/signin')
            // Si tengo sesión, me quedo en la página
            else setSession(true)
        }
    }, [])

    const startSession = (
        user: User,
        pets: Pet[]
    ) => {
        localStorage.setItem('user', JSON.stringify(user))
        sessionStorage.setItem('pets', JSON.stringify(pets))
    }

    const closeSession = () => {
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('pets')
    }

    const user = (): User => {
        const user = sessionStorage.getItem('user')
        if (!user) return userInitialState
        return JSON.parse(user)
    }

    const setUser = (user: User) => {
        sessionStorage.setItem('user', JSON.stringify(user))
    }

    const pets = (): Pet[] => {
        const pets = sessionStorage.getItem('pets')
        if (!pets) return petsInitialState
        return JSON.parse(pets)
    }

    const setPets = (pets: Pet[]) => {
        sessionStorage.setItem('pets', JSON.stringify(pets))
    }

    const updateUser = (data: any) => {
        const _user: User = { ...user(), ...data }
        setUser(_user)
    }

    const getPetById = (id: number) => {
        const _pets = pets()
        const pet = _pets.find((pet: Pet) => pet.id === id)
        return pet ? pet : petInitialState
    }

    const hasSinglePet = () => pets().length === 1

    const hasPetById = (id: number) => {
        const _pets = pets()
        return _pets.some((pet: Pet) => pet.id === id)
    }

    const addPet = (pet: Pet) => {
        const _pets = pets()
        _pets.push(pet)
        setPets(_pets)
    }

    const updatePet = (pet: Pet) => {
        const _pets = pets()
        const index = _pets.findIndex(({ id }: Pet) => id === pet.id)
        _pets[index] = pet
        setPets(_pets)
    }

    const delPetById = (id: number) => {
        const _pets = pets()
        const index = _pets.findIndex((pet: Pet) => pet.id === id)
        if (index === -1) return false
        else {
            _pets.splice(index, 1)
            setPets(_pets)
            return true
        }
    }

    return <SessionContext.Provider value={{
        startSession,
        closeSession,
        user,
        updateUser,
        pets,
        getPetById,
        hasSinglePet,
        hasPetById,
        addPet,
        updatePet,
        delPetById
    }}>
        {session ? children : null}
    </SessionContext.Provider >
}