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
    weekend?: boolean
    past?: boolean
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
    weekend = true,
    past = true
}: Props) {
    const handleChange = (value: Dayjs | null) => {
        try {
            if (value && value.isValid()) {
                const date = value.format('DD/MM/YYYY')
                setValue && setValue(name, date)
            } else {
                setValue && setValue(name, '')
            }
            trigger && trigger(name)
        } catch {
            setValue && setValue(name, '')
        }
    }

    const validate = (date: any) => {
        try {
            if (date) {
                const dayjsDate = dayjs(date, 'DD/MM/YYYY')
                // Si la fecha es válida
                if (dayjsDate.isValid()) {
                    // Si la fecha es menor o igual a hoy
                    if (
                        dayjsDate.isSame(dayjs(), 'day') ||
                        dayjsDate.isBefore(dayjs(), 'day')
                    ) {
                        // Si no están habilitadas fechas pasadas
                        if (!past) {
                            // trigger && trigger(name)
                            return `No se puede seleccionar una fecha pasada o
                            igual a hoy`
                        }
                        // Si están habilitadas fecha pasadas
                        else {
                            return true
                        }
                    }
                    // Si la fecha es mayor a hoy
                    else {
                        // Si están habilitadas fechas pasadas (están habilidatas fechas futuras)
                        if (past) {
                            // trigger && trigger(name)
                            return `No se puede seleccionar una fecha mayor a hoy`
                        }
                        // Si no están habilitados fines de semana
                        if (!weekend) {
                            const day = dayjsDate.day()
                            if (day === 0 || day === 6) {
                                // trigger && trigger(name)
                                return 'No trabajamos fines de semana'
                            }
                        }
                        // Si están habilitados fines de semana
                        else {
                            return true
                        }
                    }
                }
            }
            return true
        } catch {
            return 'Fecha inválida'
        }
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                    id={name}
                    label={label}
                    required={required}
                    disabled={disabled}
                    format='DD/MM/YYYY'
                    disableFuture={past}
                    disablePast={!past}
                    onChange={handleChange}
                    defaultValue={defaultValue}
                    fullWidth
                    slotProps={{
                        textField: {
                            error: !!error?.message,
                            helperText: error?.message
                        }}}
                />
            </LocalizationProvider>
    )
}