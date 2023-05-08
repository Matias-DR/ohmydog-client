import {
    StyledForm,
    StyledFieldset,
    StyledSubmitButton,
} from '@/styled-components/form.styled-components'
import { UserInputs } from './'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { dispatchUtility } from '@/utilities/dispatch.utility'
import { Credential } from '@/pages/signin/credential.model'
import { User } from '@/models/user.model'
import { createCredentialAdapter } from '@/pages/signin/create-credential.adapter'
import { signin } from '@/pages/signin/signin.service'
import { Session } from '@/models/session.model'
import { createSessionAdapter, createUserAdapter } from '@/adapters'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

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
    const {
        dispatchCreateUser,
        dispatchCreateSession
    } = dispatchUtility()
    const router = useRouter()

    const onSubmit = async (data: any) => {
        const credential: Credential = createCredentialAdapter(data)
        const res = await callEndpoint(signin(credential))
        const session: Session = createSessionAdapter(res.data)
        // const user: User = createUserAdapter(res.data)
        if (session.token) {
            // dispatchCreateUser(user)
            // dispatchCreateSession(session)
            SnackbarUtilities.success('Sesión iniciada')
            router.replace('/walkers-sitters')
        } else {
            SnackbarUtilities.error('Error al iniciar sesión')
        }
    }

    return <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFieldset>
            <UserInputs
                register={register}
                errors={errors}
            ></UserInputs>
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