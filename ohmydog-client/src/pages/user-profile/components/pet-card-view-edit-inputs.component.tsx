import { Pet } from '@/models/pet.model'
import {
    StyledCardContainer,
    StyledInputsGrid,
    StyledGrid,
    StyledImgGrid,
} from '../styled-components/full-pet-card.styled-components'
import { ImgUploader, PetProfileInputs } from '@/components'
import { StyledImgCard } from '../styled-components/pet-card.styled-components'
import {
    FieldErrors,
    UseFormRegister,
    UseFormClearErrors,
    UseFormSetValue
} from 'react-hook-form'

export interface Props {
    pet: Pet
    register: UseFormRegister<Pet>
    errors: FieldErrors<Pet>
    clearErrors: UseFormClearErrors<Pet>
    setValue: UseFormSetValue<Pet>
}

export default function PetCardViewEditInputs({
    pet,
    register,
    errors,
    clearErrors,
    setValue,
}: Props) {
    return <StyledCardContainer
        container
        spacing={1}
    >
        <StyledImgGrid
            container
            xs={12} sm={4} xl={6}
        >
            <StyledImgCard
                src={pet.foto}
            ></StyledImgCard>
        </StyledImgGrid>
        <StyledInputsGrid
            container
            spacing={1}
            xs={12} sm={8} xl={6}
        >
            <StyledGrid xs={12} sm={6} xl={3}>
                {PetProfileInputs.name({
                    register,
                    name: 'nombre',
                    error: errors.nombre,
                    defaultValue: pet.nombre,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={6} xl={3}>
                {PetProfileInputs.race({
                    register,
                    name: 'raza',
                    error: errors.raza,
                    defaultValue: pet.raza,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={6} xl={3}>
                {PetProfileInputs.color({
                    register,
                    name: 'color',
                    error: errors.color,
                    required: true,
                    defaultValue: pet.color,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={6} xl={3}>
                {PetProfileInputs.age({
                    register,
                    name: 'edad',
                    error: errors.edad,
                    defaultValue: pet.edad,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={6} xl={3}>
                {PetProfileInputs.sex({
                    register,
                    name: 'sexo',
                    error: errors.sexo,
                    clearErrors: clearErrors,
                    defaultValue: pet.sexo,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={6} xl={3}>
                {PetProfileInputs.size({
                    register,
                    name: 'tamaño',
                    error: errors.tamaño,
                    clearErrors: clearErrors,
                    defaultValue: pet.tamaño,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={6} xl={3}>
                {PetProfileInputs.weight({
                    register,
                    name: 'peso',
                    error: errors.peso,
                    defaultValue: pet.peso,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={6} xl={3}>
                {PetProfileInputs.origin({
                    register,
                    name: 'origen',
                    error: errors.origen,
                    defaultValue: pet.origen,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={9}>
                {PetProfileInputs.caracteristics({
                    register,
                    name: 'caracteristica',
                    error: errors.caracteristica,
                    defaultValue: pet.caracteristica,
                })}
            </StyledGrid>
            <StyledGrid xs={12} sm={3}>
                <ImgUploader
                    name='foto'
                    register={register}
                    errors={errors}
                    setValue={setValue}
                ></ImgUploader>
            </StyledGrid>
        </StyledInputsGrid>
    </StyledCardContainer>
}