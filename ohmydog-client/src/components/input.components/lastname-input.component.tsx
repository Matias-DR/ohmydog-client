import { NamePattern } from '@/models/patterns.model'
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
    pattern?: RegExp,
    defaultValue?: string
}

const LastnameInput = ({
    register,
    errors,
    trigger,
    pattern = NamePattern,
    defaultValue = ''
}: Props) => <Input
        name='lastname'
        register={register}
        errors={errors}
        label='Apellido/s'
        type={InputType.TEXT}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('lastname', {
                required: 'Apellido requerido',
                pattern: {
                    value: pattern,
                    message: 'Solo letras y espacios.'
                }
            })
        }}
        required={false}
    />

export default LastnameInput