import { ColorPattern } from '@/models/patterns.model'
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

const PetColorInput = ({
    register,
    errors,
    trigger,
    pattern = ColorPattern,
    defaultValue = ''
}: Props) => <Input
        name='petcolor'
        register={register}
        errors={errors}
        label='Color'
        type={InputType.TEXT}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('petcolor', {
                required: 'Campo requerido',
                pattern: {
                    value: pattern,
                    message: 'Solo letras.'
                }
            })
        }}
        required={false}
    />

export default PetColorInput