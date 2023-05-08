import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import {
    PetAgeInput,
    PetCaracteristicsInput,
    PetNameInput,
    PetRaceInput,
    PetSexInput,
    PetSizeInput,
    PetColorInput,
    PetOriginInput,
    PetWeightInput
} from '@/components'
import { FormProps } from './form.component'
import {
    UseFormRegister,
    FieldErrors
} from 'react-hook-form'
import { useState } from 'react'

export interface Props {
    register: UseFormRegister<FormProps>,
    errors: FieldErrors,
}

export default function PetInputs(props: Props) {
    const [sex, setSex] = useState<string>('')

    const onChangeSex = (e: any) => {
        setSex(e.target.value)
    }

    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetAgeInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetCaracteristicsInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetNameInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetRaceInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetSexInput
                register={props.register}
                errors={props.errors}
                value={sex}
                onChange={onChangeSex}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetSizeInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetColorInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetOriginInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PetWeightInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
    </StyledGridContainer>
}