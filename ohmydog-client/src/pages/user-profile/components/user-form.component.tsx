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
import { filterDataAdapter } from '../adapters/filter-user-data.adapte'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { SessionContext } from '@/contexts/session.context'

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
    const {
        token,
        updateUser,
        user
    } = useContext(SessionContext)

    const onSubmit = async (data: ChangeUserData) => {
        const dataFiltered = filterDataAdapter(data)
        const res = await callEndpoint(services.changeUserData(
            token,
            dataFiltered
        ))
        if (res.data) {
            const message = res.data
            if ([
                'Contraseña incorrecta',
                'Coincide con la contraseña actual'
            ].includes(message)) {
                SnackbarUtilities.warning(message)
                if (message === 'Coincide con la contraseña actual') {
                    trigger('contraseña')
                } else {
                    trigger('nuevacontraseña')
                }
            }
            else if (message === 'Datos guardados') {
                updateUser(dataFiltered)
                SnackbarUtilities.success(message)
            }
        }
        else {
            SnackbarUtilities.error(
                'Error de conexión, por favor intente más tarde'
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
                password={user.contraseña}
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