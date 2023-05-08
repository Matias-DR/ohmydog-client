import { PasswordPattern } from '@/models/patterns.model'
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
    pattern?: RegExp,
    patternMessage?: string,
    defaultValue?: string
}

const PasswordInput = ({
    register,
    errors,
    trigger,
    pattern = PasswordPattern,
    patternMessage = 'La contraseña debe contener al menos 8 caracteres y poseer una minúscula, una mayúscula, un número y un caracter especial',
    defaultValue = 'qweQWE123/*-',
}: Props) => <Input
    name='user.contraseña'
    register={register}
    errors={errors}
    label='Contraseña'
    type={InputType.PASSWORD}
    defaultValue={defaultValue}
    trigger={trigger}
    inputProps={{
        ...register('user.contraseña', {
            required: 'Contraseña requerida',
            pattern: {
                value: pattern,
                message: patternMessage
            }
        })
    }}
    required={false}
/>

export default PasswordInput