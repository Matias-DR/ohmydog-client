import { NamePattern } from '@/models/patterns.model'
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
    defaultValue?: string
}

const UsernameInput = ({
    register,
    errors,
    trigger,
    pattern = NamePattern,
    defaultValue = 'Ejemplo'
}: Props) => <Input
        name='user.nombre'
        register={register}
        errors={errors}
        label='Nombre/s'
        type={InputType.TEXT}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('user.nombre', {
                required: 'Nombre/s requerido',
                pattern: {
                    value: pattern,
                    message: 'Solo letras y espacios.'
                }
            })
        }}
        required={false}
    />

export default UsernameInput