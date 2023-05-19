import {
    StyledDeleteButton
} from '../styled-components/pet-card.styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { services } from '../services'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'

export interface Props {
    id: number
}

export default function DeletePetButton(props: Props) {
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const token = useSelector((store: AppStore) => store.session.token)

    const handleSubmit = async () => {
        const res = await callEndpoint(services.delPet(token, props.id))
        if (res.data) {
            SnackbarUtilities.success('Eliminado')
        } else {
            SnackbarUtilities.error(
                'No pudo eliminarse la mascota, por favor intente más tarde'
                )
        }
    }

    return <StyledDeleteButton
        color='error'
        size='small'
        onClick={handleSubmit}
    >
        <DeleteForeverIcon />
    </StyledDeleteButton>
}