import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import { User } from '@/models/user.model'
import { UserProfileInputs } from '@/components'
import {
    UseFormRegister,
    FieldErrors
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<User>,
    errors: FieldErrors<User>,
    password: string,
}

export default function UserInputs({
    register,
    errors,
    password
}: Props) {
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.name({
                register,
                name: 'cliente.nombre',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.lastname({
                register,
                name: 'cliente.apellido',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.dni({
                register,
                name: 'cliente.dni',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.age({
                register,
                name: 'cliente.edad',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.email({
                register,
                name: 'cliente.email',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.celphone({
                register,
                name: 'cliente.telefono',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.password({
                register,
                name: 'cliente.contraseña',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.passwordConfirmation({
                register,
                name: 'contraseñaConfirmacion',
                errors,
                password: password
            })}
        </StyledGrid>
    </StyledGridContainer>
}