import { EmailPattern } from '@/models/patterns.model'
import {
    FieldErrors,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'
import {
    InputType,
    Input
} from '../input.component'

export interface Props {
    register: UseFormRegister<any>,
    errors: FieldErrors,
    trigger?: UseFormTrigger<any>,
    pattern?: RegExp,
    defaultValue?: string
}

const EmailInput = ({
    register,
    errors,
    trigger,
    pattern = EmailPattern,
    defaultValue = 'ejemplo@ejemplo.com'
}: Props) => <Input
        name='user.email'
        register={register}
        errors={errors}
        label='Email'
        type={InputType.EMAIL}
        trigger={trigger}
        inputProps={{
            ...register('user.email', {
                required: 'Email requerido',
                pattern: {
                    value: pattern,
                    message: 'Email inválido'
                }
            })
        }}
        required={false}
        defaultValue={defaultValue}
    />

export default EmailInput