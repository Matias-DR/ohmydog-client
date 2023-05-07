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
}

const PasswordInput = ({
    register,
    errors,
    trigger,
    pattern = PasswordPattern,
    patternMessage = 'La contraseña debe contener al menos 8 caracteres y poseer una minúscula, una mayúscula, un número y un caracter especial',
}: Props) => <Input
    name='password'
    register={register}
    errors={errors}
    label='Contraseña'
    type={InputType.PASSWORD}
    trigger={trigger}
    inputProps={{
        ...register('password', {
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