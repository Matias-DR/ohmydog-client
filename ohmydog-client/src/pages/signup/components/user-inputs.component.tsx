import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import { Signup } from '../signup.model'
import { SignupInputs } from './'
import {
    UseFormRegister,
    FieldErrors
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<Signup>,
    errors: FieldErrors<Signup>,
    password: string,
}

export default function UserInputs(props: Props) {
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.user.name({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.user.lastname({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.user.dni({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.user.age({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.user.email({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.user.celphone({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.user.password({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.user.repassword({
                register: props.register,
                errors: props.errors,
                password: props.password
            })}
        </StyledGrid>
    </StyledGridContainer>
}