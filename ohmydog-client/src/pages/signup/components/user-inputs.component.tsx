import {
    StyledGridContainer,
    StyledGrid,
} from '@/styled-components/input-frames.styled-components'
import {
    UsernameInput,
    EmailInput,
    PasswordInput,
    RepeatPasswordInput,
    AgeInput,
    DniInput,
    LastnameInput,
    TelephoneInput,
} from '@/components'
import { FormProps } from './form.component'
import {
    UseFormRegister,
    FieldErrors
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<FormProps>,
    errors: FieldErrors,
    password: string,
}

export default function UserInputs(props: Props) {
    return <StyledGridContainer container spacing={1}>
        <StyledGrid xs={12} sm={6} md={3}>
            <UsernameInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <LastnameInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <AgeInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <DniInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <EmailInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <TelephoneInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <PasswordInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid xs={12} sm={6} md={3}>
            <RepeatPasswordInput
                register={props.register}
                errors={props.errors}
                password={props.password}
            />
        </StyledGrid>
    </StyledGridContainer>
}