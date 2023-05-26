import { SessionContext } from '@/contexts/session.context'
import {
    StyledLinksContainer,
    StyledLink,
    StyledProfileButtonIcon,
    StyledSignOutButtonIcon,
} from '../styled-components/button-links.styled-components'
import { useContext } from 'react'

export default function AppbarCommonLinks() {
    const { user, closeSession } = useContext(SessionContext)
    const _user = user()

    return <StyledLinksContainer>
        {
            _user.role !== '' ?
                <StyledLink href='appointments'>Turnos</StyledLink> :
                null
        }
        <StyledLink href='pet-adoption'>Adopciones</StyledLink>
        <StyledLink href='lost-pets'>Perdidos</StyledLink>
        <StyledLink href='pet-sitters'>Cuidadores</StyledLink>
        <StyledLink href='pet-walkers'>Paseadores</StyledLink>
        <StyledLink href='donations'>Donaciones</StyledLink>
        {
            _user.role !== '' ?
                <StyledLink
                    href={
                        _user.role === 'Cliente' ?
                            'user-profile' :
                            'vet-user-profile'
                    }
                >
                    <StyledProfileButtonIcon />
                    {_user.name}
                </StyledLink> :
                null
        }
        {
            _user.role !== '' ?
                <StyledLink
                    href='/signin'
                    onClick={closeSession}
                >
                    <StyledSignOutButtonIcon />
                    CERRAR SESIÓN
                </StyledLink> :
                null
        }
    </StyledLinksContainer>
}