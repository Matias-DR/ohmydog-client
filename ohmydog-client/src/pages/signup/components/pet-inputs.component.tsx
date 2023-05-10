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
import { ImgUploader } from '@/components'

export interface Props {
    register: UseFormRegister<Signup>,
    errors: FieldErrors,
    watch: (field: string) => any,
    clearErrors: () => void,
}

export default function PetInputs(props: Props) {
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.pet.name({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.pet.race({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.pet.color({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.pet.age({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.pet.sex({
                register: props.register,
                errors: props.errors,
                clearErrors: props.clearErrors,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.pet.size({
                register: props.register,
                errors: props.errors,
                clearErrors: props.clearErrors,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.pet.weight({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {SignupInputs.pet.origin({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={9}>
            {SignupInputs.pet.caracteristics({
                register: props.register,
                errors: props.errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={3}>
            <ImgUploader
                register={props.register}
                errors={props.errors}
                file={props.watch('mascota.foto')}
            ></ImgUploader>
        </StyledGrid>
    </StyledGridContainer>
}