import * as patterns from '@/models/patterns.model'
import {
    TextField,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    FormHelperText,
} from '@mui/material'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface InputProps {
    register: UseFormRegister<any>,
    name: string,
    errors: FieldErrors<any>
}

export interface SelectProps extends InputProps {
    clearErrors: (field: string) => void
}

const PetProfileInputs = {
    name: ({
        register,
        name,
        errors
    }: InputProps) => <TextField
            id='pet-name'
            type='text'
            label='Nombre'
            defaultValue='Ejemplo'
            {...(register && register && register(
                name,
                {
                    pattern: {
                        value: patterns.NamePattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    race: ({
        register,
        name,
        errors
    }: InputProps) => <TextField
            id='pet-race'
            type='text'
            label='Raza'
            defaultValue='Ejemplo'
            {...(register && register(
                name,
                {
                    pattern: {
                        value: patterns.NamePattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    color: ({
        register,
        name,
        errors
    }: InputProps) => <TextField
            id='pet-color'
            type='text'
            label='Color'
            defaultValue='Ejemplo'
            {...(register && register(
                name,
                {
                    required: 'Campo requerido',
                    pattern: {
                        value: patterns.NamePattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    age: ({
        register,
        name,
        errors
    }: InputProps) => <TextField
            id='pet-age'
            type='number'
            label='Edad'
            defaultValue='1'
            {...(register && register(
                name,
                {
                    pattern: {
                        value: patterns.AgePattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    sex: ({
        register,
        name,
        errors,
        clearErrors,
    }: SelectProps) => <FormControl fullWidth error={!!errors[name]}>
            <InputLabel id='pet-sex-label'>
                Sexo
            </InputLabel>
            <Select
                id='pet-sex'
                labelId='pet-sex-label'
                label='Sexo'
                defaultValue=''
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
                onChange={() => clearErrors('sexo')}
                fullWidth
            >
                <MenuItem value='Hembra'>Hembra</MenuItem>
                <MenuItem value='Macho'>Macho</MenuItem>
            </Select>
            <FormHelperText>
                {!!errors[name] && 'Debe seleccionar una opción'}
            </FormHelperText>
        </FormControl>,
    size: ({
        register,
        name,
        errors,
        clearErrors,
    }: SelectProps) => <FormControl fullWidth error={!!errors[name]}>
            <InputLabel id='pet-size-label'>
                Tamaño
            </InputLabel>
            <Select
                id='pet-size'
                labelId='pet-size-label'
                label='Tamaño'
                defaultValue=''
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
                onChange={() => clearErrors('tamaño')}
                fullWidth
            >
                <MenuItem value='Chico'>Chico</MenuItem>
                <MenuItem value='Mediano'>Mediano</MenuItem>
                <MenuItem value='Grande'>Grande</MenuItem>
            </Select>
            <FormHelperText>
                {!!errors[name] && 'Debe seleccionar una opción'}
            </FormHelperText>
        </FormControl>,
    weight: ({
        register,
        name,
        errors
    }: InputProps) => <TextField
            id='pet-weight'
            type='number'
            label='Peso'
            inputProps={{ step: '0.01' }}
            defaultValue='24'
            {...(register && register(
                name,
                {
                    required: 'Campo requerido',
                    pattern: {
                        value: patterns.WeightPattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    origin: ({
        register,
        name,
        errors
    }: InputProps) => <TextField
            id='pet-origin'
            type='text'
            label='Origen'
            defaultValue='Ejemplo'
            {...(register && register(name))}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    caracteristics: ({
        register,
        name,
        errors
    }: InputProps) => <TextField
            id='pet-caracteristics'
            type='text'
            label='Cracteristicas'
            defaultValue='Ejemplo'
            {...(register && register(name))}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
            multiline
            rows={4}
        />
}

export default PetProfileInputs