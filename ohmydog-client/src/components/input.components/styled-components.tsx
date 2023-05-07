import styled from "@emotion/styled"
import {
    TextField,
    Select,
    FormControl
} from '@mui/material'

const StyledField = `
    width: 100%;
    margin-bottom: .1rem;
`

export const StyledTextField = styled(TextField)`
    ${StyledField}
`

export const StyledFormControl = styled(FormControl)`
    ${StyledField}
`

export const StyledSelectField = styled(Select)`
    width: 100%;
`