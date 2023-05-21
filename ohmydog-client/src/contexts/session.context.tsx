import { User } from '@/models/user.model'
import { Pet } from '@/models/pet.model'
import { getUser } from '@/services/user.services'
import { getPets } from '@/services/pet.services'
import { ChangeUserData } from '@/pages/user-profile/change-user-data.model'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    createPetsAdapter,
    createUserAdapter
} from './adapters'
import {
    createContext,
    useEffect,
    useState
} from 'react'
import { useRouter } from 'next/router'

export interface ContextProps {
    startSession: (
        token: string,
        user: User,
        pets: Pet[]
    ) => void,
    closeSession: () => void,
    token: string,
    setToken: (token: string) => void,
    user: User,
    setUser: (user: User) => void,
    pets: Pet[],
    setPets: (pets: Pet[]) => void,
    updateUser: (data: any) => void,
    hasSinglePet: () => boolean,
    addPet: (pet: Pet) => void,
    updatePet: (pet: Pet) => void,
    delPet: (id: number) => void,
}

export interface ComponentProps {
    children: React.ReactNode
}

export const userInitialState: User = {
    nombre: '',
    apellido: '',
    edad: 0,
    dni: 0,
    email: '',
    telefono: '',
    contraseña: '',
    confirmacioncontraseña: '',
    nuevacontraseña: '',
    rol: '',
}

export const petsInitialState: Pet[] = []

export const tokenInitialState: string = ''

export const SessionContext = createContext<ContextProps>({
    startSession: (
        token: string,
        user: User,
        pets: Pet[]
    ) => { },
    closeSession: () => { },
    token: tokenInitialState,
    setToken: () => { },
    user: userInitialState,
    setUser: () => { },
    pets: petsInitialState,
    setPets: () => { },
    updateUser: () => { },
    hasSinglePet: () => true,
    addPet: () => { },
    updatePet: () => { },
    delPet: () => { },
})

export default function SessionContextProvider({ children }: ComponentProps) {
    const [user, setUser] = useState<User>(userInitialState)
    const [pets, setPets] = useState<Pet[]>(petsInitialState)
    const [token, setToken] = useState<string>('')
    const { callEndpoint } = useFetchAndLoad()
    const router = useRouter()

    useEffect(() => {
        setToken(sessionStorage.getItem('token') || '')
        // console.log('Session context: Token', token)
        if (token) {
            callEndpoint(getUser(token)).then(
                (res: any) => {
                    if (res.data) setUser(createUserAdapter(res.data))
                    // console.log('Session context: User', user)
                }
            )
            callEndpoint(getPets(token)).then(
                (res: any) => {
                    // console.log('Session context: Pets res', res)
                    if (res.data) setPets(createPetsAdapter(res.data))
                    // console.log('Session context: Pets', pets)
                }
            )
            if (['/signin', '/signup'].includes(router.pathname)) {
                router.replace('/home')
            }
        } else {
            if (!['/signin', '/signup'].includes(router.pathname)) {
                router.replace('/signin')
            }
        }
    }, [token])

    const startSession = (
        token: string,
        user: User,
        pets: Pet[]
    ) => {
        sessionStorage.setItem('token', token)
        setToken(token)
        setUser(user)
        setPets(pets)
    }

    const closeSession = () => {
        sessionStorage.removeItem('token')
        setUser(userInitialState)
        setPets(petsInitialState)
        setToken(tokenInitialState)
    }

    const updateUser = (data: ChangeUserData) => {
        const updates = {
            telefono: data.telefono ?
                data.telefono
                : user.telefono,
            contraseña: data.nuevacontraseña ?
                data.nuevacontraseña
                : user.contraseña
        }
        setUser({ ...user, ...updates })
    }

    const hasSinglePet = () => pets.length === 1

    const addPet = (pet: Pet) => setPets([...pets, pet])

    const updatePet = (pet: Pet) => {
        const newPets = [...pets]
        const index = newPets.findIndex((p: Pet) => p.id === pet.id)
        newPets[index] = pet
        setPets(newPets)
    }

    const delPet = (id: number) => {
        const index = pets.findIndex((pet: Pet) => pet.id === id)
        const newPets = [...pets]
        newPets.splice(index, 1)
        setPets(newPets)
    }

    return <SessionContext.Provider value={{
        token,
        setToken,
        startSession,
        closeSession,
        user,
        setUser,
        pets,
        setPets,
        updateUser,
        hasSinglePet,
        addPet,
        updatePet,
        delPet,
    }}>
        {children}
    </SessionContext.Provider >
}