import {
    StyledDeleteButton,
    StyledModalBackground
} from '../styled-components/pet-card.styled-components'
import {
    StyledModalWhiteBackground,
    StyledConfirmText,
    StyledModalContentContainer,
    StyledButtonsContainer,
    StyledConfirmButton
} from '../styled-components/delete-pet-button.styled-component'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { services } from '../services'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { Modal } from '@mui/material'
import { useState } from 'react'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'

export interface Props {
    id: number,
}

export default function DeletePetButton({ id }: Props) {
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const {
        delPet,
        hasSinglePet,
        token
    } = useContext(SessionContext)
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const handleSubmit = async () => {
        handleClose()
        if (hasSinglePet()) {
            const res = await callEndpoint(services.delPet(token, id))
            if (res.data) {
                delPet(id)
                SnackbarUtilities.success('Mascota eliminada')
            } else {
                SnackbarUtilities.error(
                    'Error de conexión, por favor intente más tarde'
                )
            }
        } else {
            SnackbarUtilities.error(
                'Debe poseer al menos una mascota'
            )
        }
    }

    return <>
        <StyledDeleteButton
            color='error'
            size='small'
            onClick={handleOpen}
        >
            <DeleteForeverIcon />
        </StyledDeleteButton>
        <Modal
            open={open}
            onClose={handleClose}
            hideBackdrop
        >
            <StyledModalBackground
            >
                <StyledModalWhiteBackground>
                    <StyledModalContentContainer>
                        <StyledConfirmText>
                            Está seguro que desea eliminarlo?
                        </StyledConfirmText>
                        <StyledButtonsContainer>
                            <StyledConfirmButton
                                onClick={handleSubmit}
                            >Si</StyledConfirmButton>
                            <StyledConfirmButton
                                onClick={handleClose}
                            >No</StyledConfirmButton>
                        </StyledButtonsContainer>
                    </StyledModalContentContainer>
                </StyledModalWhiteBackground>
            </StyledModalBackground>
        </Modal>
    </>
}