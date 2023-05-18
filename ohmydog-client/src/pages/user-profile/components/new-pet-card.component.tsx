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

export default function NewPetCard() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        setValue,
        getValues
    } = useForm<Pet>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const token = useSelector((store: AppStore) => store.session.token)
    const [image, setImage] = useState<string>()

    const onSubmit = async (data: Pet) => {
        console.log('ESTA ES LA DATA QUE SE ENVIA A MI SV', data)
        const res = await callEndpoint(services.newPet(token, data))
        if (res.data) {
            SnackbarUtilities.success(
                'Mascota añadida'
            )
        } else {
            SnackbarUtilities.error(
                'Error al añadir la mascota, por favor intente más tarde'
            )
        }
    }

    useEffect(() => {
    }, [getValues('foto')])

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
                    src={image}
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
                        defaultValue: '',
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.race({
                        register,
                        name: 'raza',
                        error: errors.raza,
                        defaultValue: '',
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.color({
                        register,
                        name: 'color',
                        error: errors.color,
                        required: true,
                        defaultValue: '',
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.age({
                        register,
                        name: 'edad',
                        error: errors.edad,
                        defaultValue: '',
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.sex({
                        register,
                        name: 'sexo',
                        error: errors.sexo,
                        clearErrors: clearErrors,
                        defaultValue: '',
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.size({
                        register,
                        name: 'tamaño',
                        error: errors.tamaño,
                        clearErrors: clearErrors,
                        defaultValue: '',
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.weight({
                        register,
                        name: 'peso',
                        error: errors.peso,
                        defaultValue: '',
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    {PetProfileInputs.origin({
                        register,
                        name: 'origen',
                        error: errors.origen,
                        defaultValue: '',
                    })}
                </StyledGrid>
                <StyledGrid xs={12} sm={9}>
                    {PetProfileInputs.caracteristics({
                        register,
                        name: 'caracteristica',
                        error: errors.caracteristica,
                        defaultValue: '',
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