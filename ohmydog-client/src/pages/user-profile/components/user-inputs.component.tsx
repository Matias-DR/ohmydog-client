import { UserProfileInputs } from '@/components'
import {
    StyledGrid,
    StyledGridContainer
} from '@/styled-components/input-frames.styled-components'
import { User } from '@/models/user.model'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface Props {
    register: UseFormRegister<any>,
    errors: FieldErrors,
    password: string,
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
                errors,
                disabled: true,
                defaultValue: user.nombre
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.lastname({
                register,
                name: 'apellido',
                errors,
                disabled: true,
                defaultValue: user.apellido
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.dni({
                register,
                name: 'dni',
                errors,
                disabled: true,
                defaultValue: user.dni
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.age({
                register,
                name: 'edad',
                errors,
                disabled: true,
                defaultValue: user.edad
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.email({
                register,
                name: 'email',
                errors,
                defaultValue: user.email
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.celphone({
                register,
                name: 'telefono',
                errors,
                defaultValue: user.telefono
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.password({
                register,
                name: 'contraseña',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.passwordNew({
                register,
                name: 'contraseñaNueva',
                errors,
                password: password
            })}
        </StyledGrid>
    </StyledGridContainer>
}