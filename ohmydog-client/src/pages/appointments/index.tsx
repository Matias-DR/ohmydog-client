import {
    StyledMain,
    StyledGrid,
    StyledGridItem,
} from './styled-components/styled-components'
import {
    DatePicker,
    ReasonInput,
    TimePicker,
    Summary
} from './components'

export default function Appointments() {
    return <StyledMain>
        <StyledGrid container>
            <StyledGridItem xs={12} sm={6}>
                <ReasonInput />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={6}>
                <DatePicker />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={6}>
                <TimePicker />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={6}>
                <Summary />
            </StyledGridItem>
        </StyledGrid>
    </StyledMain>
}