import { Pet } from '@/models/pet.model';
import { Session } from '@/models/session.model';
import { User } from '@/models/user.model';
import { createSession } from '@/redux/states/session.state';
import { createUser } from '@/redux/states/user.state';
import { createPets } from '@/redux/states/pets.state'
import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

export interface DispathProps {
    toDispatch: Dispatch<any>;
    data: any;
}

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

    return {
        dispatchCreateUser,
        dispatchCreateSession,
        dispatchCreatePets
    }
}