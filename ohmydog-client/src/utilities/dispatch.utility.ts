import { Pet } from '@/models/pet.model'
import { Session } from '@/models/session.model'
import { User } from '@/models/user.model'
import {
    createSession,
    resetSession,
} from '@/redux/states/session.state'
import {
    createUser,
    resetUser,
} from '@/redux/states/user.state'
import {
    createPets,
    resetPets,
} from '@/redux/states/pets.state'
import { useDispatch } from 'react-redux'

export const dispatchUtility = () => {
    const dispatch = useDispatch()

    const dispatchCreateUser = (user: User) => {
        dispatch(createUser(user))
    }

    const dispatchCreateSession = (session: Session) => {
        dispatch(createSession(session))
    }

    const dispatchCreatePets = (pets: Pet[]) => {
        dispatch(createPets(pets))
    }

    const dispatchSignout = () => {
        dispatch(resetSession())
        dispatch(resetUser())
        dispatch(resetPets())
    }

    return {
        dispatchCreateUser,
        dispatchCreateSession,
        dispatchCreatePets,
        dispatchSignout
    }
}