import styled from "@emotion/styled"
import { Button } from "@mui/material"
import Link from "next/link"

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

export const StyledHomeImage = styled.img`
    height: 80%;
`