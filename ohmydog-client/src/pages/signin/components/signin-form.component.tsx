import {
    StyledForm,
    StyledFieldset,
    StyledSubmitButton,
} from '@/styled-components/form.styled-components'
import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { Credential } from '@/models/auth/credential.model'
import { signin } from '@/pages/signin/signin.service'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'
import { Input } from '@/components'
import { InputType } from '@/components/custom-inputs/input.component'
import { Patterns } from '@/models/patterns.model'

export default function SigninForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Credential>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const router = useRouter()
    const { startSession } = useContext(SessionContext)

    const onSubmit = (data: Credential) => {
        callEndpoint(signin(data))
            .then(res => {
                const {
                    user,
                    pets
                } = res.data
                startSession(
                    user,
                    pets
                )
                router.replace('/home')
            })
            .catch(err => {
                SnackbarUtilities.error(
                    err.response.data.message ?
                        err.response.data.message :
                        'Error al iniciar sesión'
                )
            })
    }

    return <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
        <StyledFieldset>
            <StyledGridContainer container spacing={1}>
                <StyledGrid xs={12}>
                    <Input
                        name='email'
                        label='Correo electrónico'
                        type={InputType.EMAIL}
                        register={register}
                        registerOptions={{
                            required: true,
                            pattern: {
                                value: Patterns.email,
                                message: 'Campo inválido'
                            }
                        }}
                        error={errors.email}
                        required={true}
                    />
                </StyledGrid>
                <StyledGrid xs={12}>
                    <Input
                        name='password'
                        label='Contraseña'
                        type={InputType.PASSWORD}
                        register={register}
                        registerOptions={{ required: true }}
                        error={errors.password}
                        required={true}
                    />
                </StyledGrid>
            </StyledGridContainer>
        </StyledFieldset>
        <StyledSubmitButton
            type='submit'
            variant='contained'
            color='primary'
            loading={loading}
        >
            INICIAR SESIÓN
        </StyledSubmitButton>
    </StyledForm>
}