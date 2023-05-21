import styled from "@emotion/styled"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const StyledAddIcon = styled(AddOutlinedIcon)`
    height: 100%;
    width: 100%;
    color: var(--ohmydog-lightblue-opaque-color);   
    background-color: var(--ohmydog-orange-color);
    &:hover {
        background-color: var(--ohmydog-orange-opaque-color);
    }
`