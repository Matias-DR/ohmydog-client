import { TextFieldPattern } from '@/models/patterns.model'
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

const PetCaracteristicsInput = ({
    register,
    errors,
    trigger,
    pattern = TextFieldPattern,
    defaultValue = 'Ejemplo'
}: Props) => <Input
        name='pet.caracteristica'
        register={register}
        errors={errors}
        label='Características'
        type={InputType.TEXT}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('pet.caracteristica', {
                // required: 'Campo requerido',
                pattern: {
                    value: pattern,
                    message: 'Solo letras, números y espacios.'
                }
            })
        }}
        required={false}
    />

export default PetCaracteristicsInput