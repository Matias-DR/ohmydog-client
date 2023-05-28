import { Datepicker } from '@/components'
import { Appointment } from '@/models/appointment.model'
import {
    UseFormSetValue,
    UseFormRegister,
    UseFormTrigger,
    FieldError
} from 'react-hook-form'

export interface Props {
    register: UseFormRegister<Appointment>
    trigger: UseFormTrigger<Appointment>
    setValue: UseFormSetValue<Appointment>
    error: FieldError | undefined
}

export default function Date({
    register,
    trigger,
    setValue,
    error
}: Props) {
    return <Datepicker
        name='date'
        label='Fecha'
        setValue={setValue}
        required
        register={register}
        trigger={trigger}
        error={error}
        weekend={false}
        past={false}
    />
}