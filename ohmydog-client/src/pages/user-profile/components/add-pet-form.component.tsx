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

export interface Props {
    handleClose: () => void,
}

export default function AddPetForm({ handleClose }: Props) {
    const { addPet } = useContext(SessionContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        getValues,
        trigger
    } = useForm<Pet>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()

    const onSubmit = (data: Pet) => {
        callEndpoint(addPetService(data))
            .then((res) => {
                addPet(data)
                SnackbarUtilities.success('Mascota añadida')
                handleClose()
            })
            .catch((err) => {
                SnackbarUtilities.error(
                    'Error al añadir la mascota, por favor intente más tarde'
                )
            })
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
                        required={true}
                        disabled
                        register={register}
                        trigger={trigger}
                        registerOptions={{ required: true }}
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
                        trigger={trigger}
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
                        disabled
                        register={register}
                        trigger={trigger}
                        registerOptions={{ required: true }}
                        error={errors?.color}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Datepicker
                        name='birthdate'
                        label='Fecha de nacimiento'
                        setValue={setValue}
                        required
                        register={register}
                        trigger={trigger}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} xl={3}>
                    <Select
                        name='sex'
                        label='Sexo'
                        required={true}
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
                        trigger={trigger}
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
                        trigger={trigger}
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
                        disabled
                        register={register}
                        trigger={trigger}
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
                        disabled
                        register={register}
                        trigger={trigger}
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
                        disabled
                        register={register}
                        trigger={trigger}
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
                        trigger={trigger}
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