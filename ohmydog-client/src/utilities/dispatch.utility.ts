import { Session } from '@/models/session.model';
import { User } from '@/models/user.model';
import { createUserReduxAdapter } from '@/redux/adapters/create-user.redux-adapter';
import { createSession } from '@/redux/states/session.state';
import { createUser } from '@/redux/states/user.state';
import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

export interface DispathProps {
    toDispatch: Dispatch<any>;
    data: any;
}

export const dispatchUtility = () => {
    const dispatch = useDispatch()

    const dispatchCreateUser = (user: User) => {
        dispatch(createUser(createUserReduxAdapter(user)))
    }

    const dispatchCreateSession = (session: Session) => {
        dispatch(createSession(session))
    }

    return { dispatchCreateUser, dispatchCreateSession }
}