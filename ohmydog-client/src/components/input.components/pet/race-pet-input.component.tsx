import { NamePattern } from '@/models/patterns.model'
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

const PetRaceInput = ({
    register,
    errors,
    trigger,
    pattern = NamePattern,
    defaultValue = ''
}: Props) => <Input
        name='petrace'
        register={register}
        errors={errors}
        label='Raza'
        type={InputType.TEXT}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('petrace', {
                required: 'Campo requerido',
                pattern: {
                    value: pattern,
                    message: 'Solo letras y espacios.'
                }
            })
        }}
        required={false}
    />

export default PetRaceInput