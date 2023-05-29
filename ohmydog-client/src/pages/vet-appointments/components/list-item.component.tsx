import { Appointment } from '@/models/appointment.model'
import LI from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { ListItemIcon } from '@mui/material'
import {
    StyledIconButton,
    StyledAcceptAppointmentButton,
    StyledRejectAppointmentButton
} from '../styled-components/list.styled-components'

export interface Props {
    appointment: Appointment
    icon: React.ReactNode
    isPending?: boolean
    isCient?: boolean
    acceptAppointment?: (id: number) => void
    rejectAppointment?: (id: number) => void
    cancelAppointment?: (id: number) => void
}

export default function ListItem({
    appointment,
    icon,
    isPending,
    isCient,
    acceptAppointment,
    rejectAppointment,
    cancelAppointment
}: Props) {
    return <LI
        secondaryAction={
            isPending ?
                !isCient ?
                    <>
                        <StyledIconButton
                            edge='end'
                            onClick={() => {
                                acceptAppointment &&
                                    acceptAppointment(appointment.id)
                            }}
                        >
                            <StyledAcceptAppointmentButton />
                        </StyledIconButton>
                        <StyledIconButton
                            edge='end'
                            onClick={() => {
                                rejectAppointment &&
                                    rejectAppointment(appointment.id)
                            }}
                        >
                            <StyledRejectAppointmentButton />
                        </StyledIconButton>
                    </>
                    :
                    <StyledIconButton
                        edge='end'
                        onClick={() => {
                            cancelAppointment &&
                                cancelAppointment(appointment.id)
                        }}
                    >
                        <StyledRejectAppointmentButton />
                    </StyledIconButton>
                : null
        }
    >
        <ListItemIcon
        >
            {icon}
        </ListItemIcon>
        <ListItemText
            primary={
                appointment.date +
                ' - ' +
                appointment.time
            }
            secondary={
                appointment.username +
                ' - ' +
                appointment.petname
            }
        />
    </LI>
}