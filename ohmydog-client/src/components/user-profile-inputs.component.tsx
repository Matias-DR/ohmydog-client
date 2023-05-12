import { Patterns } from '@/models/patterns.model'
import { TextField } from '@mui/material'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface InputProps {
    register?: UseFormRegister<any>,
    name: string,
    errors: FieldErrors<any>,
    disabled?: boolean,
    defaultValue?: string | number
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
        required,
        defaultValue = 'Ejemplo'
    }: InputProps) => <TextField
            id='user-name'
            type='text'
            label='Nombre'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.name,
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
        required,
        defaultValue = 'Ejemplo'
    }: InputProps) => <TextField
            id='user-lastname'
            type='text'
            label='Apellido'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.name,
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
        required,
        defaultValue = '12345678'
    }: InputProps) => <TextField
            id='user-dni'
            type='text'
            label='DNI'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.dni,
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
        required,
        defaultValue = '18'
    }: InputProps) => <TextField
            id='user-age'
            type='number'
            label='Edad'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.age,
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
        required,
        defaultValue = 'ejemplo@ejemplo.com'
    }: InputProps) => <TextField
            id='user-email'
            type='email'
            label='Email'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.email,
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
        required,
        defaultValue = '+54 221 620 3057'
    }: InputProps) => <TextField
            id='user-celphone'
            type='tel'
            label='Teléfono'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.celphone,
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
        required,
        defaultValue = ''
    }: InputProps) => <TextField
            id='user-password'
            type='password'
            label='Contraseña'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.password,
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
        required,
        defaultValue = ''
    }: OtherPassProps) => <TextField
            id='user-password-confirmation'
            type='password'
            label='Repita la contraseña'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.password,
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
        required,
        defaultValue = ''
    }: OtherPassProps) => <TextField
            id='user-password-new'
            type='password'
            label='Nueva contraseña'
            defaultValue={defaultValue}
            disabled={disabled}
            {...(register && register(
                name,
                {
                    required: required ? 'Campo requerido' : '',
                    pattern: {
                        value: Patterns.password,
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