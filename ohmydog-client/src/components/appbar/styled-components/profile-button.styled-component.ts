import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import Link from 'next/link'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

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