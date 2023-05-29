import { ListItem } from '.'
import { useEffect } from 'react'
import { Appointment } from '@/models/appointment.model'
import { StyledList } from '../styled-components/list.styled-components'

export interface Props {
    appointments: Appointment[]
    icon: React.ReactNode
    isPending?: boolean
    isCient?: boolean
    acceptAppointment?: (id: number) => void
    rejectAppointment?: (id: number) => void
    cancelAppointment?: (id: number) => void
}

export default function List({
    appointments,
    icon,
    isPending = false,
    isCient = false,
    acceptAppointment,
    rejectAppointment,
    cancelAppointment
}: Props) {
    useEffect(() => { }, [])

    return <StyledList>
        {
            appointments.map((appointment: Appointment) =>
                <ListItem
                    appointment={appointment}
                    icon={icon}
                    isPending={isPending}
                    isCient={isCient}
                    acceptAppointment={acceptAppointment}
                    rejectAppointment={rejectAppointment}
                />
            )
        }
    </StyledList>
}