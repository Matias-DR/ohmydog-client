import {
    StyledFormControl,
    StyledSelectField
} from './styled-components'
import {
    FieldErrors,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'
import {
    TextFieldVariants,
    InputBaseProps,
    MenuItem,
    InputLabel,
    FormHelperText,
} from '@mui/material'

interface Props {
    register: UseFormRegister<any>
    name: string
    errors?: FieldErrors
    label?: string
    defaultValue?: string
    inputProps?: InputBaseProps['inputProps']
    disabled?: boolean
    trigger?: UseFormTrigger<any>
    required?: boolean
    variant?: TextFieldVariants,
    labelId: string,
    value: string,
    onChange: (e: any) => void,
    options: string[]
}

export const SelectInput = ({
    register,
    name,
    errors,
    defaultValue = 'Seleccione una opción',
    inputProps,
    disabled = false,
    trigger,
    required,
    variant = 'outlined',
    value = '',
    onChange,
    labelId,
    label,
    options,
}: Props) => {
    const errorMessage = errors && errors[name] ? errors[name]?.message : ''

    const handleChange = (e: any) => {
        onChange(e)
        trigger && trigger('petsex')
    }

    return <>
        <StyledFormControl
            error={!!errorMessage}
        >
            <InputLabel id={labelId}>
                Sexo
            </InputLabel>
            <StyledSelectField
                id={name}
                labelId={labelId}
                label={label}
                value={value}
                required={required}
                disabled={disabled}
                defaultValue={defaultValue}
                error={!!errorMessage}
                variant={variant}
                {...register(name)}
                {...(inputProps && { inputProps: inputProps })}
                onChange={handleChange}
                fullWidth
            >
                {options.map((option, index) => <MenuItem
                    key={option + index.toString()}
                    value={option}
                >
                    {option}
                </MenuItem>)}
            </StyledSelectField>
            <FormHelperText>
                {errorMessage as string}
            </FormHelperText>
        </StyledFormControl>
    </>
}

export default SelectInput