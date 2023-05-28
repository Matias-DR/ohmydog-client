import { Appointment } from '../../../models/appointment.model'
import {
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    FormHelperText,
} from '@mui/material'
import {
    FieldError,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { SessionContext } from '@/contexts/session.context'
import { Pet } from '@/models/pet.model'

export interface Props {
    register: UseFormRegister<Appointment>
    error?: FieldError
}

export default function PetPicker({
    register,
    error,
}: Props) {
    const { pets } = useContext(SessionContext)
    const petIds = pets.map(pet => pet.id)

    return <FormControl fullWidth error={!!error}>
        < InputLabel id='pet-label'>
            Mascota
        </InputLabel>
        <Select
            id='pet'
            labelId='pet-label'
            label='Mascota'
            defaultValue={-1}
            {...(register && register(
                'petId',
                {
                    required: 'Campo requerido',
                    validate: (value: number) => {
                        return petIds.includes(value)
                    },
                },
            ))}
            fullWidth
        >
            <MenuItem
                key='default-pet'
                value={-1}
                selected
            >
                Seleccione la mascota
            </MenuItem>
            {
                pets.map((pet: Pet) => <MenuItem
                    key={pet.nombre}
                    value={pet.id}
                >
                    {pet.nombre}
                </MenuItem>)
            }
        </Select>
        <FormHelperText>
            {!!error && 'Debe seleccionar la mascota'}
        </FormHelperText>
    </FormControl>
}