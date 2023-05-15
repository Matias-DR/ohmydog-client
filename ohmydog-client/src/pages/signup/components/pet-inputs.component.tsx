import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import { Signup } from '../signup.model'
import { ImgUploader } from '@/components'
import { PetProfileInputs } from '@/components'
import {
    UseFormRegister,
    FieldErrors,
    UseFormSetValue,
    UseFormClearErrors
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<Signup>,
    errors: FieldErrors<Signup>,
    clearErrors: UseFormClearErrors<Signup>,
    setValue: UseFormSetValue<Signup>,
}

export default function PetInputs({
    register,
    errors,
    clearErrors,
    setValue
}: Props) {
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.name({
                register,
                name: 'mascota.nombre',
                error: errors.mascota?.nombre,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.race({
                register,
                name: 'mascota.raza',
                error: errors.mascota?.raza,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.color({
                register,
                name: 'mascota.color',
                error: errors.mascota?.color,
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.age({
                register,
                name: 'mascota.edad',
                error: errors.mascota?.edad,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.sex({
                register,
                name: 'mascota.sexo',
                error: errors.mascota?.sexo,
                clearErrors: clearErrors,
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.size({
                register,
                name: 'mascota.tamaño',
                error: errors.mascota?.tamaño,
                clearErrors: clearErrors,
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.weight({
                register,
                name: 'mascota.peso',
                error: errors.mascota?.peso,
                required: true,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.origin({
                register,
                name: 'mascota.origen',
                error: errors.mascota?.origen,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={9}>
            {PetProfileInputs.caracteristics({
                register,
                name: 'mascota.caracteristica',
                error: errors.mascota?.caracteristica,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={3}>
            <ImgUploader
                register={register}
                errors={errors}
                setValue={setValue}
            ></ImgUploader>
        </StyledGrid>
    </StyledGridContainer>
}