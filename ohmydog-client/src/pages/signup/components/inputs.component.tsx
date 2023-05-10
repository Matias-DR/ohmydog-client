import { Signup } from '../signup.model'
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
    register: UseFormRegister<Signup>,
    errors: FieldErrors<Signup>
}

export interface RePasswordProps extends InputProps {
    password: string
}

export interface SelectProps extends InputProps {
    clearErrors: (field: string) => void
}

const SignupInputs = {
    user: {
        name: ({
            register,
            errors
        }: InputProps) => <TextField
                id='user-name'
                type='text'
                label='Nombre'
                defaultValue='Ejemplo'
                {...register(
                    'cliente.nombre',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.NamePattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.cliente?.nombre}
                fullWidth
                helperText={<>{errors.cliente?.nombre?.message}</>}
            />,
        lastname: ({
            register,
            errors
        }: InputProps) => <TextField
                id='user-lastname'
                type='text'
                label='Apellido'
                defaultValue='Ejemplo'
                {...register(
                    'cliente.apellido',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.NamePattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.cliente?.apellido}
                fullWidth
                helperText={<>{errors.cliente?.apellido?.message}</>}
            />,
        dni: ({
            register,
            errors
        }: InputProps) => <TextField
                id='user-dni'
                type='text'
                label='DNI'
                defaultValue='12345678'
                {...register(
                    'cliente.dni',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.DniPattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.cliente?.dni}
                fullWidth
                helperText={<>{errors.cliente?.dni?.message}</>}
            />,
        age: ({
            register,
            errors
        }: InputProps) => <TextField
                id='user-age'
                type='number'
                label='Edad'
                defaultValue='18'
                {...register(
                    'cliente.edad',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.AgePattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.cliente?.edad}
                fullWidth
                helperText={<>{errors.cliente?.edad?.message}</>}
            />,
        email: ({
            register,
            errors
        }: InputProps) => <TextField
                id='user-email'
                type='email'
                label='Email'
                defaultValue='ejemplo@ejemplo.com'
                {...register(
                    'cliente.email',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.EmailPattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.cliente?.email}
                fullWidth
                helperText={<>{errors.cliente?.email?.message}</>}
            />,
        celphone: ({
            register,
            errors
        }: InputProps) => <TextField
                id='user-celphone'
                type='tel'
                label='Teléfono'
                defaultValue='+54 221 620 3057'
                {...register(
                    'cliente.telefono',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.TelephonePattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.cliente?.telefono}
                fullWidth
                helperText={<>{errors.cliente?.telefono?.message}</>}
            />,
        password: ({
            register,
            errors
        }: InputProps) => <TextField
                id='user-password'
                type='password'
                label='Contraseña'
                defaultValue='qweQWE123/*-'
                {...register(
                    'cliente.contraseña',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.PasswordPattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.cliente?.contraseña}
                fullWidth
                helperText={<>{errors.cliente?.contraseña?.message}</>}
            />,
        repassword: ({
            register,
            errors,
            password
        }: RePasswordProps) => <TextField
                id='user-repassword'
                type='password'
                label='Repita la contraseña'
                defaultValue='qweQWE123/*-'
                {...register(
                    'cliente.contraseña',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.PasswordPattern,
                            message: 'Campo inválido'
                        },
                        validate: value => value === password,
                    })}
                error={!!errors.cliente?.contraseña}
                fullWidth
                helperText={<>{errors.cliente?.contraseña?.message}</>}
            />
    },
    pet: {
        name: ({
            register,
            errors
        }: InputProps) => <TextField
                id='pet-name'
                type='text'
                label='Nombre'
                defaultValue='Ejemplo'
                {...register(
                    'mascota.nombre',
                    {
                        pattern: {
                            value: patterns.NamePattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.mascota?.nombre}
                fullWidth
                helperText={<>{errors.mascota?.nombre?.message}</>}
            />,
        race: ({
            register,
            errors
        }: InputProps) => <TextField
                id='pet-race'
                type='text'
                label='Raza'
                defaultValue='Ejemplo'
                {...register(
                    'mascota.raza',
                    {
                        pattern: {
                            value: patterns.NamePattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.mascota?.raza}
                fullWidth
                helperText={<>{errors.mascota?.raza?.message}</>}
            />,
        color: ({
            register,
            errors
        }: InputProps) => <TextField
                id='pet-color'
                type='text'
                label='Color'
                defaultValue='Ejemplo'
                {...register(
                    'mascota.color',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.NamePattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.mascota?.color}
                fullWidth
                helperText={<>{errors.mascota?.color?.message}</>}
            />,
        age: ({
            register,
            errors
        }: InputProps) => <TextField
                id='pet-age'
                type='number'
                label='Edad'
                defaultValue='1'
                {...register(
                    'mascota.edad',
                    {
                        pattern: {
                            value: patterns.AgePattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.mascota?.edad}
                fullWidth
                helperText={<>{errors.mascota?.edad?.message}</>}
            />,
        sex: ({
            register,
            errors,
            clearErrors,
        }: SelectProps) => <FormControl fullWidth error={!!errors.mascota?.sexo}>
                <InputLabel id='pet-sex-label'>
                    Sexo
                </InputLabel>
                <Select
                    id='pet-sex'
                    labelId='pet-sex-label'
                    label='Sexo'
                    defaultValue=''
                    {...register(
                        'mascota.sexo',
                        {
                            required: 'Campo requerido',
                            validate: (value: string) => ['Hembra', 'Macho'].includes(value),
                        },
                    )}
                    onChange={() => clearErrors('mascota.sexo')}
                    fullWidth
                >
                    <MenuItem value='Hembra'>Hembra</MenuItem>
                    <MenuItem value='Macho'>Macho</MenuItem>
                </Select>
                <FormHelperText>{!!errors.mascota?.sexo && 'Debe seleccionar una opción'}</FormHelperText>
            </FormControl>,
        size: ({
            register,
            errors,
            clearErrors,
        }: SelectProps) => <FormControl fullWidth error={!!errors.mascota?.tamaño}>
                <InputLabel id='pet-size-label'>
                    Tamaño
                </InputLabel>
                <Select
                    id='pet-size'
                    labelId='pet-size-label'
                    label='Tamaño'
                    defaultValue=''
                    {...register(
                        'mascota.tamaño',
                        {
                            required: 'Campo requerido',
                            validate: (value: string) => ['Grande', 'Mediano', 'Chico'].includes(value),
                        },
                    )}
                    onChange={() => clearErrors('mascota.tamaño')}
                    fullWidth
                >
                    <MenuItem value='Chico'>Chico</MenuItem>
                    <MenuItem value='Mediano'>Mediano</MenuItem>
                    <MenuItem value='Grande'>Grande</MenuItem>
                </Select>
                <FormHelperText>{!!errors.mascota?.tamaño && 'Debe seleccionar una opción'}</FormHelperText>
            </FormControl>,
        weight: ({
            register,
            errors
        }: InputProps) => <TextField
                id='pet-weight'
                type='number'
                label='Peso'
                inputProps={{ step: '0.01' }}
                defaultValue='24'
                {...register(
                    'mascota.peso',
                    {
                        required: 'Campo requerido',
                        pattern: {
                            value: patterns.WeightPattern,
                            message: 'Campo inválido'
                        }
                    })}
                error={!!errors.mascota?.peso}
                fullWidth
                helperText={<>{errors.mascota?.peso?.message}</>}
            />,
        origin: ({
            register,
            errors
        }: InputProps) => <TextField
                id='pet-origin'
                type='text'
                label='Origen'
                defaultValue='Ejemplo'
                {...register('mascota.origen')}
                error={!!errors.mascota?.origen}
                fullWidth
                helperText={<>{errors.mascota?.origen?.message}</>}
            />,
        caracteristics: ({
            register,
            errors
        }: InputProps) => <TextField
                id='pet-caracteristics'
                type='text'
                label='Cracteristicas'
                defaultValue='Ejemplo'
                {...register('mascota.caracteristica')}
                error={!!errors.mascota?.caracteristica}
                fullWidth
                helperText={<>{errors.mascota?.caracteristica?.message}</>}
                multiline
                rows={4}
            />
    }
}

export default SignupInputs