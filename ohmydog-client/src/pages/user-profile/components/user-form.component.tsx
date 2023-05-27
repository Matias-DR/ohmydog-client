import {
    updateUser as updateUserService
} from '../services'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    StyledFieldset,
    StyledForm,
    StyledLegend,
    StyledTitle,
    StyledSubmitButton
} from '@/styled-components/form.styled-components'
import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import {
    Input,
    InputType
} from '@/components/custom-inputs/input.component'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { UpdateUser } from '@/models/update-data/update-user.model'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'
import { Datepicker } from '@/components'
import { Patterns } from '@/models/patterns.model'
import dayjs from 'dayjs'

export default function UserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        watch
    } = useForm<UpdateUser>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const {
        getUser,
        updateUser
    } = useContext(SessionContext)
    const user = getUser()

    const onSubmit = (data: UpdateUser) => {
        callEndpoint(updateUserService(data))
            .then((res) => {
                updateUser(data.password)
                SnackbarUtilities.success(res.data.message)
            })
            .catch((err) => SnackbarUtilities.error(err.response.data.message))
    }

    return <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        noValidate
    ><StyledGridContainer
        container
        sx={{ alignItems: 'flex-start !important' }}
    >
            <StyledGrid xs={12} md={9}>
                <StyledFieldset>
                    <StyledLegend>
                        <StyledTitle>
                            Datos de perfil
                        </StyledTitle>
                    </StyledLegend>
                    <StyledGridContainer container spacing={1}>
                        <StyledGrid xs={12} sm={6} md={6}>
                            <Input
                                name='name'
                                label='Nombre'
                                type={InputType.TEXT}
                                defaultValue={user.name}
                                disabled
                            />
                        </StyledGrid>
                        <StyledGrid xs={12} sm={6} md={6}>
                            <Input
                                name='lastname'
                                label='Apellido'
                                type={InputType.TEXT}
                                defaultValue={user.lastname}
                                disabled
                            />
                        </StyledGrid>
                        <StyledGrid xs={12} sm={6} md={6}>
                            <Input
                                name='dni'
                                label='DNI'
                                type={InputType.NUMBER}
                                defaultValue={user.dni}
                                required
                                disabled
                            />
                        </StyledGrid>
                        <StyledGrid xs={12} sm={6} md={6}>
                            <Datepicker
                                name='birthdate'
                                label='Fecha de nacimiento'
                                defaultValue={dayjs(
                                    user.birthdate,
                                    'D/M/YYYY'
                                )}
                                disabled
                            />
                        </StyledGrid>
                        <StyledGrid xs={12} sm={6} md={6}>
                            <Input
                                name='email'
                                label='Email'
                                type={InputType.EMAIL}
                                defaultValue={user.email}
                                disabled
                            />
                        </StyledGrid>
                        <StyledGrid xs={12} sm={6} md={6}>
                            <Input
                                name='celphone'
                                label='Teléfono'
                                type={InputType.TEXT}
                                defaultValue={user.celphone}
                                required
                                disabled
                            />
                        </StyledGrid>
                    </StyledGridContainer>
                </StyledFieldset>
            </StyledGrid>
            <StyledGrid xs={12} md={3}>
                <StyledFieldset>
                    <StyledLegend>
                        <StyledTitle>
                            Cambiar contraseña
                        </StyledTitle>
                    </StyledLegend>
                    <StyledGridContainer container spacing={1}>
                        <StyledGrid xs={12}>
                            <Input
                                name='password'
                                label='Contraseña actual'
                                type={InputType.PASSWORD}
                                required={true}
                                register={register}
                                trigger={trigger}
                                registerOptions={{ required: true }}
                                error={errors?.password}
                            />
                        </StyledGrid>
                        <StyledGrid xs={12}>
                            <Input
                                name='passwordnew'
                                label='Nueva contraseña'
                                type={InputType.PASSWORD}
                                register={register}
                                trigger={trigger}
                                registerOptions={{
                                    required: true,
                                    pattern: {
                                        value: Patterns.password,
                                        message: `La contraseña debe contener
                                        al menos 8 caracteres compuestos por un
                                        mínimo de una mayúscula, una minúscula,
                                        un número y un caracter especial`
                                    },
                                    validate: (value: string) => {
                                        if (value === watch('password'))
                                            return 'No debe ser igual a la actual'
                                        else return true
                                    }
                                }}
                                error={errors?.passwordnew}
                            />
                        </StyledGrid>
                        <StyledGrid xs={12}>
                            <Input
                                name='passwordconfirmation'
                                label='Confirmar contraseña'
                                type={InputType.PASSWORD}
                                register={register}
                                trigger={trigger}
                                registerOptions={{
                                    required: true,
                                    validate: (value: string) => {
                                        if (value !== watch('passwordnew'))
                                            return 'Debe ser igual a la nueva'
                                        else return true
                                    }
                                }}
                                error={errors?.passwordconfirmation}
                            />
                        </StyledGrid>
                    </StyledGridContainer>
                </StyledFieldset>
            </StyledGrid>
        </StyledGridContainer>
        <StyledSubmitButton
            type='submit'
            variant='contained'
            color='primary'
            loading={loading}
        >
            Guardar datos
        </StyledSubmitButton>
    </StyledForm>
}