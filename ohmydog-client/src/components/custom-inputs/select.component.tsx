import {
    FormControl,
    FormHelperText,
    InputBaseProps,
    MenuItem,
    TextField
} from '@mui/material'
import {
    FieldError,
    RegisterOptions,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'

export interface SelectOption {
    value: string
    label: string
}

interface SelectProps {
    name: string
    label: string
    required?: boolean
    disabled?: boolean
    defaultValue?: SelectOption
    register: UseFormRegister<any>
    trigger?: UseFormTrigger<any>
    registerOptions?: RegisterOptions<any>
    error?: FieldError
    inputProps?: InputBaseProps['inputProps']
    options: SelectOption[]
}

export default function Select({
    name,
    label,
    required = false,
    disabled = false,
    defaultValue,
    register,
    registerOptions,
    trigger,
    error,
    inputProps,
    options
}: SelectProps) {
    return <FormControl fullWidth error={!!error}>
        <TextField
            id={name}
            label={label}
            required={required}
            disabled={disabled}
            defaultValue={defaultValue ? defaultValue.value : options[0].value}
            variant='outlined'
            select
            {...register(name, registerOptions && registerOptions)}
            {...(inputProps && { inputProps: inputProps })}
            onBlur={() => trigger && trigger()}
            error={!!error}
            fullWidth
        >
            {options.map((option) => (
                <MenuItem
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
        <FormHelperText>
            {error ? 'Seleccione una opción' : ''}
            {/*
                Otra forma de validación sería:
                !!errors[name] && 'Seleccione una opción'
            */}
        </FormHelperText>
    </FormControl>
}