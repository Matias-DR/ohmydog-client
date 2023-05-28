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
    ) => void
    closeSession: () => void
    getUser: () => User
    updateUser: (data: any) => void
    getPets: () => Pet[]
    getPetById: (id: number) => Pet
    addPet: (pet: Pet) => void
    updatePet: (pet: Pet) => void
    hasSinglePet: () => boolean
    hasPetById: (id: number) => boolean
    delPetById: (id: number) => boolean
    userUpdated: boolean
    setUserUpdated: (updated: boolean) => void
    petUpdated: boolean
    setPetUpdated: (updated: boolean) => void
}

export interface ComponentProps {
    children: React.ReactNode
}

export const userInitialState: User = {
    name: '',
    lastname: '',
    birthdate: '',
    dni: 0,
    email: '',
    celphone: '',
    password: '',
    role: '',
}

export const petInitialState: Pet = {
    id: 0,
    name: '',
    race: '',
    color: '',
    birthdate: '',
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
    getUser: () => userInitialState,
    updateUser: () => { },
    getPets: () => petsInitialState,
    addPet: () => { },
    updatePet: () => { },
    hasSinglePet: () => true,
    getPetById: () => petInitialState,
    hasPetById: () => false,
    delPetById: () => false,
    userUpdated: false,
    setUserUpdated: () => { },
    petUpdated: false,
    setPetUpdated: () => { },
})

export default function SessionContextProvider({ children }: ComponentProps) {
    const [session, setSession] = useState(false)
    const router = useRouter()
    const [userUpdated, setUserUpdated] = useState(false)
    const [petUpdated, setPetUpdated] = useState(false)

    useEffect(() => {
        const user = sessionStorage.getItem('user')
        // Si estoy en inicio de sesión o registro
        if (['/signin', '/signup'].includes(router.pathname)) {
            // Y tengo sesión, me voy al inicio
            if (user) router.replace('/home')
            // Si no tengo sesión, me quedo en la página
            else setSession(true)
        }
        // Si no estoy en inicio de sesión o registro
        else {
            // Y no tengo sesión, me voy al inicio de sesión
            if (!user) router.replace('/signin')
            // Si tengo sesión, me quedo en la página
            else setSession(true)
        }
    }, [router.pathname])

    const startSession = (
        user: User,
        pets: Pet[]
    ) => {
        sessionStorage.setItem('user', JSON.stringify(user))
        sessionStorage.setItem('pets', JSON.stringify(pets))
    }

    const closeSession = () => {
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('pets')
    }

    const getUser = (): User => {
        const user = sessionStorage.getItem('user')
        if (!user) return userInitialState
        return JSON.parse(user)
    }

    const setUser = (user: User) => {
        sessionStorage.setItem('user', JSON.stringify(user))
    }

    const getPets = (): Pet[] => {
        const pets = sessionStorage.getItem('pets')
        if (!pets) return petsInitialState
        return JSON.parse(pets)
    }

    const setPets = (pets: Pet[]) => {
        sessionStorage.setItem('pets', JSON.stringify(pets))
    }

    const updateUser = (data: any) => {
        const user: User = { ...getUser(), ...data }
        setUser(user)
    }

    const getPetById = (id: number) => {
        const pets = getPets()
        const pet = pets.find((pet: Pet) => pet.id === id)
        return pet ? pet : petInitialState
    }

    const hasSinglePet = () => getPets().length === 1

    const hasPetById = (id: number) => {
        const pets = getPets()
        return pets.some((pet: Pet) => pet.id === id)
    }

    const addPet = (pet: Pet) => {
        const pets = getPets()
        pets.push(pet)
        setPets(pets)
    }

    const updatePet = (pet: Pet) => {
        const pets = getPets()
        const index = pets.findIndex(({ id }: Pet) => id === pet.id)
        pets[index] = pet
        setPets(pets)
    }

    const delPetById = (id: number) => {
        const pets = getPets()
        const index = pets.findIndex((pet: Pet) => pet.id === id)
        if (index === -1) return false
        else {
            pets.splice(index, 1)
            setPets(pets)
            return true
        }
    }

    return <SessionContext.Provider value={{
        startSession,
        closeSession,
        getUser,
        updateUser,
        getPets,
        getPetById,
        hasSinglePet,
        hasPetById,
        addPet,
        updatePet,
        delPetById,
        userUpdated,
        setUserUpdated,
        petUpdated,
        setPetUpdated,
    }}>
        {session ? children : null}
    </SessionContext.Provider >
}