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

const PetAgeInput = ({
    register,
    errors,
    trigger,
    pattern = AgePattern,
    defaultValue = ''
}: Props) => <Input
        name='petage'
        register={register}
        errors={errors}
        label='Edad'
        type={InputType.NUMBER}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('petage', {
                // required: 'Campo requerido',
                pattern: {
                    value: pattern,
                    message: 'Edad inválida'
                }
            })
        }}
        required={false}
    />

export default PetAgeInput