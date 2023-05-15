import styled from '@emotion/styled'
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton'

export const StyledForm = styled.form`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    background: var(--ohmydog-background-graident-color);
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
`

export const StyledCardContainer = styled(Grid)`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
`

export const StyledImgGrid = styled(Grid)`
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const StyledInputsGrid = styled(Grid)`
    height: 100%;
    padding: .5rem;
    padding-bottom: 0;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
`

export const StyledGrid = styled(Grid)`
`

export const StyledSubmitButtonContainer = styled.div`
    position: absolute;
    left: -5px;
    border: 5px solid var(--ohmydog-orange-color);
    border-top: none;
    border-radius: 0 0 10px 10px;
`

export const StyledSubmitButtonBackground = styled.div`
    background-color: white;
    border-radius: 0 0 5px 5px;
`

export const StyledSubmitButton = styled(LoadingButton)`
    color: white;
    background-color: var(--ohmydog-lightblue-color);
    font-weight: bold;
    border-radius: 0 0 5px 5px;
`