import { UserProfileInputs } from '@/components'
import {
    StyledGrid,
    StyledGridContainer
} from '@/styled-components/input-frames.styled-components'
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
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.name({
                register,
                name: 'nombre',
                errors,
                disabled: true
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.lastname({
                register,
                name: 'apellido',
                errors,
                disabled: true
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.dni({
                register,
                name: 'dni',
                errors,
                disabled: true
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.age({
                register,
                name: 'edad',
                errors,
                disabled: true
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.email({
                register,
                name: 'email',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {UserProfileInputs.celphone({
                register,
                name: 'telefono',
                errors
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