import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    StyledFieldset,
    StyledForm,
    StyledLegend,
    StyledTitle,
    StyledSubmitButton
} from '@/styled-components/form.styled-components'
import { UserInputs } from './'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { ChangeUserData } from '@/pages/user-profile/change-user-data.model'
import { services } from '../services'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger
    } = useForm<ChangeUserData>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const token = useSelector((state: AppStore) => state.session.token)
    const user = useSelector((state: AppStore) => state.user)
    const [password, setPassword] = useState<string>()

    const onSubmit = async (data: ChangeUserData) => {
        const res = await callEndpoint(services.changeUserData(token, data))
        if (res.data.errors) {
            const error = res.data.errors.response.data
            if (error === 'Contraseña incorrecta') {
                trigger('contraseña')
            }
            else if (error === 'No coincide con la contraseña actual') {
                trigger('nuevacontraseña')
            }
            SnackbarUtilities.error(
                'Error al guardar los datos, revise los campos'
            )
        }
        else {
            SnackbarUtilities.warning('Datos guardados')
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
                password={password}
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