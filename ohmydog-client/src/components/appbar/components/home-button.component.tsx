import {
    StyledImage,
    StyledLinkButtonContainer,
    StyledLink,
    StyledButton
} from '../styled-components/button-links.styled-components'
import { ohmydogHomeB64Image } from '@/assets/images'

export default function HomeButton() {
    return <StyledLinkButtonContainer>
        <StyledLink href='/home'>
            <StyledButton>
                <StyledImage src={ohmydogHomeB64Image} />
            </StyledButton>
        </StyledLink>
    </StyledLinkButtonContainer>
}