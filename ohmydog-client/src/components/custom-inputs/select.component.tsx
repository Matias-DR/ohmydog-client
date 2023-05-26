import { SelectOption } from '@/models/components/select-option.model'
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

interface SelectProps {
    name: string
    label: string
    required?: boolean
    register: UseFormRegister<any>
    trigger?: UseFormTrigger<any>
    registerOptions?: RegisterOptions<any>
    error?: FieldError
    inputProps?: InputBaseProps['inputProps']
    options: SelectOption[]
}

export default function CustomSelect({
    name,
    label,
    required = false,
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
            defaultValue={options[0].value}
            variant='outlined'
            select
            {...register(name, registerOptions && registerOptions)}
            {...(inputProps && { inputProps: inputProps })}
            onBlur={() => trigger && trigger()}
            error={!!error}
            fullWidth
        >
            <MenuItem
                key='Seleccione una opción'
                value='Seleccione una opción'
                disabled
            >
                Seleccione una opción
            </MenuItem>
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