import { UserProfileInputs } from '@/components'
import {
    StyledGrid,
    StyledGridContainer
} from '@/styled-components/input-frames.styled-components'
import { User } from '@/models/user.model'
import { ChangeUserData } from '@/pages/user-profile/change-user-data.model'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import {
    FieldErrors,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<ChangeUserData>,
    errors: FieldErrors<ChangeUserData>,
    password?: string
}

export default function UserInputs({
    register,
    errors,
    password
}: Props) {
    const user: User = useSelector((store: AppStore) => store.user)
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.name({
                register,
                name: 'nombre',
                disabled: true,
                defaultValue: user.nombre
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.lastname({
                register,
                name: 'apellido',
                disabled: true,
                defaultValue: user.apellido
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.dni({
                register,
                name: 'dni',
                disabled: true,
                defaultValue: user.dni
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.age({
                register,
                name: 'edad',
                disabled: true,
                defaultValue: user.edad
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.email({
                register,
                name: 'email',
                disabled: true,
                defaultValue: user.email
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.celphone({
                register,
                error: errors.telefono,
                name: 'telefono',
                defaultValue: user.telefono,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.password({
                register,
                error: errors.contraseña,
                name: 'contraseña',
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.passwordNew({
                register,
                error: errors.nuevacontraseña,
                name: 'nuevacontraseña',
                password: password
            })}
        </StyledGrid>
    </StyledGridContainer>
}