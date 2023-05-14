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
import { useEffect, useState } from 'react'

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ChangeUserData>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const [currentPassword, setCurrentPassword] = useState<any>()
    const token = useSelector((state: AppStore) => state.session.token)

    const onSubmit = async (data: ChangeUserData) => {
        const res = await callEndpoint(services.changeUserData(token, data))
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

    useEffect(() => {
        callEndpoint(services.getPassword(token))
            .then(res => {
                setCurrentPassword(res.data)
            })
            .catch(() => {
                setCurrentPassword('')
                SnackbarUtilities.error(
                    `Error al recuperar los datos. Si desea actualizar los
                    datos, por favor intente más tarde`
                )
            })
    }, [])

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
                password={currentPassword}
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