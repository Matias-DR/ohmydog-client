import { AgePattern } from '@/models/patterns.model'
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

const AgeInput = ({
    register,
    errors,
    trigger,
    pattern = AgePattern,
    defaultValue = '18'
}: Props) => <Input
        name='user.edad'
        register={register}
        errors={errors}
        label='Edad'
        type={InputType.NUMBER}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('user.edad', {
                required: 'Edad requerida',
                pattern: {
                    value: pattern,
                    message: 'Solo números.'
                }
            })
        }}
        required={false}
    />

export default AgeInput