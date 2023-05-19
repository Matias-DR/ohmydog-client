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
    StyledModalBackground,
    StyledModalCardContainer,
    StyledModalCloseButtonContainer,
    StyledModalCloseButtonBackground,
    StyledModalCloseButton,
} from '../styled-components/pet-card.styled-components'
import { DeletePetButton } from './'
import { AddPet, PetCard } from './'
import { Pet } from '@/models/pet.model'
import { dogExample } from '@/assets/images'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import {
    Modal,
    ButtonGroup,
} from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

export default function PetList() {
    const pets: Pet[] = useSelector((store: AppStore) => store.pets)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    return <StyledList container spacing={1}>
        <AddPet></AddPet>
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pet: any, index) => <StyledItem */}
        {pets.map((pet: any, index) => <StyledItem
            xs={12} sm={6} md={4} lg={3} xl={2}
            key={index}
        >
            <StyledCard>
                <StyledCardActionArea>
                    <StyledImgCard
                        src={pet.foto ? pet.foto : dogExample}
                        alt={'dog-image-' + index.toString()}
                        onClick={handleOpen}
                    />
                </StyledCardActionArea>
                <StyledCardContent>
                    <StyledTitle>{pet.nombre}</StyledTitle>
                    <StyledText>{pet.caracteristica}</StyledText>
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
                            <DeletePetButton id={pet.id}/>
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