import styled from '@emotion/styled'
import Link from 'next/link'

export const StyledLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledLink = styled(Link)`
    margin-right: 1rem;
    color: black;
    font-weight: bold;
    text-decoration: none;
    font-weight: bold;
    text-decoration: none;
    color: white;

    &:hover {
        color: var(--ohmydog-orange-color);
    };
    &:active {
        color: var(--ohmydog-orange-opaque-color);
    };
`