import styled from "@emotion/styled"
import { LoadingButton } from "@mui/lab"
import Grid from '@mui/material/Unstable_Grid2'

export const StyledMain = styled.main`
    height: 100%;
    width: 100%;
    padding: 0 1rem;
`

export const StyledGrid = styled(Grid)`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const StyledGridItem = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
`

export const StyledSubmitButton = styled(LoadingButton)`
    width: 15rem;
    color: white;
    background-color: var(--ohmydog-lightblue-color);
    font-weight: bold;
`