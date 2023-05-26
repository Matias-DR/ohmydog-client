import { SessionContext } from '@/contexts/session.context';
import {
    StyledSignOutButton,
    StyledSignOutButtonLink,
    StyledSignOutButtonIcon
} from '../styled-components/button.styled-components'
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