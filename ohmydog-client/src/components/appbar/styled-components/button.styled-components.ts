import styled from "@emotion/styled"
import { Button, IconButton } from "@mui/material"
import Link from "next/link"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

// SHARED
export const StyledLinkButtonContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledLink = styled(Link)`
    height: 100%;
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: 1px solid red;

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

// HOME
export const StyledHomeButtonContainer = styled(Button)`
    height: 100%;
    width: 100%;
    padding-left: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledHomeButton = styled(Link)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: var(--ohmydog-orange-color);
    };
    &:active {
        color: var(--ohmydog-orange-opaque-color);
    };
`

// PROFILE
export const StyledProfileButton = styled(Button)`
    color: white;
    background-color: var(--ogmydog-lightblue-color);
`

export const StyledProfileButtonLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:active {
        color: var(--ohmydog-orange-color);
    };
`

export const StyledProfileButtonIcon = styled(AccountCircleIcon)`
    margin-right: 1rem;
    color: var(--ogmydog-lightblue-color);
`

// SIGNOUT
export const StyledSignOutButton = styled(Button)`
`

export const StyledSignOutButtonLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover,
    &:active {
        color: var(--ohmydog-orange-color)
    }
`

export const StyledSignOutButtonIcon = styled(LogoutIcon)`
    margin-right: 1rem;
`