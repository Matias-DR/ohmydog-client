import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import Link from 'next/link'
import LogoutIcon from '@mui/icons-material/Logout'

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