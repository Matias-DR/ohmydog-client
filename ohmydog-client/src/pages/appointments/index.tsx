import {
    StyledMain,
    StyledGrid,
    StyledGridItem,
    StyledSubmitButton,
} from './styled-components/styled-components'
import {
    Date,
    Reason,
    Time,
    Summary,
    Pet
} from './components'
import {
    AppointmentForm,
    StyledFormSection,
    StyledFieldset,
} from './styled-components/appointment-form.styled-components'
import {
    StyledLegend,
    StyledTitle,
} from '@/styled-components/form.styled-components'
import { useForm } from 'react-hook-form'
import { useFetchAndLoad } from '@/hooks/use-fetch-and-load.hook'
import { Appointment } from '@/models/appointment.model'
import { appointmentService } from './appointment.service'
import { SnackbarUtilities } from '@/utilities/snackbar.utility'

export default function Appointments() {
    const {
        handleSubmit,
        register,
        trigger,
        formState: { errors },
        setValue,
        watch
    } = useForm<Appointment>()
    const {
        loading,
        callEndpoint
    } = useFetchAndLoad()

    const onSubmit = (data: any) => {
        callEndpoint(appointmentService(data))
            .then((res) => SnackbarUtilities.success(res.data.message))
            .catch((err) => SnackbarUtilities.error(err.response.data.message))
    }

    return <StyledMain>
        <StyledFormSection>
            <AppointmentForm
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <StyledFieldset>
                    <StyledLegend>
                        <StyledTitle>SOLICITUD DE TURNO</StyledTitle>
                    </StyledLegend>
                    <StyledGrid container>
                        <StyledGridItem xs={12} sm={6}>
                            <StyledGridItem xs={12}>
                                <Reason
                                    register={register}
                                    trigger={trigger}
                                    error={errors.reason}
                                />
                            </StyledGridItem>
                            <StyledGridItem xs={12}>
                                <Pet
                                    register={register}
                                    trigger={trigger}
                                    error={errors.petId}
                                />
                            </StyledGridItem>
                        </StyledGridItem>
                        <StyledGridItem xs={12} sm={6}>
                            <StyledGridItem xs={12}>
                                <Date
                                    register={register}
                                    trigger={trigger}
                                    setValue={setValue}
                                    error={errors.date}
                                />
                            </StyledGridItem>
                            <StyledGridItem xs={12}>
                                <Time
                                    register={register}
                                    trigger={trigger}
                                    error={errors.time}
                                />
                            </StyledGridItem>
                        </StyledGridItem>
                        {/* <StyledGridItem xs={12}>
                            <Input
                                name='comment'
                                label='Comentario'
                                type={InputType.TEXT}
                                register={register}
                                trigger={trigger}
                                multiline
                                rows={3}
                            />
                        </StyledGridItem> */}
                        <StyledGridItem xs={12}>
                            <Summary watch={watch} />
                        </StyledGridItem>
                        <StyledGridItem xs={12}>
                            <StyledSubmitButton
                                type='submit'
                                variant='contained'
                                loading={loading}
                            >
                                Solicitar Turno
                            </StyledSubmitButton>
                        </StyledGridItem>
                    </StyledGrid>
                </StyledFieldset>
            </AppointmentForm>
        </StyledFormSection>
    </StyledMain >
}