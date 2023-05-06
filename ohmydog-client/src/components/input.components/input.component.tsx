import { StyledTextField } from '../../styled-components/styled-components'
import { TextFieldVariants } from '@mui/material'
import { InputBaseProps } from '@mui/material'
import {
    FieldErrors,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'

interface Props {
    register: UseFormRegister<any>
    name: string
    errors?: FieldErrors
    label?: string
    type: InputType
    defaultValue?: string
    inputProps?: InputBaseProps['inputProps']
    disabled?: boolean
    trigger?: UseFormTrigger<any>
    required?: boolean
    variant?: TextFieldVariants,
    onChange?: (e: any) => void
}

export enum InputType {
    NUMBER = 'number',
    PASSWORD = 'password',
    SEARCH = 'search',
    TEXT = 'text',
    HIDDEN = 'hidden',
    CHECKBOX = 'checkbox',
    EMAIL = 'email'
}

export const Input = ({
    register,
    name,
    errors,
    label = '',
    type,
    defaultValue,
    inputProps,
    disabled = false,
    trigger,
    required,
    variant='outlined',
    onChange
}: Props) => {
    const errorMessage = errors && errors[name] ? errors[name]?.message : ''

    return <StyledTextField
        required={required}
        disabled={disabled}
        type={type}
        defaultValue={defaultValue}
        error={!!errorMessage}
        id={name}
        label={label}
        variant={variant}
        {...register(name)}
        {...(inputProps && { inputProps: inputProps })}
        // onChange={() => trigger && trigger()}
        onChange={onChange}
        fullWidth
        helperText={<> {errorMessage} </>}
    />
}

export default Input