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
import { useContext } from 'react'
import { updatePet as updatePetService } from '../services'
import { StyledImgCard } from '../styled-components/pet-card.styled-components'
import { Datepicker, ImgUploader, Select } from '@/components'
import dogRaces from '@/lib/dog-races'
import dayjs from 'dayjs'

export interface Props {
    pet: Pet
}

export default function ViewEditPetForm({ pet }: Props) {
    const { updatePet } = useContext(SessionContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<Pet>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    console.log(pet)

    const onSubmit = (data: Pet) => {
        callEndpoint(updatePetService(data))
            .then((res) => {
                updatePet(data)
                SnackbarUtilities.success('Mascota actualizada')
            })
            .catch((err) => SnackbarUtilities.error(
                'Error al actualizar los datos, por favor intente más tarde'
            ))
    }

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
                    src={pet.photo ? pet.photo : undefined}
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
                        required={true}
                        defaultValue={pet.name}
                        disabled
                        register={register}
                        registerOptions={{ required: true }}
                        error={errors?.name}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Select
                        name='race'
                        label='Raza'
                        required={true}
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
                        required={true}
                        defaultValue={pet.color}
                        disabled
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
                        required={true}
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
                        required={true}
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
                        required={true}
                        defaultValue={pet.weight}
                        disabled
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
                        required={true}
                        defaultValue={pet.origin}
                        disabled
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
                        required={true}
                        defaultValue={pet.caracteristics}
                        disabled
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
                        defaultValue={pet.photo ? pet.photo : undefined}
                        register={register}
                        error={errors?.photo}
                        setValue={setValue}
                        value={watch('photo')}
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