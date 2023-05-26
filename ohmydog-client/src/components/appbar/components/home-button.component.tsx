import {
    StyledImage,
    StyledLinkButtonContainer,
    StyledLink,
    StyledIconButton
} from '../styled-components/button.styled-components'
import { ohmydogHomeB64Image } from '@/assets/images'

export default function HomeButton() {
    return <StyledLinkButtonContainer>
        <StyledLink href='/home'>
            <StyledIconButton>
                <StyledImage src={ohmydogHomeB64Image} />
            </StyledIconButton>
        </StyledLink>
    </StyledLinkButtonContainer>
}