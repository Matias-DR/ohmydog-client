import styled from '@emotion/styled'
import Card from '@mui/material/Card';
import { Button } from '@mui/material'
import {
    CardActionArea,
    CardActions,
    IconButton
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
    /* border: 5px solid var(--ohmydog-lightblue-color); */
    border-radius: 5px;
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
`

export const StyledModalCardContainer = styled.div`
    width: 90%;
    height: 80%;
    position: relative;
    background-color: white;
    border: 5px solid var(--ohmydog-orange-color);
    border-radius: 15px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
`

export const StyledModalCloseButtonContainer = styled.div`
    position: absolute;
    top: -56px;
    right: -5px;
    background-color: white;
    border: 5px solid var(--ohmydog-orange-color);
    border-bottom: none;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export const StyledModalCloseButtonBackground = styled.div`
    background: rgba(65,149,175,0.15);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const StyledModalCloseButton = styled(IconButton)``