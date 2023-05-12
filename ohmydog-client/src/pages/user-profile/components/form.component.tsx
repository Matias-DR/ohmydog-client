import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    StyledFieldset,
    StyledForm,
    StyledLegend,
    StyledSubmitButton
} from '@/styled-components/form.styled-components'
import { StyledTitle } from '@/styled-components/styled-components'
import { UserInputs } from './'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { ChangeUserData } from '@/pages/user-profile/change-user-data.model'
import { changeUserData } from '@/pages/user-profile/change-user-data.service'
import { useForm } from 'react-hook-form'

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        clearErrors,
        setValue
    } = useForm<ChangeUserData>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()

    const onSubmit = async (data: ChangeUserData) => {
        const res = await callEndpoint(changeUserData(data))
        if (res.data) {
            SnackbarUtilities.success(
                'Datos guardados exitosamente'
            )
        } else {
            SnackbarUtilities.error(
                'Error al guardar los datos, por favor intente más tarde'
            )
        }
    }

    return <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFieldset>
            <StyledLegend>
                <StyledTitle>
                    Datos de perfil
                </StyledTitle>
            </StyledLegend>
            <UserInputs
                register={register}
                errors={errors}
                password={watch('contraseña')}
            ></UserInputs>
        </StyledFieldset>
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