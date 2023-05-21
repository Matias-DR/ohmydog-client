import styled from "@emotion/styled"
import Link from "next/link"

export const StyledHomeButtonContainer = styled.div`
    height: 100%;
    width: 100%;
    padding-left: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledHomeButton = styled(Link)`
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