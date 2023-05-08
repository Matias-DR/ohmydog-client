import {
    StyledForm,
    StyledFieldset,
    StyledLegend,
    StyledSubmitButton,
} from '@/styled-components/form.styled-components'
import { StyledTitle } from '@/styled-components/styled-components'
import {
    UserInputs,
    PetInputs
} from './'
import { User } from '@/models/user.model'
import { Pet } from '@/models/pet.model'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { dispatchUtility } from '@/utilities/dispatch.utility'
import { signup } from '@/pages/signup/signup.service'
import { Signup } from '@/pages/signup/signup.model'
import { createSignupAdapter } from '@/pages/signup/create-signup.adapter'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export interface FormProps {
    user: User,
    pet: Pet
}

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<FormProps>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const router = useRouter()

    const onSubmit = async (data: any) => {
        const body: Signup = createSignupAdapter(data)
        const res = await callEndpoint(signup(body))
        if (res.status === 200) {
            SnackbarUtilities.success('Usuario creado')
            router.replace('/signin')
        } else {
            SnackbarUtilities.error('Error al crear el usuario')
        }
    }

    return <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFieldset>
            <StyledLegend>
                <StyledTitle>
                    Datos del usuario
                </StyledTitle>
            </StyledLegend>
            <UserInputs
                register={register}
                errors={errors}
                password={watch('user.contraseña')}
            ></UserInputs>
        </StyledFieldset>
        <StyledFieldset>
            <StyledLegend>
                <StyledTitle>
                    Datos de la mascota
                </StyledTitle>
            </StyledLegend>
            <PetInputs
                register={register}
                errors={errors}
            ></PetInputs>
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