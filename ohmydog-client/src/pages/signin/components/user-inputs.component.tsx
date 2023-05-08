import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import {
    EmailInput,
    PasswordInput,
} from '@/components'
import { FormProps } from './form.component'
import {
    UseFormRegister,
    FieldErrors
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<FormProps>,
    errors: FieldErrors,
}

export default function UserInputs(props: Props) {
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12}>
            <EmailInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12}>
            <PasswordInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
    </StyledGridContainer>
}