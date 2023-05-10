import { EmailPattern } from '@/models/patterns.model'
import { Credential } from '../credential.model'
import { TextField } from '@mui/material'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export interface InputProps {
    register: UseFormRegister<Credential>,
    errors: FieldErrors<Credential>,
}

export const Email = ({
    register,
    errors
}: InputProps) => <TextField
        id='email'
        type='email'
        label='Email'
        {...register(
            'email',
            {
                required: true,
                pattern: {
                    value: EmailPattern,
                    message: 'Email inválido'
                }
            })}
        error={!!errors.email}
        fullWidth
        helperText={<>{errors.email?.message}</>}
    />

export const Password = ({
    register,
    errors
}: InputProps) => <TextField
        id='contraseña'
        type='password'
        label='Contraseña'
        {...register(
            'contraseña',
            { required: true }
        )}
        error={!!errors.contraseña}
        helperText={<>{errors.contraseña?.message}</>}
        fullWidth
    />