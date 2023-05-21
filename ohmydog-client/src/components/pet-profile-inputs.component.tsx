import { Patterns } from '@/models/patterns.model'
import {
    TextField,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    FormHelperText,
} from '@mui/material'
import {
    UseFormRegister,
    FieldError,
    UseFormClearErrors
} from 'react-hook-form'

export interface InputProps {
    register?: UseFormRegister<any>
    error?: FieldError
    name: string
    defaultValue?: string | number
    required?: boolean
    disabled?: boolean
}

export interface SelectProps extends InputProps {
    clearErrors: UseFormClearErrors<any>
}

export interface MultilineInputProps extends InputProps {
    rows?: number
}

enum InputType {
    TEXT = 'text',
    NUMBER = 'number',
    EMAIL = 'email',
    PASSWORD = 'password',
    TEL = 'tel',
}

const PetProfileInputs = {
    name: ({
        register,
        error,
        name,
        disabled,
        defaultValue = '',
        required,
    }: InputProps) => <TextField
            id='pet-name'
            type={InputType.TEXT}
            label='Nombre'
            defaultValue={defaultValue}
            {...(register && register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.name,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    race: ({
        register,
        error,
        name,
        disabled,
        defaultValue = '',
        required,
    }: InputProps) => <TextField
            id='pet-race'
            type={InputType.TEXT}
            label='Raza'
            defaultValue={defaultValue}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.name,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    color: ({
        register,
        error,
        name,
        disabled,
        defaultValue = '',
        required,
    }: InputProps) => <TextField
            id='pet-color'
            type={InputType.TEXT}
            label='Color'
            defaultValue={defaultValue}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.name,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    age: ({
        register,
        error,
        name,
        disabled,
        defaultValue,
        required,
    }: InputProps) => <TextField
            id='pet-age'
            type={InputType.NUMBER}
            label='Edad'
            defaultValue={defaultValue}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.age,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    sex: ({
        register,
        error,
        name,
        disabled,
        defaultValue = '',
        required,
        clearErrors,
    }: SelectProps) => <FormControl fullWidth error={!!error}>
            <InputLabel id='pet-sex-label'>
                Sexo
            </InputLabel>
            <Select
                id='pet-sex'
                labelId='pet-sex-label'
                label='Sexo'
                defaultValue={defaultValue}
                {...(register && register(
                    name,
                    {
                        required: 'Campo requerido',
                        validate: (value: string) => [
                            'Hembra',
                            'Macho'
                        ].includes(value),
                    },
                ))}
                onChange={() => clearErrors(name)}
                fullWidth
            >
                <MenuItem value='Hembra'>Hembra</MenuItem>
                <MenuItem value='Macho'>Macho</MenuItem>
            </Select>
            <FormHelperText>
                {!!error && 'Debe seleccionar una opción'}
            </FormHelperText>
        </FormControl >,
    size: ({
        register,
        error,
        name,
        disabled,
        defaultValue = '',
        required,
        clearErrors,
    }: SelectProps) => <FormControl fullWidth error={!!error}>
            < InputLabel id='pet-size-label'>
                Tamaño
            </InputLabel>
            <Select
                id='pet-size'
                labelId='pet-size-label'
                label='Tamaño'
                defaultValue={defaultValue}
                {...(register && register(
                    name,
                    {
                        required: 'Campo requerido',
                        validate: (value: string) => [
                            'Grande',
                            'Mediano',
                            'Chico'
                        ].includes(value),
                    },
                ))}
                onChange={() => clearErrors(name)}
                fullWidth
            >
                <MenuItem value='Chico'>Chico</MenuItem>
                <MenuItem value='Mediano'>Mediano</MenuItem>
                <MenuItem value='Grande'>Grande</MenuItem>
            </Select>
            <FormHelperText>
                {!!error && 'Debe seleccionar una opción'}
            </FormHelperText>
        </FormControl >,
    weight: ({
        register,
        error,
        name,
        disabled,
        defaultValue = '',
        required,
    }: InputProps) => <TextField
            id='pet-weight'
            type={InputType.NUMBER}
            label='Peso'
            inputProps={{ step: '0.01' }}
            defaultValue={defaultValue}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.weight,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    origin: ({
        register,
        error,
        name,
        disabled,
        defaultValue = '',
        required,
    }: InputProps) => <TextField
            id='pet-origin'
            type={InputType.TEXT}
            label='Origen'
            defaultValue={defaultValue}
            {...(register && register(name))}
            error={!!error}
            helperText={<>{error?.message}</>}
            fullWidth
        />,
    caracteristics: ({
        register,
        error,
        name,
        disabled,
        defaultValue = '',
        required,
        rows = 4,
    }: MultilineInputProps) => <TextField
            id='pet-caracteristics'
            type={InputType.TEXT}
            label='Cracteristicas'
            defaultValue={defaultValue}
            {...(register && register(name))}
            error={!!error}
            helperText={<>{error?.message}</>}
            fullWidth
            multiline
            rows={rows}
        />
}

export default PetProfileInputs