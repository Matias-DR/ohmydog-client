import { useEffect, useState } from 'react'
import {
    InputType,
    Input
} from '../input.component'
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
    defaultValue?: string
}

const RepeatPasswordInput = ({
    register,
    errors,
    trigger,
    password,
    defaultValue = 'qweQWE123/*-',
}: Props) => <Input
    name='user.recontraseña'
    register={register}
    errors={errors}
    label='Reingrese la contraseña'
    type={InputType.PASSWORD}
    defaultValue={defaultValue}
    trigger={trigger}
    inputProps={{
        ...register('user.recontraseña', {
            required: 'Las contraseñas no son iguales',
            validate: value => value === password,
        })
    }}
    required={false}
/>

export default RepeatPasswordInput