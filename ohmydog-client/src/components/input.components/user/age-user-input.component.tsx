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
    defaultValue = ''
}: Props) => <Input
        name='age'
        register={register}
        errors={errors}
        label='Edad'
        type={InputType.NUMBER}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('age', {
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