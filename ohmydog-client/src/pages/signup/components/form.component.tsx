import {
    StyledForm,
    StyledFieldset,
    StyledLegend,
    StyledTitle,
    StyledSubmitButton,
} from '@/styled-components/form.styled-components'
import {
    UserInputs,
    PetInputs
} from './'
import { Signup } from '@/pages/signup/signup.model'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { signup } from '@/pages/signup/signup.service'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { signupDataAdapter } from '../signup-data.adapter'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        clearErrors,
        setValue,
    } = useForm<Signup>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const router = useRouter()

    const onSubmit = async (data: any) => {
        const signupData: Signup = signupDataAdapter(data)
        const res = await callEndpoint(signup(signupData))
        if (res.data) {
            SnackbarUtilities.success(
                'Usuario creado, puede iniciar sesión'
            )
            router.replace('/signin')
        } else if (!res.data) {
            SnackbarUtilities.warning(
                'Correo ya registrado'
            )
        } else {
            SnackbarUtilities.error(
                'Error al crear el usuario, por favor intente más tarde'
            )
        }
    }

    return <StyledForm
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
    >
        <StyledFieldset>
            <StyledLegend>
                <StyledTitle>
                    Datos del usuario
                </StyledTitle>
            </StyledLegend>
            <UserInputs
                register={register}
                errors={errors}
                password={watch('cliente.contraseña')}
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
                clearErrors={clearErrors}
                setValue={setValue}
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