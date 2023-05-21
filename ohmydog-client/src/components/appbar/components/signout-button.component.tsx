import { SessionContext } from '@/contexts/session.context';
import {
    StyledSignOutButton,
    StyledSignOutButtonLink,
    StyledSignOutButtonIcon
} from '../styled-components/signout.styled-components'
import { useContext } from 'react';

export default function SignOutButton() {
    const { closeSession } = useContext(SessionContext);

    return <StyledSignOutButton
        variant={'outlined'}
        color='secondary'
        onClick={closeSession}
    >
        <StyledSignOutButtonLink href={'/signin'}>
            <StyledSignOutButtonIcon />
            Cerrar Sesión
        </StyledSignOutButtonLink>
    </StyledSignOutButton>
}