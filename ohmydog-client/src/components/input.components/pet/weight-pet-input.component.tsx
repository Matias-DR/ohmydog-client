import { WeightPattern } from '@/models/patterns.model'
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

const PetWeightInput = ({
    register,
    errors,
    trigger,
    pattern = WeightPattern,
    defaultValue = '10'
}: Props) => <Input
        name='pet.peso'
        register={register}
        errors={errors}
        label='Peso (kg)'
        type={InputType.NUMBER}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('pet.peso', {
                required: 'Campo requerido',
                pattern: {
                    value: pattern,
                    message: 'Valor inválido.'
                }
            }),
            step: '0.1'
        }}
        required={false}
    />

export default PetWeightInput