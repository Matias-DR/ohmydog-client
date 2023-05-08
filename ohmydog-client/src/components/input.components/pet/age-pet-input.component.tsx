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
    defaultValue = '1'
}: Props) => <Input
        name='pet.edad'
        register={register}
        errors={errors}
        label='Edad'
        type={InputType.NUMBER}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('pet.edad', {
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