import {
    InputBaseProps,
    TextField
} from '@mui/material'
import {
    FieldError,
    RegisterOptions,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'

interface Props {
    name: string
    label: string
    type: InputType
    defaultValue?: string | number
    required?: boolean
    register?: UseFormRegister<any>
    registerOptions?: RegisterOptions<any>
    trigger?: UseFormTrigger<any>
    error?: FieldError
    inputProps?: InputBaseProps['inputProps']
    disabled?: boolean
    multiline?: boolean
    rows?: number
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

export function Input({
    name,
    label,
    type,
    defaultValue,
    required = false,
    register,
    registerOptions,
    trigger,
    error,
    inputProps,
    disabled = false,
    multiline = false,
    rows = 1
}: Props) {
    return <TextField
        id={name}
        label={label}
        type={type}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        variant='outlined'
        error={error && !!error?.message}
        {...(register && register(
            name,
            {
                required: required ? 'Campo requerido' : false,
                ...registerOptions && registerOptions
            }
        ))}
        {...(inputProps && { inputProps: inputProps })}
        onBlur={() => trigger && trigger()}
        fullWidth
        helperText={<>{error && error?.message}</>}
        multiline={multiline}
        rows={multiline ? rows : undefined}
    />
}

export default Input