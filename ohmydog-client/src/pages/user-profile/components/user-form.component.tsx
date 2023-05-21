import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    StyledFieldset,
    StyledForm,
    StyledLegend,
    StyledTitle,
    StyledSubmitButton
} from '@/styled-components/form.styled-components'
import { UserInputs } from '.'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { ChangeUserData } from '@/pages/user-profile/change-user-data.model'
import { services } from '../services'
import { AppStore } from '@/redux/store'
import { filterDataAdapter } from '../adapters/filter-user-data.adapte'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { dispatchUtility } from '@/utilities/dispatch.utility'

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
    const { dispatchUpdateUser } = dispatchUtility()

    const onSubmit = async (data: ChangeUserData) => {
        const dataFiltered = filterDataAdapter(data)
        const res = await callEndpoint(services.changeUserData(
            token,
            dataFiltered
        ))
        if (res.data) {
            const message = res.data
            if (message === 'Contraseña incorrecta') {
                trigger('contraseña')
                SnackbarUtilities.warning('Contraseña incorrecta')
            }
            else if (message === 'Coincide con la contraseña actual') {
                trigger('nuevacontraseña')
                SnackbarUtilities.warning('Coincide con la contraseña actual')
            }
            else if (message === 'Datos guardados') {
                SnackbarUtilities.error(
                    'Error al guardar los datos, revise los campos'
                )
            }
        }
        else {
            dispatchUpdateUser(dataFiltered)
            SnackbarUtilities.success('Datos guardados')
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