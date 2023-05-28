import { Pet } from '@/models/pet.model'
import {
    StyledForm,
    StyledSubmitButtonContainer,
    StyledSubmitButtonBackground,
    StyledSubmitButton,
    StyledCardContainer,
    StyledImgGrid,
    StyledInputsGrid,
    StyledGrid,
} from '../styled-components/full-pet-card.styled-components'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    Input,
    InputType
} from '@/components/custom-inputs/input.component'
import {
    useForm
} from 'react-hook-form'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { SessionContext } from '@/contexts/session.context'
import { useContext, useEffect } from 'react'
import { updatePet as updatePetService } from '../services'
import { StyledImgCard } from '../styled-components/pet-card.styled-components'
import { Datepicker, ImgUploader, Select } from '@/components'
import dogRaces from '@/lib/dog-races'
import dayjs from 'dayjs'

export interface Props {
    pet: Pet
}

export default function ViewEditPetForm({ pet }: Props) {
    const {
        updatePet,
        setPetUpdated
    } = useContext(SessionContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        clearErrors
    } = useForm<Pet>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()

    const onSubmit = (data: Pet) => {
        const newPet = { ...data, id: pet.id }
        callEndpoint(updatePetService(newPet))
            .then((res) => {
                updatePet(newPet)
                SnackbarUtilities.success('Mascota actualizada')
                setPetUpdated(true)
            })
            .catch((err) => SnackbarUtilities.error(err.response.data.message))
    }

    useEffect(() => {}, [pet.photo])

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
                    src={watch('photo') ? watch('photo') : pet.photo}
                ></StyledImgCard>
            </StyledImgGrid>
            <StyledInputsGrid
                container
                spacing={1}
                xs={12} sm={8} xl={6}
            >
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Input
                        name='name'
                        label='Nombre'
                        type={InputType.TEXT}
                        required
                        defaultValue={pet.name}
                        register={register}
                        registerOptions={{ required: true }}
                        error={errors?.name}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Select
                        name='race'
                        label='Raza'
                        required
                        defaultValue={pet.race ? {
                            value: pet.race,
                            label: pet.race
                        } : undefined}
                        register={register}
                        registerOptions={{
                            required: true,
                            validate: (value: string) => {
                                if (dogRaces.includes(value))
                                    return true
                                else
                                    return 'Campo inválido'
                            }
                        }}
                        error={errors?.race}
                        options={dogRaces.map(dogRace => {
                            return {
                                value: dogRace,
                                label: dogRace
                            }
                        })}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Input
                        name='color'
                        label='Color'
                        type={InputType.TEXT}
                        required
                        defaultValue={pet.color}
                        register={register}
                        registerOptions={{ required: true }}
                        error={errors?.color}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Datepicker
                        name='birthdate'
                        label='Fecha de nacimiento'
                        defaultValue={dayjs(
                            pet.birthdate,
                            'D/M/YYYY'
                        )}
                        setValue={setValue}
                        required
                        register={register}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Select
                        name='sex'
                        label='Sexo'
                        required
                        defaultValue={pet.sex ?
                            { value: pet.sex, label: pet.sex }
                            : undefined}
                        register={register}
                        registerOptions={{
                            required: true,
                            validate: (value: string) => {
                                if (['Hembra', 'Macho']
                                    .includes(value))
                                    return true
                                else
                                    return 'Campo inválido'
                            }
                        }}
                        error={errors?.sex}
                        options={[
                            { value: 'Hembra', label: 'Hembra' },
                            { value: 'Macho', label: 'Macho' }
                        ]}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Select
                        name='size'
                        label='Tamaño'
                        required
                        defaultValue={pet.size ?
                            { value: pet.size, label: pet.size }
                            : undefined}
                        register={register}
                        registerOptions={{
                            required: true,
                            validate: (value: string) => {
                                if (['Chico', 'Mediano', 'Grande']
                                    .includes(value))
                                    return true
                                else
                                    return 'Campo inválido'
                            }
                        }}
                        error={errors?.size}
                        options={[
                            { value: 'Chico', label: 'Chico' },
                            { value: 'Mediano', label: 'Mediano' },
                            { value: 'Grande', label: 'Grande' }
                        ]}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Input
                        name='weight'
                        label='Peso'
                        type={InputType.NUMBER}
                        required
                        defaultValue={pet.weight}
                        register={register}
                        registerOptions={{ required: true }}
                        error={errors?.weight}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Input
                        name='origin'
                        label='Origen'
                        type={InputType.TEXT}
                        required
                        defaultValue={pet.origin}
                        register={register}
                        registerOptions={{ required: true }}
                        error={errors?.origin}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={9}>
                    <Input
                        name='caracteristics'
                        label='Características'
                        type={InputType.TEXT}
                        required
                        defaultValue={pet.caracteristics}
                        register={register}
                        registerOptions={{ required: true }}
                        error={errors?.caracteristics}
                        multiline
                        rows={4}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={3}>
                    <ImgUploader
                        name={'photo'}
                        register={register}
                        error={errors?.photo}
                        setValue={setValue}
                        value={watch('photo')}
                        clearErrors={clearErrors}
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