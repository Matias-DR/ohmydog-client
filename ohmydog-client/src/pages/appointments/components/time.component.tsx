
import { Select } from '@/components'
import { Appointment } from '@/models/appointment.model'
import {
    UseFormRegister,
    UseFormTrigger,
    FieldError
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<Appointment>
    trigger: UseFormTrigger<Appointment>
    error: FieldError | undefined
}

const times = [
    { value: '08:00', label: '08:00' },
    { value: '08:30', label: '08:30' },
    { value: '09:00', label: '09:00' },
    { value: '09:30', label: '09:30' },
    { value: '10:00', label: '10:00' },
    { value: '10:30', label: '10:30' },
    { value: '11:00', label: '11:00' },
    { value: '11:30', label: '11:30' },
    { value: '12:00', label: '12:00' },
    { value: '12:30', label: '12:30' },
    { value: '13:00', label: '13:00' },
    { value: '13:30', label: '13:30' },
    { value: '14:00', label: '14:00' },
    { value: '14:30', label: '14:30' },
    { value: '15:00', label: '15:00' },
    { value: '15:30', label: '15:30' },
    { value: '16:00', label: '16:00' },
    { value: '16:30', label: '16:30' },
    { value: '17:00', label: '17:00' },
    { value: '17:30', label: '17:30' },
    { value: '18:00', label: '18:00' },
    { value: '18:30', label: '18:30' },
    { value: '19:00', label: '19:00' },
    { value: '19:30', label: '19:30' }
]

export default function Time({
    register,
    trigger,
    error
}: Props) {
    return <Select
        name='time'
        label='Horario'
        required
        register={register}
        trigger={trigger}
        error={error}
        registerOptions={{
            validate: (value) => {
                if (times.map(time => time.value)
                    .includes(value))
                    return true
                else
                    return 'Campo inválido'
            }
        }}
        options={times}
    />
}