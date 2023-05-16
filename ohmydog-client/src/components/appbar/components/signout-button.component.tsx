import {
    StyledSignOutButton,
    StyledSignOutButtonLink,
    StyledSignOutButtonIcon
} from '../styled-components/signout.styled-components'
import { dispatchUtility } from '@/utilities/dispatch.utility'

export default function SignOutButton() {
    const { dispatchSignout } = dispatchUtility()

    return <StyledSignOutButton
        variant={'outlined'}
        color='secondary'
        onClick={dispatchSignout}
    >
        <StyledSignOutButtonLink href={'/signin'}>
            <StyledSignOutButtonIcon />
            Cerrar Sesión
        </StyledSignOutButtonLink>
    </StyledSignOutButton>
}