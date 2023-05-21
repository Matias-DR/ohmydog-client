import {
    StyledHomeButtonContainer,
    StyledHomeButton
} from '../styled-components/home-button.styled-component'

export default function HomeButton() {
    return <StyledHomeButtonContainer>
        <StyledHomeButton href='/home'>
            Inicio
        </StyledHomeButton>
    </StyledHomeButtonContainer>
}