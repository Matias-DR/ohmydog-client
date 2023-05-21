import {
    StyledLinksContainer,
    StyledLink,
} from '../styled-components/appbar-common-links.components'

export default function AppbarCommonLinks() {
    return <StyledLinksContainer>
        <StyledLink href='pet-adoption'>Adopciones</StyledLink>
        <StyledLink href='lost-pets'>Perdidos</StyledLink>
        <StyledLink href='appointments'>Turnos</StyledLink>
        <StyledLink href='donations'>Donaciones</StyledLink>
    </StyledLinksContainer>
}