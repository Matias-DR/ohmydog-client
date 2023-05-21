import {
    AppbarCommonLinks,
    ProfileButton,
    SignOutButton,
} from '../../'
import {
    StyledAppbarContentGridContainer,
    StyledAppbarContentGrid,
    StyledAppbarContent,
} from '../styled-components/appbar-common-container.styled-component'
import { User } from '@/models/user.model'
import HomeButton from './home-button.component'

export interface Props {
    user: User
}

export default function AppbarClientContent(props: Props) {
    return <StyledAppbarContentGridContainer
        container
    >
        <StyledAppbarContentGrid xs={2}>
            <HomeButton />
        </StyledAppbarContentGrid>
        <StyledAppbarContentGrid xs={5}>
            <StyledAppbarContent>
                <AppbarCommonLinks />
            </StyledAppbarContent>
        </StyledAppbarContentGrid>
        <StyledAppbarContentGrid xs={2}>
            <StyledAppbarContent>
                <ProfileButton username={props.user.nombre}></ProfileButton>
            </StyledAppbarContent>
        </StyledAppbarContentGrid>
        <StyledAppbarContentGrid xs={3}>
            <StyledAppbarContent>
                <SignOutButton />
            </StyledAppbarContent>
        </StyledAppbarContentGrid>
    </StyledAppbarContentGridContainer>
}