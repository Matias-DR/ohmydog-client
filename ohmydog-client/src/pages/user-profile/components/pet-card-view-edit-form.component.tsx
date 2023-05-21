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
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { filterPetDataAdapter } from '../adapters/filter-pet-data.adapter'
import { PetCardViewEditInputs } from './'
import { StyledFieldset } from '@/styled-components/form.styled-components'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'

export interface Props {
    pet: Pet
}

export default function PetCardViewEditForm({ pet }: Props) {
    const { updatePet } = useContext(SessionContext)
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
    const token = useSelector((store: AppStore) => store.session.token)

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
            updatePet(res.data)
            SnackbarUtilities.success('Mascota actualizada')
        } else {
            SnackbarUtilities.error(
                'Error al actualizar los datos, por favor intente más tarde'
            )
        }
    }

    useEffect(() => { }, [pet])

    return <StyledForm
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
    >
        {/* ESTE FIELDSET SE AGREGÓ AL FORMULARIO DE LA MASCOTA */}
        <StyledFieldset>
            <PetCardViewEditInputs
                pet={pet}
                register={register}
                errors={errors}
                clearErrors={clearErrors}
                setValue={setValue}
            />
        </StyledFieldset>
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