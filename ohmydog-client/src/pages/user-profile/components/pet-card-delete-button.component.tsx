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
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { Modal } from '@mui/material'
import { useState } from 'react'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'
import { delPetById as delPetByIdService } from '../services'

export interface Props {
    id: number,
}

export default function DeletePetButton({ id }: Props) {
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const {
        hasSinglePet,
        delPetById,
        setPetUpdated
    } = useContext(SessionContext)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleSubmit = () => {
        if (!hasSinglePet()) {
            callEndpoint(delPetByIdService(id))
                .then((res) => {
                    delPetById(id)
                    SnackbarUtilities.success('Mascota eliminada')
                    setPetUpdated(true)
                    handleClose()
                })
                .catch((err) => {
                    // SnackbarUtilities.error(err.response.data.message)
                })
        } else SnackbarUtilities.error(
            `No se permite borrar la mascota ya
            que debe poseer al menos una`
        )
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