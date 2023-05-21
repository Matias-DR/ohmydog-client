import { Session } from '@/models/session.model'
import {
    createSession,
    resetSession,
} from '@/redux/states/session.state'
import { useDispatch } from 'react-redux'

export const dispatchUtility = () => {
    const dispatch = useDispatch()

    const dispatchCreateSession = (session: Session) => {
        dispatch(createSession(session))
    }

    const dispatchSignout = () => {
        dispatch(resetSession())
    }

    return {
        dispatchCreateSession,
        dispatchSignout,
    }
}