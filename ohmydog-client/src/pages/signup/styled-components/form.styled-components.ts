import { StyledScrollBar } from '@/styled-components/var'
import styled from '@emotion/styled'
import LoadingButton from '@mui/lab/LoadingButton'
import Grid from '@mui/material/Unstable_Grid2';

export const StyledFormSection = styled.section`
    height: 100%;
    width: 60%;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const StyledFieldset = styled.fieldset`
    /* border: none; */
    margin-bottom: 1rem;
    padding-top: 1rem;
    border: 1px solid var(--ohmydog-orange-color);
    border-radius: 1rem;
    overflow-y: auto;
    ${StyledScrollBar}
`

export const StyledLegend = styled.legend`
    /* height: 30%; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledGrid = styled(Grid)``

export const StyledImage = styled.img`
    width: 10rem;
`

export const StyledTitle = styled.h1`
    font-size: 1.3rem;
    color: var(--ohmydog-lightblue-color);
`

export const StyledSubmitButton = styled(LoadingButton)`
    margin-bottom: 1rem;
    color: white;
    background-color: var(--ohmydog-lightblue-color);
    font-weight: bold;
`