import styled from "@emotion/styled"
import { IconButton } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const StyledAddButton = styled(IconButton)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;   
    background-color: var(--ohmydog-orange-opaque-color);
    &:hover {
        background-color: var(--ohmydog-orange-color);
    }
`

export const StyledAddIcon = styled(AddOutlinedIcon)`
    font-size: 10rem;
    color: var(--ohmydog-lightblue-opaque-color);
`