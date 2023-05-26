import {
    AppbarLinks,
    HomeButton
} from './'
import {
    StyledAppbarContentGridContainer,
    StyledAppbarContentGrid,
    StyledAppbarContent,
} from '../styled-components/appbar.styled-components'
import { SessionContext } from '@/contexts/session.context'
import { useContext } from 'react'

export default function AppbarContent() {
    const { role } = useContext(SessionContext).user()

    return <StyledAppbarContentGridContainer
        container
    >
        <StyledAppbarContentGrid xs={1}>
            <HomeButton />
        </StyledAppbarContentGrid>
        <StyledAppbarContentGrid
            xs={11}
        >
            <StyledAppbarContent>
                <AppbarLinks />
            </StyledAppbarContent>
        </StyledAppbarContentGrid>
    </StyledAppbarContentGridContainer>
}