import { StyledItem } from '@/styled-components/pet-card-list.styled-components'
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
import { Pet } from '@/models/pet.model'
import { ViewEditPetForm } from './'
import { useState } from 'react'
import {
    Modal,
    ButtonGroup,
} from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { defaultPetPhoto } from '@/assets/images'

export interface Props {
    pet: Pet,
    index: number,
}

export default function PetCard({ pet }: Props) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return <StyledItem xs={12} sm={6} md={4} lg={3} xl={2}>
        <StyledCard>
            <StyledCardActionArea>
                <StyledImgCard
                    src={pet.photo ? pet.photo : defaultPetPhoto}
                    onClick={handleOpen}
                />
            </StyledCardActionArea>
            <StyledCardContent>
                <StyledTitle>{pet.name}</StyledTitle>
                <StyledText>{pet.caracteristics}</StyledText>
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
                        <DeletePetButton
                            id={pet.id}
                        />
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
                    <ViewEditPetForm
                        pet={pet}
                    />
                </StyledModalCardContainer>
            </StyledModalBackground>
        </Modal>
    </StyledItem>
}