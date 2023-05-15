import { Patterns } from '@/models/patterns.model'
import { TextField } from '@mui/material'
import {
    UseFormRegister,
    FieldError
} from 'react-hook-form'

export interface InputProps {
    register?: UseFormRegister<any>
    error?: FieldError
    name: string
    defaultValue?: string | number
    required?: boolean
    disabled?: boolean,
}

export interface OtherPassProps extends InputProps {
    password?: string
}

export enum InputType {
    TEXT = 'text',
    NUMBER = 'number',
    EMAIL = 'email',
    PASSWORD = 'password',
    TEL = 'tel',
}

const UserProfileInputs = {
    name: ({
        register,
        error,
        name,
        disabled,
        defaultValue = 'Ejemplo',
        required,
    }: InputProps) => (<TextField
        id={name}
        type={InputType.TEXT}
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
            }
        ))}
        error={!!error}
        helperText={<>{error && error.message}</>}
        fullWidth
    />),
    lastname: ({
        register,
        name,
        error,
        disabled,
        required,
        defaultValue = 'Ejemplo'
    }: InputProps) => <TextField
            id={name}
            type={InputType.TEXT}
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
                }
            ))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    dni: ({
        register,
        name,
        error,
        disabled,
        required,
        defaultValue = '12345678'
    }: InputProps) => <TextField
            id={name}
            type={InputType.TEXT}
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
                }
            ))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    age: ({
        register,
        name,
        error,
        disabled,
        required,
        defaultValue = '18'
    }: InputProps) => <TextField
            id={name}
            type={InputType.NUMBER}
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
                }
            ))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    email: ({
        register,
        name,
        error,
        disabled,
        required,
        defaultValue = 'ejemplo@ejemplo.com'
    }: InputProps) => <TextField
            id={name}
            type={InputType.EMAIL}
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
                }
            ))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    celphone: ({
        register,
        name,
        error,
        disabled,
        required,
        defaultValue = '+54 221 620 3057',
    }: InputProps) => <TextField
            id={name}
            type={InputType.TEL}
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
                    },
                }
            ))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    password: ({
        register,
        name,
        error,
        disabled,
        required,
        defaultValue = 'qweQWE123/*-'
    }: InputProps) => <TextField
            id={name}
            type={InputType.PASSWORD}
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
                }
            ))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    passwordConfirmation: ({
        register,
        name,
        error,
        password,
        disabled,
        required,
        defaultValue = 'qweQWE123/*-'
    }: OtherPassProps) => <TextField
            id={name}
            type={InputType.PASSWORD}
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
                    validate: value => value === password || `Las contraseñas
                        son diferentes`
                }
            ))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />,
    passwordNew: ({
        register,
        name,
        error,
        password,
        disabled,
        required,
        defaultValue = '',
    }: OtherPassProps) => <TextField
            id={name}
            type={InputType.PASSWORD}
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
                    validate: value => value !== password || `La contraseña debe ser diferente a la
                        anterior`
                }
            ))}
            error={!!error}
            helperText={<>{error && error.message}</>}
            fullWidth
        />
}

export default UserProfileInputs