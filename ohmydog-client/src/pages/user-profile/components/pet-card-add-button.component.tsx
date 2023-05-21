import { StyledItem } from '@/styled-components/pet-card-list.styled-components'
import {
    StyledCard,
    StyledCardActionArea,
    StyledModalBackground,
    StyledModalCardContainer,
    StyledModalCloseButtonContainer,
    StyledModalCloseButtonBackground,
    StyledModalCloseButton,
} from '../styled-components/pet-card.styled-components'
import { PetCardAddPetForm } from '.'
import { useState } from 'react'
import { Modal } from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import { StyledAddIcon } from '../styled-components/add-pet.styled-components'

export default function AddButtonPet() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    return <StyledItem xs={12} sm={6} md={4} lg={3} xl={2}>
        <StyledCard>
            <StyledCardActionArea>
                <StyledAddIcon
                    onClick={handleOpen}
                >
                </StyledAddIcon>
            </StyledCardActionArea>
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
                    <PetCardAddPetForm
                        handleClose={handleClose}
                    />
                </StyledModalCardContainer>
            </StyledModalBackground>
        </Modal>
    </StyledItem>
}