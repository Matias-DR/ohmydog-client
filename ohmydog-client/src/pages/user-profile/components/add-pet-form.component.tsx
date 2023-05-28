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
import { Datepicker, ImgUploader } from '@/components'
import {
    Input,
    InputType
} from '@/components/custom-inputs/input.component'
import { StyledImgCard } from '../styled-components/pet-card.styled-components'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'
import { addPet as addPetService } from '../services'
import { Select } from '@/components'
import dogRaces from '@/lib/dog-races'
import { Patterns } from '@/models/patterns.model'
import dayjs from 'dayjs'

export interface Props {
    handleClose: () => void,
}

export default function AddPetForm({ handleClose }: Props) {
    const {
        addPet,
        setPetUpdated
    } = useContext(SessionContext)
    const {
        register,
        trigger,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        clearErrors,
        getValues
    } = useForm<Pet>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()

    const onSubmit = (data: Pet) => {
        callEndpoint(addPetService(data))
            .then((res) => {
                const newPet = res.data
                addPet(newPet)
                SnackbarUtilities.success('Mascota añadida')
                setPetUpdated(true)
                handleClose()
            })
            .catch((err) => SnackbarUtilities.error(err.response.data.message))
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
                    src={getValues('photo')}
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
                        defaultValue='ejemplo'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            pattern: {
                                value: Patterns.name,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors?.name}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Select
                        name='race'
                        label='Raza'
                        required={true}
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
                        defaultValue='ejemplo'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            pattern: {
                                value: Patterns.name,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors?.color}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Datepicker
                        name='birthdate'
                        label='Fecha de nacimiento'
                        defaultValue={dayjs(
                            new Date().toLocaleDateString(),
                            'M/D/YYYY'
                        )}
                        setValue={setValue}
                        required
                        register={register}
                        trigger={trigger}
                        error={errors?.birthdate}
                        past={true}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Select
                        name='sex'
                        label='Sexo'
                        required
                        register={register}
                        trigger={trigger}
                        error={errors?.sex}
                        registerOptions={{
                            validate: (value) => {
                                if (['Hembra', 'Macho']
                                    .includes(value))
                                    return true
                                else
                                    return 'Campo inválido'
                            }
                        }}
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
                        register={register}
                        trigger={trigger}
                        error={errors?.size}
                        registerOptions={{
                            validate: (value) => {
                                if (['Chico', 'Mediano', 'Grande']
                                    .includes(value))
                                    return true
                                else
                                    return 'Campo inválido'
                            }
                        }}
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
                        defaultValue={1}
                        required
                        inputProps={{ step: '0.1' }}
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            pattern: {
                                value: Patterns.weight,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors?.weight}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Input
                        name='origin'
                        label='Origen'
                        defaultValue='ejemplo'
                        type={InputType.TEXT}
                        register={register}
                        trigger={trigger}
                        error={errors?.origin}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={9}>
                    <Input
                        name='caracteristics'
                        label='Características'
                        defaultValue='ejemplo'
                        type={InputType.TEXT}
                        register={register}
                        trigger={trigger}
                        error={errors?.caracteristics}
                        multiline
                        rows={4}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={3}>
                    <ImgUploader
                        name={'photo'}
                        required
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