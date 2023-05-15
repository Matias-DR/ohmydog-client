import { Pet } from '@/models/pet.model'
import {
    StyledForm,
    StyledCardContainer,
    StyledInputsGrid,
    StyledGrid,
    StyledImgGrid,
    StyledSubmitButtonContainer,
    StyledSubmitButtonBackground,
    StyledSubmitButton,
} from '../styled-components/full-pet-card.styled-components'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    useForm
} from 'react-hook-form'
import { ImgUploader, PetProfileInputs } from '@/components'
import { StyledImgCard } from '../styled-components/pet-card.styled-components'
import { } from '@/styled-components/form.styled-components'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { updatePetAdapter } from '@/adapters'
import { services } from '../services'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export interface Props {
    pet: Pet
}

export default function PetCard({
    pet
}: Props) {
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
        const res = await callEndpoint(services.updatePet(token, data))
        if (res.data) {
            SnackbarUtilities.success(
                'Mascota actualizada exitosamente'
            )
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
        <StyledCardContainer
            container
            spacing={1}
        >
            <StyledImgGrid
                container
                xs={12} sm={4} xl={6}
            >
                <StyledImgCard
                    src={pet.foto ? pet.foto : 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/V46R76J7VBO7DGCHB4CLPOQHSE.jpg'}
                ></StyledImgCard>
            </StyledImgGrid>
            <StyledInputsGrid
                container
                spacing={1}
                xs={12} sm={8} xl={6}
            >
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.name({
                        register,
                        name: 'mascota.nombre',
                        error: errors.nombre,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.race({
                        register,
                        name: 'mascota.raza',
                        error: errors.raza,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.color({
                        register,
                        name: 'mascota.color',
                        error: errors.color,
                        required: true,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.age({
                        register,
                        name: 'mascota.edad',
                        error: errors.edad,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.sex({
                        register,
                        name: 'mascota.sexo',
                        error: errors.sexo,
                        clearErrors: clearErrors,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.size({
                        register,
                        name: 'mascota.tamaño',
                        error: errors.tamaño,
                        clearErrors: clearErrors,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.weight({
                        register,
                        name: 'mascota.peso',
                        error: errors.peso,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.origin({
                        register,
                        name: 'mascota.origen',
                        error: errors.origen,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={9}>
                    {PetProfileInputs.caracteristics({
                        register,
                        name: 'mascota.caracteristica',
                        error: errors.caracteristica,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={3}>
                    <ImgUploader
                        register={register}
                        errors={errors}
                        setValue={setValue}
                    ></ImgUploader>
                </StyledGrid>
            </StyledInputsGrid>
        </StyledCardContainer>
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