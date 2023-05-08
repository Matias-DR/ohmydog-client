import { DniPattern } from '@/models/patterns.model'
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

const DniInput = ({
    register,
    errors,
    trigger,
    pattern = DniPattern,
    defaultValue = '12345678'
}: Props) => <Input
        name='user.dni'
        register={register}
        errors={errors}
        label='DNI'
        type={InputType.NUMBER}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('user.dni', {
                required: 'DNI requerido',
                pattern: {
                    value: pattern,
                    message: 'Solo números.'
                }
            })
        }}
        required={false}
    />

export default DniInput