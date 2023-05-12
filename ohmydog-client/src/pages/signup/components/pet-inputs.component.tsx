import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import { Pet } from '@/models/pet.model'
import { ImgUploader } from '@/components'
import { PetProfileInputs } from '@/components'
import {
    UseFormRegister,
    FieldErrors,
    UseFormSetValue
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<Pet>,
    errors: FieldErrors<Pet>,
    clearErrors: () => void,
    setValue: UseFormSetValue<Pet>,
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
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.race({
                register,
                name: 'mascota.raza',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.color({
                register,
                name: 'mascota.color',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.age({
                register,
                name: 'mascota.edad',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.sex({
                register,
                name: 'mascota.sexo',
                errors,
                clearErrors: clearErrors,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.size({
                register,
                name: 'mascota.tamaño',
                errors,
                clearErrors: clearErrors,
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.weight({
                register,
                name: 'mascota.peso',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            {PetProfileInputs.origin({
                register,
                name: 'mascota.origen',
                errors
            })}
        </StyledGrid>
        <StyledGrid xs={12} sm={9}>
            {PetProfileInputs.caracteristics({
                register,
                name: 'mascota.caracteristica',
                errors
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