import {
    StyledList,
    StyledItem
} from '@/styled-components/pet-card-list.styled-components'
import {
    StyledCard,
    StyledCardActionArea,
    StyledImgCard,
    StyledTitle,
    StyledCardActions,
    StyledCardContent,
    StyledText,
    StyledModalBackground,
    StyledModalCardContainer,
} from '../styled-components/pet-card.styled-components'
import { Pet } from '@/models/pet.model'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Button } from '@mui/material'
import Modal from '@mui/material/Modal';

export default function PetList() {
    const pets: Pet[] = useSelector((store: AppStore) => store.pets)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',

    return <StyledList container spacing={1}>
        {pets.map((pet: Pet, index) => <StyledItem
            xs={12} sm={6} md={4} lg={3} xl={2}
            key={index}
        >
            <StyledCard>
                <StyledCardActionArea>
                    <StyledImgCard
                        height='140'
                        src='https://cloudfront-us-east-2.images.arcpublishing.com/reuters/V46R76J7VBO7DGCHB4CLPOQHSE.jpg'
                        alt='dog-index'
                        onClick={handleOpen}
                    />
                </StyledCardActionArea>
                <StyledCardContent>
                    <StyledTitle>
                        Lizard
                    </StyledTitle>
                    <StyledText>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        -
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </StyledText>
                    <StyledCardActions>
                        <Button size='small'>Share</Button>
                        <Button size='small'>Learn More</Button>
                    </StyledCardActions>
                </StyledCardContent>
            </StyledCard>
            <Modal
                open={open}
                onClose={handleClose}
                hideBackdrop
            >
                <StyledModalBackground
                    onClick={handleClose}
                >
                    <StyledModalCardContainer>
                    </StyledModalCardContainer>
                </StyledModalBackground>
            </Modal>
        </StyledItem>)}
    </StyledList>
}