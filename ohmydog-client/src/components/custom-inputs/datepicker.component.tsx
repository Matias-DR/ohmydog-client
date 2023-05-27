import {
    FieldError,
    UseFormRegister,
    UseFormSetValue,
    UseFormTrigger,
} from 'react-hook-form'
import {
    FormControl,
    FormHelperText,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateField } from '@mui/x-date-pickers/DateField'
import { LocalizationProvider } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import { useEffect } from 'react'

interface Props {
    name: string
    label: string
    defaultValue?: Dayjs
    required?: boolean
    disabled?: boolean
    register?: UseFormRegister<any>
    trigger?: UseFormTrigger<any>
    setValue?: UseFormSetValue<any>
    error?: FieldError
}

export default function Datepicker({
    name,
    label,
    defaultValue,
    required = false,
    disabled = false,
    register,
    trigger,
    setValue,
    error,
}: Props) {
    const handleChange = (value: Dayjs | null) => {
        if (value && value.isValid()) {
            const date = value.format('DD/MM/YYYY')
            setValue && setValue(name, date)
        } else {
            setValue && setValue(name, '')
        }
        trigger && trigger(name)
    }

    const validate = (date: any) => {
        if (date) {
            const dayjsDate = dayjs(date, 'DD/MM/YYYY')
            if (
                dayjsDate.isValid() &&
                dayjsDate.diff(new Date().toLocaleDateString(), 'days') <= 0
            ) return true
            trigger && trigger(name)
            return 'Fecha inválida'
        }
        return true
    }

    useEffect(() => {
        register && register(
            name,
            {
                required: required ? 'Campo requerido' : false,
                validate
            })
        setValue && setValue(name, defaultValue?.format('DD/MM/YYYY') || '')
    }, [])

    return (
        <FormControl fullWidth error={!!error?.message}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                    id={name}
                    label={label}
                    required={required}
                    disabled={disabled}
                    format='DD/MM/YYYY'
                    disableFuture
                    onChange={handleChange}
                    defaultValue={defaultValue}
                    fullWidth
                />
            </LocalizationProvider>
            <FormHelperText>
                {error?.message ? error.message : ''}
            </FormHelperText>
        </FormControl >
    )
}