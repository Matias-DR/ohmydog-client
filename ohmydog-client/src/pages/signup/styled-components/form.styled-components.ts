import { StyledScrollBar } from '@/styled-components/var'
import styled from '@emotion/styled'
import LoadingButton from '@mui/lab/LoadingButton'
import Grid from '@mui/material/Unstable_Grid2';

export const StyledFormSection = styled.section`
    height: 100%;
    width: 90%;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledForm = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const StyledUserFieldSetAndButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledFieldset = styled.fieldset`
    margin-bottom: 0.5rem;
    padding-top: 0.3rem;
    border: 1px solid var(--ohmydog-orange-color);
    border-radius: 1rem;
    overflow-y: auto;
    ${StyledScrollBar}
`

export const StyledButtonContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`

export const StyledLegend = styled.legend`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledInputsGrid = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledGrid = styled(Grid)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledSideGrid = styled(Grid)`
    display: flex;
    align-items: start;
    justify-content: center;
`

export const StyledImage = styled.img`
    width: 10rem;
`

export const StyledTitle = styled.h1`
    font-size: 1.3rem;
    color: var(--ohmydog-lightblue-color);
`

export const StyledSubmitButton = styled(LoadingButton)`
    width: 100%;
    margin-bottom: 1rem;
    color: white;
    background-color: var(--ohmydog-lightblue-color);
    font-weight: bold;
`