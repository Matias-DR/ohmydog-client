import {
    StyledMain,
    UserSection,
    StyledSeparator,
    PetsSection,
} from './styled-components/styled-components'
import { StyledTitle } from '@/styled-components/form.styled-components'
import {
    Form,
    PetList
} from './components'

export default function UserProfile() {
    return <StyledMain>
        <UserSection>
            <Form></Form>
        </UserSection>
        <StyledSeparator />
        <PetsSection>
            <StyledTitle>Mascotas</StyledTitle>
            <PetList></PetList>
        </PetsSection>
    </StyledMain>
}