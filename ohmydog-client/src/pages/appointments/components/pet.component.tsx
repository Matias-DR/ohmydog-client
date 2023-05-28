import { Select } from '@/components'
import { Appointment } from '@/models/appointment.model'
import {
    FieldError,
    UseFormRegister,
    UseFormTrigger
} from 'react-hook-form'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'

export interface Props {
    register: UseFormRegister<Appointment>
    trigger: UseFormTrigger<Appointment>
    error: FieldError | undefined
}

export default function Pet({
    register,
    trigger,
    error
}: Props) {
    const pets = useContext(SessionContext).getPets()
    return <Select
        name='petId'
        label='Mascota'
        required
        register={register}
        trigger={trigger}
        error={error}
        registerOptions={{
            validate: (value) => {
                if (pets.map(pet => pet.id.toString())
                    .includes(value))
                    return true
                else
                    return 'Campo inválido'
            }
        }}
        options={pets.map(pet => {
            return {
                value: pet.id.toString(),
                label: pet.name
            }
        })}
    />
}