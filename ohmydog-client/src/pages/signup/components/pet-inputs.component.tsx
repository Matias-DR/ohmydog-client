import {
    StyledGrid,
    StyledInputsGrid
} from '@/pages/signup/styled-components/form.styled-components'
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

    return <StyledInputsGrid container spacing={2}>
        <StyledGrid sm={6}>
            <PetAgeInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <PetCaracteristicsInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <PetNameInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <PetRaceInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid width={'100%'} sm={6}>
            <PetSexInput
                register={props.register}
                errors={props.errors}
                value={sex}
                onChange={onChangeSex}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <PetSizeInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <PetColorInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <PetOriginInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <PetWeightInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
    </StyledInputsGrid>
}