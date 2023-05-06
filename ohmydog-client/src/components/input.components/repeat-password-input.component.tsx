import { useEffect, useState } from 'react'
import {
    InputType,
    Input
} from './input.component'
import {
    FieldErrors,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<any>,
    errors: FieldErrors,
    trigger?: UseFormTrigger<any>,
    password: string,
}

const RepeatPasswordInput = ({
    register,
    errors,
    trigger,
    password,
}: Props) => <Input
    name='repeated-password'
    register={register}
    errors={errors}
    label='Reingrese la contraseña'
    type={InputType.PASSWORD}
    trigger={trigger}
    inputProps={{
        ...register('repeated-password', {
            required: 'Las contraseñas no son iguales',
            validate: value => value === password,
        })
    }}
    required={false}
/>

export default RepeatPasswordInput