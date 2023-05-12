import styled from '@emotion/styled'
import DoneIcon from '@mui/icons-material/Done'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'

const IconSize = `
    width: 3rem;
    height: 3rem;
`

export const StyledImgUploaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledDoneIcon = styled(DoneIcon)`
    color: green;
    ${IconSize}
`

export const StyledAddPhotoIcon = styled(AddPhotoAlternateIcon)`
    ${IconSize}
`

export const StyledHelperText = styled.p`
    color: ${props => props.color}
`