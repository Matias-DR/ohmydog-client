import * as patterns from '@/models/patterns.model'
import { TextField } from '@mui/material'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface InputProps {
    register?: UseFormRegister<any>,
    name: string,
    errors: FieldErrors<any>,
    disabled?: boolean,
    defaultValue?: string
    required?: boolean
}

export interface OtherPassProps extends InputProps {
    password: string
}

const UserProfileInputs = {
    name: ({
        register,
        name,
        errors,
        disabled,
        required
    }: InputProps) => <TextField
            id='user-name'
            type='text'
            label='Nombre'
            defaultValue='Ejemplo'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.NamePattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    lastname: ({
        register,
        name,
        errors,
        disabled,
        required
    }: InputProps) => <TextField
            id='user-lastname'
            type='text'
            label='Apellido'
            defaultValue='Ejemplo'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.NamePattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    dni: ({
        register,
        name,
        errors,
        disabled,
        required
    }: InputProps) => <TextField
            id='user-dni'
            type='text'
            label='DNI'
            defaultValue='12345678'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.DniPattern,
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
        errors,
        disabled,
        required
    }: InputProps) => <TextField
            id='user-age'
            type='number'
            label='Edad'
            defaultValue='18'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.AgePattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    email: ({
        register,
        name,
        errors,
        disabled,
        required
    }: InputProps) => <TextField
            id='user-email'
            type='email'
            label='Email'
            defaultValue='ejemplo@ejemplo.com'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.EmailPattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    celphone: ({
        register,
        name,
        errors,
        disabled,
        required
    }: InputProps) => <TextField
            id='user-celphone'
            type='tel'
            label='Teléfono'
            defaultValue='+54 221 620 3057'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.TelephonePattern,
                        message: 'Campo inválido'
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    password: ({
        register,
        name,
        errors,
        disabled,
        required
    }: InputProps) => <TextField
            id='user-password'
            type='password'
            label='Contraseña'
            defaultValue='qweQWE123/*-'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.PasswordPattern,
                        message: `La contraseña debe contener al menos 8 
                            caracteres compuestos por un mínimo de una 
                            mayúscula, una minúscula, un número y un 
                            caracter especial`
                    }
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    passwordConfirmation: ({
        register,
        name,
        errors,
        password,
        disabled,
        required
    }: OtherPassProps) => <TextField
            id='user-password-confirmation'
            type='password'
            label='Repita la contraseña'
            defaultValue='qweQWE123/*-'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.PasswordPattern,
                        message: `La contraseña debe contener al menos 8 
                            caracteres compuestos por un mínimo de una 
                            mayúscula, una minúscula, un número y un 
                            caracter especial`
                    },
                    validate: value => value === password,
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />,
    passwordNew: ({
        register,
        name,
        errors,
        password,
        disabled,
        required
    }: OtherPassProps) => <TextField
            id='user-password-new'
            type='password'
            label='Nueva contraseña'
            defaultValue='/*-123QWEqwe'
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: patterns.PasswordPattern,
                        message: `La contraseña debe contener al menos 8 
                            caracteres compuestos por un mínimo de una 
                            mayúscula, una minúscula, un número y un 
                            caracter especial`
                    },
                    validate: value => value !== password || `La contraseña 
                        debe ser distinta a la anterior`,
                }))}
            error={!!errors[name]}
            fullWidth
            helperText={<>{errors[name]?.message}</>}
        />
}

export default UserProfileInputs