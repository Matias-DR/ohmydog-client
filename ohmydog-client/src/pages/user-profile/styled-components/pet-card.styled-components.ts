import styled from '@emotion/styled'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
    border: 1px solid red;
`

export const StyledImgCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const StyledCardContent = styled(CardContent)`
    width: 100%;
    /* height: 100%; */
    /* max-height: 10rem; */
    position: absolute;
    bottom: 0;
    z-index: 1;
`

export const StyledCardActions = styled(CardActions)`
`

export const StyledTitle = styled.h2`
    color: white;
`

export const StyledText = styled.p`
    height: 5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
    border: 1px solid red;
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