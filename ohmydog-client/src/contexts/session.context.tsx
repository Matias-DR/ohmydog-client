import { User } from '@/models/user.model'
import { Pet } from '@/models/pet.model'
import { getUser } from '@/services/user.services'
import { getPets } from '@/services/pet.services'
import {
    createSession,
    resetSession
} from '@/redux/states/session.state'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    createPetsAdapter,
    createUserAdapter
} from './adapters'
import { store } from '@/redux/store'
import { useDispatch } from 'react-redux'
import {
    createContext,
    useEffect,
    useState
} from 'react'

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
    const dispatch = useDispatch()
    const { callEndpoint } = useFetchAndLoad()

    useEffect(() => {
        setToken(store.getState().session)
        console.log('Session context: Token', token)
        if (token) {
            callEndpoint(getUser(token)).then(
                (res: any) => {
                    console.log('Session context: User', res.data)
                    if (res.data) setUser(createUserAdapter(res.data))
                }
            )
            callEndpoint(getPets(token)).then(
                (res: any) => {
                    console.log('Session context: Pets', res.data)
                    if (res.data) setPets(createPetsAdapter(res.data))
                }
            )
        }
    }, [token])

    const startSession = (
        token: string,
        user: User,
        pets: Pet[]
    ) => {
        dispatch(createSession(token))
        setToken(token)
        setUser(user)
        setPets(pets)
    }

    const closeSession = () => {
        dispatch(resetSession())
        setUser(userInitialState)
        setPets(petsInitialState)
        setToken(tokenInitialState)
    }

    const updateUser = (data: any) => {
        setUser({ ...user, ...data })
    }

    const hasSinglePet = () => pets.length === 1

    const addPet = (pet: Pet) => setPets([...pets, pet])

    const updatePet = (pet: Pet) => {
        const index = pets.findIndex((pet: Pet) => pet.id === pet.id)
        const newPets = [...pets]
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