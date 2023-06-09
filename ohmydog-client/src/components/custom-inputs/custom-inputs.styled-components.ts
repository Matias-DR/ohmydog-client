import styled from '@emotion/styled'
import DoneIcon from '@mui/icons-material/Done'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import Grid from '@mui/material/Unstable_Grid2'
import { FormControl } from "@mui/material"

export const StyledFormControl = styled(FormControl)`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledErrorText = styled.p`
    margin: 0;
    padding: 0;
    color: red;
`

export const StyledGrid = styled(Grid)`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const IconSize = `
    width: 3rem;
    height: 3rem;
`

export const StyledImageContainer = styled.div`
    width: 3rem;
    height: 3rem;
    margin-top: .5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledImage = styled.img`
    height: 100%;
    margin-top: .5rem;
    object-fit: cover;
`

export const StyledDoneIcon = styled(DoneIcon)`
    color: green;
    margin-top: .5rem;
    ${IconSize}
`

export const StyledAddPhotoIcon = styled(AddPhotoAlternateIcon)`
    ${IconSize}
`

export const StyledHelperText = styled.p`
    width: 100%;
    margin: 0;
    text-align: center;
    position: absolute;
    bottom: -30px;
    color: ${props => props.color}
`