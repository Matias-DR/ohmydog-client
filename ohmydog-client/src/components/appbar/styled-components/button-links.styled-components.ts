import styled from "@emotion/styled"
import {
    Button,
    IconButton
} from "@mui/material"
import Link from "next/link"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

export const StyledLinkButtonContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledLink = styled(Link)`
    height: 100%;
    width: 100%;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--ohmydog-lightblue-color);

    &:hover {
        color: var(--ohmydog-orange-color);
    }
    &:active {
        color: var(--ohmydog-orange-opaque-color)
    }
`

export const StyledIconButton = styled(IconButton)`
    height: 100%;
`

export const StyledImage = styled.img`
    height: 80%;
`

export const StyledButton = styled(Button)`
    height: 3rem;
    width: 3rem;
    color: var(--ohmydog-lightblue-color);

    &:hover {
        color: var(--ohmydog-orange-color);
    }
    &:active {
        color: var(--ohmydog-orange-opaque-color)
    }
`

export const StyledSignOutButtonIcon = styled(LogoutIcon)`
    margin-right: 1rem;
    color: var(--ogmydog-lightblue-color);
`

export const StyledProfileButtonIcon = styled(AccountCircleIcon)`
    margin-right: 1rem;
    color: var(--ogmydog-lightblue-color);
`

export const StyledSignOutButton = styled(Button)`
`

export const StyledLinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`