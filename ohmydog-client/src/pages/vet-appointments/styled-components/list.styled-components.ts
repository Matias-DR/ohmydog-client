import styled from '@emotion/styled'
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone'
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone'
import AssignmentLateTwoToneIcon from '@mui/icons-material/AssignmentLateTwoTone'
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone'
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone'
import { IconButton } from '@mui/material'
import List from '@mui/material/List'

export const StyledList = styled(List)`
    height: 90%;
    width: 100%;
    overflow: auto;
    border-top: 1px solid var(--ohmydog-lightblue-color);
`

export const StyledAcceptedIcon = styled(AssignmentTurnedInTwoToneIcon)`
    color: green;
`

export const StyledRejectedIcon = styled(HighlightOffTwoToneIcon)`
    color: red;
`

export const StyledPendingIcon = styled(AssignmentLateTwoToneIcon)`
    color: orange;
`

export const StyledIconButton = styled(IconButton)``

export const StyledAcceptAppointmentButton = styled(CheckTwoToneIcon)`
    color: green;
`

export const StyledRejectAppointmentButton = styled(ClearTwoToneIcon)`
    color: red;
`