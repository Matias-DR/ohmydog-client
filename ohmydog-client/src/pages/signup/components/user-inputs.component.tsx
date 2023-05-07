import {
    StyledGrid,
    StyledInputsGrid
} from '@/pages/signup/styled-components/form.styled-components'
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
    return <StyledInputsGrid container spacing={2}>
        <StyledGrid sm={6}>
            <UsernameInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <LastnameInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <AgeInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <DniInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <EmailInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <TelephoneInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <PasswordInput
                register={props.register}
                errors={props.errors}
            />
        </StyledGrid>
        <StyledGrid sm={6}>
            <RepeatPasswordInput
                register={props.register}
                errors={props.errors}
                password={props.password}
            />
        </StyledGrid>
    </StyledInputsGrid>
}