import { SexPattern } from '@/models/patterns.model'
import {
    SelectInput
} from '../select.component'
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
    defaultValue?: string,
    value: string,
    onChange: (e: any) => void,
}

const PetSexInput = ({
    register,
    errors,
    trigger,
    pattern = SexPattern,
    defaultValue = '',
    value,
    onChange,
}: Props) => <SelectInput
        value={value}
        name='petsex'
        register={register}
        errors={errors}
        defaultValue={defaultValue}
        trigger={trigger}
        inputProps={{
            ...register('petsex', {
                required: 'Campo requerido',
                pattern: {
                    value: pattern,
                    message: 'Seleccione una opción'
                }
            })
        }}
        required={false}
        onChange={onChange}
        labelId={'petsex-label'}
        label={'Sexo'}
        options={['Hembra', 'Macho']}
    />

export default PetSexInput