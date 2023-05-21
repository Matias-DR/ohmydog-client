import { Pet } from '@/models/pet.model'
import {
    StyledForm,
    StyledSubmitButtonContainer,
    StyledSubmitButtonBackground,
    StyledSubmitButton,
} from '../styled-components/full-pet-card.styled-components'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    useForm
} from 'react-hook-form'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { services } from '../services'
import { filterPetDataAdapter } from '../adapters/filter-pet-data.adapter'
import { PetCardViewEditInputs } from './'
import { SessionContext } from '@/contexts/session.context'
import { createPetAdapter } from '@/adapters'
import { useContext } from 'react'

export interface Props {
    pet: Pet
}

export default function PetCardViewEditForm({ pet }: Props) {
    const {
        token,
        updatePet
    } = useContext(SessionContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        setValue,
    } = useForm<Pet>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()

    const onSubmit = async (data: Pet) => {
        const updatedPet = filterPetDataAdapter({
            ...data,
            id: pet.id
        })
        const res = await callEndpoint(services.updatePet(
            token,
            updatedPet
        ))
        if (res.data) {
            updatePet(createPetAdapter(res.data))
            SnackbarUtilities.success('Mascota actualizada')
        } else {
            SnackbarUtilities.error(
                'Error al actualizar los datos, por favor intente más tarde'
            )
        }
    }

    return <StyledForm
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
    >
        <PetCardViewEditInputs
            pet={pet}
            register={register}
            errors={errors}
            clearErrors={clearErrors}
            setValue={setValue}
        />
        <StyledSubmitButtonContainer>
            <StyledSubmitButtonBackground>
                <StyledSubmitButton
                    type='submit'
                    variant='contained'
                    color='primary'
                    loading={loading}
                >
                    Guardar datos
                </StyledSubmitButton>
            </StyledSubmitButtonBackground>
        </StyledSubmitButtonContainer>
    </StyledForm>
}