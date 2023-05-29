import { StyledMain } from '@/styled-components/styled-components'
import {
    StyledGrid,
    StyledGridItem
} from './styled-components/styled-components'
import React, {
    useEffect,
    useState
} from 'react'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import {
    acceptAppointmentService,
    getAllAppointmentsService,
    rejectAppointmentService
} from './services'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'
import { Appointment } from '@/models/appointment.model'
import { List } from './components'
import {
    StyledAcceptedIcon,
    StyledRejectedIcon,
    StyledPendingIcon
} from './styled-components/list.styled-components'
import { StyledTitle } from './styled-components/styled-components'

export default function VetAppointments() {
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()
    const [
        pendingAppointments,
        setPendingAppointments
    ] = useState<Appointment[]>([])
    const [
        acceptedAppointments,
        setAcceptedAppointments
    ] = useState<Appointment[]>([])
    const [
        rejectedAppointments,
        setRejectedAppointments
    ] = useState<Appointment[]>([])
    const [appointmentsUpdated, setAppointmentsUpdated] = useState(false)

    useEffect(() => {
        callEndpoint(getAllAppointmentsService())
            .then((res) => {
                const appointments: Appointment[] = res.data
                setPendingAppointments(appointments
                    .filter((appointment: Appointment) =>
                        appointment.status === 'Reservado'
                    ))
                setAcceptedAppointments(appointments
                    .filter((appointment: Appointment) =>
                        appointment.status === 'Confirmado'
                    ))
                setRejectedAppointments(appointments
                    .filter((appointment: Appointment) =>
                        appointment.status === 'Rechazado'
                    ))
            })
            .catch((err) => {
                try {
                    SnackbarUtilities.error(err.response.data.message)
                }
                catch (err) { }
            })
    }, [appointmentsUpdated])

    const acceptAppointment = (id: number) => {
        callEndpoint(acceptAppointmentService(id))
        .then(() => setAppointmentsUpdated(true))
        .catch((err) => {
            const message = err.response.data.message
            SnackbarUtilities.error(message)
        })
    }

    const rejectAppointment = (id: number) => {
        callEndpoint(rejectAppointmentService(id))
        .then(() => setAppointmentsUpdated(true))
        .catch((err) => {
            const message = err.response.data.message
            SnackbarUtilities.error(message)
        })
    }

    return <StyledMain>
        <StyledGrid container spacing={2}>
            <StyledGridItem xs={12} sm={4}>
                <StyledTitle>Turnos Pendientes</StyledTitle>
                <List
                    appointments={pendingAppointments}
                    icon={<StyledPendingIcon />}
                    isPending={true}
                    acceptAppointment={acceptAppointment}
                    rejectAppointment={rejectAppointment}
                />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={4}>
                <StyledTitle>Turnos Aceptados</StyledTitle>
                <List
                    appointments={acceptedAppointments}
                    icon={<StyledAcceptedIcon />}
                />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={4}>
                <StyledTitle>Turnos Rechazados</StyledTitle>
                <List
                    appointments={rejectedAppointments}
                    icon={<StyledRejectedIcon />}
                />
            </StyledGridItem>
        </StyledGrid>
    </StyledMain>
}