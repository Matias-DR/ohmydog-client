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
    StyledViewEditButton,
    StyledDeleteButton,
    StyledModalBackground,
    StyledModalCardContainer,
    StyledModalCloseButtonContainer,
    StyledModalCloseButtonBackground,
    StyledModalCloseButton,
} from '../styled-components/pet-card.styled-components'
import { PetCard } from './'
import { Pet } from '@/models/pet.model'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import {
    Modal,
    ButtonGroup,
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import CloseIcon from '@mui/icons-material/Close'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

export default function PetList() {
    const pets: Pet[] = useSelector((store: AppStore) => store.pets)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',

    return <StyledList container spacing={1}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pet: any, index) => <StyledItem
            xs={12} sm={6} md={4} lg={3} xl={2}
            key={index}
        >
            <StyledCard>
                <StyledCardActionArea>
                    <StyledImgCard
                        height='140'
                        // src={pet.foto}
                        src='https://cloudfront-us-east-2.images.arcpublishing.com/reuters/V46R76J7VBO7DGCHB4CLPOQHSE.jpg'
                        alt='dog-index'
                        onClick={handleOpen}
                    />
                </StyledCardActionArea>
                <StyledCardContent>
                    <StyledTitle>{pet.nombre}nombre</StyledTitle>
                    <StyledText>{pet.caracteristica}caracteristicas...</StyledText>
                    <StyledCardActions>
                        <ButtonGroup
                            variant='outlined'
                        >
                            <StyledViewEditButton
                                size='small'
                                onClick={handleOpen}
                            >
                                Ver / Editar
                            </StyledViewEditButton>
                            <StyledDeleteButton
                                color='error'
                                size='small'
                            >
                                <DeleteForeverIcon />
                            </StyledDeleteButton>
                        </ButtonGroup>
                    </StyledCardActions>
                </StyledCardContent>
            </StyledCard>
            <Modal
                open={open}
                onClose={handleClose}
                hideBackdrop
            >
                <StyledModalBackground
                >
                    <StyledModalCardContainer
                        onClick={() => { }}
                    >
                        <StyledModalCloseButtonContainer>
                            <StyledModalCloseButtonBackground>
                                <StyledModalCloseButton
                                    color='error'
                                    onClick={handleClose}
                                >
                                    <CancelOutlinedIcon
                                        fontSize='large'
                                    />
                                </StyledModalCloseButton>
                            </StyledModalCloseButtonBackground>
                        </StyledModalCloseButtonContainer>
                        <PetCard
                            pet={pet}
                        ></PetCard>
                    </StyledModalCardContainer>
                </StyledModalBackground>
            </Modal>
        </StyledItem>)}
    </StyledList>
}