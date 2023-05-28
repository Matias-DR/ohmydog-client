import { Select } from '@/components'
import { Appointment } from '@/models/appointment.model'
import {
    FieldError,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<Appointment>
    trigger: UseFormTrigger<Appointment>
    error: FieldError | undefined
}

export default function Reason({
    register,
    trigger,
    error
}: Props) {
    return <Select
    name='reason'
    label='Motivo'
    required
    register={register}
    trigger={trigger}
    error={error}
    registerOptions={{
        validate: (value) => {
            if ([
                'Chequeo médico',
                'Vacunación',
                'Castración',
                'Tratamiento de enfermedades'
            ]
                .includes(value))
                return true
            else
                return 'Campo inválido'
        }
    }}
    options={[
        {
            value: 'Chequeo médico',
            label: 'Chequeo médico'
        },
        {
            value: 'Vacunación',
            label: 'Vacunación'
        },
        {
            value: 'Castración',
            label: 'Castración'
        },
        {
            value: 'Tratamiento de enfermedades',
            label: 'Tratamiento de enfermedades'
        }
    ]}
/>
}