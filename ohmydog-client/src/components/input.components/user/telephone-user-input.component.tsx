import { TelephonePattern } from '@/models/patterns.model'
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

const TelephoneInput = ({
    register,
    errors,
    trigger,
    pattern = TelephonePattern,
    defaultValue = '+54 123 456 7890'
}: Props) => <Input
        name='user.telefono'
        register={register}
        errors={errors}
        label='Teléfono'
        type={InputType.TEXT}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('user.telefono', {
                required: 'Teléfono requerido',
                pattern: {
                    value: pattern,
                    message: 'Número telefónico inválido'
                }
            })
        }}
        required={false}
    />

export default TelephoneInput