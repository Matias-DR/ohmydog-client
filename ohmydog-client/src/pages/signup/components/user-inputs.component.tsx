import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import { Signup } from '../signup.model'
import { UserProfileInputs } from '@/components'
import {
    UseFormRegister,
    FieldErrors
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<Signup>,
    errors: FieldErrors<Signup>,
    password: string,
}

export default function UserInputs({
    register,
    errors,
    password,
}: Props) {
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.name({
                register: register,
                error: errors.cliente?.nombre,
                name: 'cliente.nombre',
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.lastname({
                register,
                name: 'cliente.apellido',
                error: errors.cliente?.apellido
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.dni({
                register,
                error: errors.cliente?.dni,
                name: 'cliente.dni',
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.age({
                register,
                error: errors.cliente?.edad,
                name: 'cliente.edad',
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.email({
                register,
                error: errors.cliente?.email,
                name: 'cliente.email',
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.celphone({
                register,
                error: errors.cliente?.telefono,
                name: 'cliente.telefono',
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.password({
                register,
                error: errors.cliente?.contraseña,
                name: 'cliente.contraseña',
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.passwordConfirmation({
                register,
                error: errors.cliente?.confirmacioncontraseña,
                name: 'cliente.confirmacioncontraseña',
                password: password
            })}
        </StyledGrid>
    </StyledGridContainer >
}