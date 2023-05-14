import styled from '@emotion/styled'
import Card from '@mui/material/Card';
import { Button } from '@mui/material'
import {
    CardActionArea,
    CardActions
} from '@mui/material';

export const StyledCard = styled(Card)`
    height: 100%;
    width: 100%;
    position: relative;
`

export const StyledCardActionArea = styled(CardActionArea)`
    width: 100%;
    height: 100%;
    position: absolute;
`

export const StyledImgCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const StyledCardContent = styled.div`
    width: 100%;
    padding: .5rem;
    position: absolute;
    bottom: 0;
    z-index: 1;

    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
`

export const StyledCardActions = styled(CardActions)`
    margin: 0;
    padding: 0;
`

export const StyledTitle = styled.h2`
    color: white;
`

export const StyledText = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
`

export const StyledViewEditButton = styled(Button)`
    background-color: var(--ohmydog-lightblue-color);
    color: white;
    font-weight: bold;
`

export const StyledDeleteButton = styled(Button)`
    background-color: red;
    color: white;
    font-weight: bold;
`

export const StyledModalBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0.7px );
    -webkit-backdrop-filter: blur( 0.7px );
`

export const StyledModalCardContainer = styled.div`
    width: 80%;
    height: 60%;

    background: rgba( 241, 150, 91, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 1px );
    border-radius: 10px;
`