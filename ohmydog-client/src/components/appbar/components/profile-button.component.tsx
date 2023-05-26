import {
    StyledLinkButtonContainer,
    StyledLink,
    StyledIconButton,
} from '../styled-components/button.styled-components'
import { SessionContext } from '@/contexts/session.context'
import { useContext } from 'react'

export default function ProfileButton() {
    const { name } = useContext(SessionContext).user()

    return <StyledLinkButtonContainer>
        <StyledLink href={'/user-profile'}>
            <StyledIconButton>
                {name}
            </StyledIconButton>
        </StyledLink>
    </StyledLinkButtonContainer>
}