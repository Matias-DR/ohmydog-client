import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const StyledModalWhiteBackground = styled.div`
    width: 25rem;
    height: 10rem;
    position: relative;
    background-color: white;
    border-radius: 1rem;
    border: 5px solid red;
`

export const StyledModalContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--ohmydog-background-graident-color);
    border-radius: .7rem;
`

export const StyledConfirmText = styled.p``

export const StyledButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const StyledConfirmButton = styled(Button)`
    padding: 0 1rem;
`