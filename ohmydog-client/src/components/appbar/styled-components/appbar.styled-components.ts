import styled from '@emotion/styled'
import Grid from '@mui/material/Unstable_Grid2'

export const StyledAppbar = styled.div`
    height: 100vh;
    width: 100vw;
`

export const StyledAppbarContainer = styled.div`
    height: 9vh;
`

interface StyledAppbarChildrenContainerProps {
    height: string
}

export const StyledAppbarChildrenContainer = styled.div<StyledAppbarChildrenContainerProps>`
    height: ${props => props.height};
`

export const StyledAppbarContentGridContainer = styled(Grid)`
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid var(--ohmydog-lightblue-color);
`

export const StyledAppbarContentGrid = styled(Grid)`
    height: 100%;
`

export const StyledAppbarContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`