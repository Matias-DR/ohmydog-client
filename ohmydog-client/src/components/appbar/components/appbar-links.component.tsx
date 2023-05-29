import { SessionContext } from '@/contexts/session.context'
import {
    StyledLinksContainer,
    StyledLink,
    StyledProfileButtonIcon,
    StyledSignOutButtonIcon,
} from '../styled-components/button-links.styled-components'
import { useContext } from 'react'

export default function AppbarCommonLinks() {
    const { getUser, closeSession } = useContext(SessionContext)
    const _user = getUser()

    return <StyledLinksContainer>
        {
            _user.role !== '' &&
            <StyledLink href={
                _user.role === 'Cliente' ? 'appointments' : 'vet-appointments'
            }>Turnos</StyledLink>
        }
        <StyledLink href='pet-adoption'>Adopciones</StyledLink>
        <StyledLink href='lost-pets'>Perdidos</StyledLink>
        <StyledLink href='pet-sitters'>Cuidadores</StyledLink>
        <StyledLink href='pet-walkers'>Paseadores</StyledLink>
        <StyledLink href='donations'>Donaciones</StyledLink>
        {
            _user.role !== '' &&
            <StyledLink href='user-profile'>
                <StyledProfileButtonIcon />
                {_user.name}
            </StyledLink>
        }
        {
            _user.role !== '' &&
            <StyledLink
                href='/signin'
                onClick={closeSession}
            >
                <StyledSignOutButtonIcon />
                CERRAR SESIÓN
            </StyledLink>
        }
    </StyledLinksContainer>
}