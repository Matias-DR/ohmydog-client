import styled from '@emotion/styled'
import LoadingButton from '@mui/lab/LoadingButton'

export const StyledSection = styled.section`
    box-sizing: border-box !important;
    /* height: 100%; */
    width: 90%;
    min-width: 280px;
    /* padding-bottom: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledImage = styled.img`
    height: 10rem;
`

export const StyledTitle = styled.h1`
    font-size: 1.3rem;
    color: var(--ohmydog-lightblue-color);
`

export const StyledForm = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledFieldset = styled.fieldset`
    margin-bottom: 1rem;
    padding: 1rem;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--ohmydog-orange-color);
    border-radius: 1rem;
`

export const StyledLegend = styled.legend`
    margin: -1rem auto;
`

export const StyledSubmitButton = styled(LoadingButton)`
    width: 15rem;
    color: white;
    background-color: var(--ohmydog-lightblue-color);
    font-weight: bold;
    position: relative;
`