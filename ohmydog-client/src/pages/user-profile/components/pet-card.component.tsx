import { Pet } from '@/models/pet.model'
import { dogExample } from '@/assets/images'
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
import { useEffect, useState } from 'react'
import { filterPetDataAdapter } from '../adapters/filter-pet-data.adapter'

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
    const [image, setImage] = useState<string>()

    const onSubmit = async (data: Pet) => {
        const dataFiltered = filterPetDataAdapter(data)
        const petId = pet.id
        if (petId) {
            const res = await callEndpoint(services.updatePet(
                token,
                dataFiltered,
                petId
            ))
            if (res.data) {
                // GUARDAR LOS DATOS EN REDUX
                SnackbarUtilities.success(
                    'actualizada exitosamente'
                )
            } else {
                // SnackbarUtilities.error(
                //     'Error'
                // )
            }
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
                    src={image ? image : dogExample}
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
                        name: 'nombre',
                        error: errors.nombre,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.race({
                        register,
                        name: 'raza',
                        error: errors.raza,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.color({
                        register,
                        name: 'color',
                        error: errors.color,
                        required: true,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.age({
                        register,
                        name: 'edad',
                        error: errors.edad,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.sex({
                        register,
                        name: 'sexo',
                        error: errors.sexo,
                        clearErrors: clearErrors,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.size({
                        register,
                        name: 'tamaño',
                        error: errors.tamaño,
                        clearErrors: clearErrors,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.weight({
                        register,
                        name: 'peso',
                        error: errors.peso,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.origin({
                        register,
                        name: 'origen',
                        error: errors.origen,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={9}>
                    {PetProfileInputs.caracteristics({
                        register,
                        name: 'caracteristica',
                        error: errors.caracteristica,
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={3}>
                    <ImgUploader
                        name='foto'
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        setImage={setImage}
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