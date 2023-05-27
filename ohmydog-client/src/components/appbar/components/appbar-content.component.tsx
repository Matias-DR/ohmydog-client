import {
    AppbarLinks,
    HomeButton
} from './'
import {
    StyledAppbarContentGridContainer,
    StyledAppbarContentGrid,
    StyledAppbarContent,
} from '../styled-components/appbar.styled-components'

export default function AppbarContent() {
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