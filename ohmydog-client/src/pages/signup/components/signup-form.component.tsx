import {
    StyledForm,
    StyledFieldset,
    StyledLegend,
    StyledTitle,
    StyledSubmitButton,
} from '@/styled-components/form.styled-components'
import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import {
    Input,
    InputType
} from '@/components/custom-inputs/input.component'
import { Datepicker } from '@/components'
import { Select, ImgUploader } from '@/components'
import { Patterns } from '@/models/patterns.model'
import { Signup } from '@/models/auth/signup.model'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { signup } from '@/pages/signup/signup.service'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

export default function SignupForm() {
    const {
        register,
        trigger,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<Signup>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const router = useRouter()

    const onSubmit = (data: any) => {
        callEndpoint(signup(data))
            .then(res => {
                SnackbarUtilities.success(res.data.message)
                router.replace('/signin')
            })
            .catch(err => SnackbarUtilities.error(
                err.response.data.message ?
                    err.response.data.message :
                    'Error de conexión, por favor intente más tarde'
            ))
    }

    return <StyledForm
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
    >
        <StyledFieldset>
            <StyledLegend>
                <StyledTitle>
                    Datos del usuario
                </StyledTitle>
            </StyledLegend>
            <StyledGridContainer container spacing={1}>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='user.name'
                        label='Nombre'
                        type={InputType.TEXT}
                        defaultValue='ejemplo'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.name,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.user?.name}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='user.lastname'
                        label='Apellido'
                        type={InputType.TEXT}
                        defaultValue='uno'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.name,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.user?.lastname}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='user.dni'
                        label='DNI'
                        type={InputType.NUMBER}
                        defaultValue={12312312}
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.dni,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.user?.dni}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Datepicker
                        name='user.birthdate'
                        label='Fecha de nacimiento'
                        defaultValue={dayjs(
                            new Date().toLocaleDateString(),
                            'M/D/YYYY'
                        )}
                        setValue={setValue}
                        required
                        register={register}
                        trigger={trigger}
                        error={errors.user?.birthdate}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='user.email'
                        label='Email'
                        type={InputType.EMAIL}
                        defaultValue='ejemplo@uno.com'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.email,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.user?.email}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='user.celphone'
                        label='Teléfono'
                        type={InputType.TEXT}
                        defaultValue='12312312312'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.celphone,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.user?.celphone}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='user.password'
                        label='Contraseña'
                        type={InputType.PASSWORD}
                        defaultValue='Ejemplo123!'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.password,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.user?.password}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='user.passwordconfirm'
                        label='Confirmar contraseña'
                        type={InputType.PASSWORD}
                        defaultValue='Ejemplo123!'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.password,
                                message: 'Campo inválido'
                            },
                            validate: (value: string) => value === watch('user.password')
                                || 'Las contraseñas no coinciden'
                        }}
                        error={errors.user?.passwordconfirm}
                    />
                </StyledGrid>
            </StyledGridContainer >
        </StyledFieldset>
        <StyledFieldset>
            <StyledLegend>
                <StyledTitle>
                    Datos de la mascota
                </StyledTitle>
            </StyledLegend>
            <StyledGridContainer container spacing={1}>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='pet.name'
                        label='Nombre'
                        type={InputType.TEXT}
                        defaultValue='ejemplo'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.name,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.pet?.name}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='pet.race'
                        label='Raza'
                        type={InputType.TEXT}
                        defaultValue='ejemplo'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.name,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.pet?.race}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='pet.color'
                        label='Color'
                        type={InputType.TEXT}
                        defaultValue='ejemplo'
                        required
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.name,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.pet?.color}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Datepicker
                        name='pet.birthdate'
                        label='Fecha de nacimiento'
                        defaultValue={dayjs(
                            new Date().toLocaleDateString(),
                            'M/D/YYYY'
                        )}
                        setValue={setValue}
                        required
                        register={register}
                        trigger={trigger}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Select
                        name='pet.sex'
                        label='Sexo'
                        required
                        register={register}
                        trigger={trigger}
                        error={errors.pet?.sex}
                        registerOptions={{
                            required: true,
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
                <StyledGrid xs={12} sm={6} md={3}>
                    <Select
                        name='pet.size'
                        label='Tamaño'
                        required
                        register={register}
                        trigger={trigger}
                        error={errors.pet?.size}
                        registerOptions={{
                            required: true,
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
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='pet.weight'
                        label='Peso'
                        type={InputType.NUMBER}
                        defaultValue={1}
                        required
                        inputProps={{ step: '0.1' }}
                        register={register}
                        trigger={trigger}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.weight,
                                message: 'Campo inválido'
                            },
                        }}
                        error={errors.pet?.weight}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={6} md={3}>
                    <Input
                        name='pet.origin'
                        label='Origen'
                        defaultValue='ejemplo'
                        type={InputType.TEXT}
                        register={register}
                        trigger={trigger}
                        error={errors.pet?.origin}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={9}>
                    <Input
                        name='pet.caracteristics'
                        label='Características'
                        defaultValue='ejemplo'
                        type={InputType.TEXT}
                        register={register}
                        trigger={trigger}
                        error={errors.pet?.caracteristics}
                        multiline
                        rows={4}
                    />
                </StyledGrid>
                <StyledGrid xs={12} sm={3}>
                    <ImgUploader
                        name={'pet.photo'}
                        register={register}
                        trigger={trigger}
                        error={errors.pet?.photo}
                        setValue={setValue}
                        value={watch('pet.photo')}
                    ></ImgUploader>
                </StyledGrid>
            </StyledGridContainer>
        </StyledFieldset>
        <StyledSubmitButton
            type='submit'
            variant='contained'
            color='primary'
            loading={loading}
        >
            Registrarse
        </StyledSubmitButton>
    </StyledForm>
}