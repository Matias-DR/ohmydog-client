import {
    StyledForm,
    StyledFieldset,
    StyledSubmitButton,
} from '@/styled-components/form.styled-components'
import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import { CredentialInputs } from './credential-inputs.component'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { Credential } from '@/pages/signin/credential.model'
import { signin } from '@/pages/signin/signin.service'
import {
    createPetsAdapter,
    createSessionAdapter,
    createUserAdapter
} from '@/adapters'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'

export default function Form() {
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

    const onSubmit = async (data: Credential) => {
        const res = await callEndpoint(signin(data))
        if (res) {
            startSession(
                createSessionAdapter(res.data),
                createUserAdapter(res.data),
                createPetsAdapter(res.data)
            )
            router.replace('/home')
        } else {
            SnackbarUtilities.error('Error al iniciar sesión')
        }
    }

    return <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
        <StyledFieldset>
            <StyledGridContainer container spacing={1}>
                <StyledGrid xs={12}>
                    {CredentialInputs.email({ register, errors })}
                </StyledGrid>
                <StyledGrid xs={12}>
                    {CredentialInputs.password({ register, errors })}
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