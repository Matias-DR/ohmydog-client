import styled from "@emotion/styled"
import Grid from '@mui/material/Unstable_Grid2'

export const StyledMain = styled.main`
    height: 100%;
    width: 100%;
`

export const StyledGrid = styled(Grid)`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`

export const StyledGridItem = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 1px solid green;
`