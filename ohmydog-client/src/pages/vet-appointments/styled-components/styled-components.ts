import styled from '@emotion/styled'
import Grid from '@mui/material/Unstable_Grid2'

export const StyledGrid = styled(Grid)`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
`

export const StyledGridItem = styled(Grid)`
    height: 100%;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    border-right: 1px solid var(--ohmydog-lightblue-color);

    &:last-child {
        border-right: none;
    }
`

export const StyledTitle = styled.h1`
    font-size: 1.3rem;
    color: var(--ohmydog-lightblue-color);
`