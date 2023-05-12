import {
    StyledMain,
    UserSection,
    PetsSection
} from './styled-components'
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
        <PetsSection>
            <StyledTitle>Mis mascotas</StyledTitle>
            <PetList></PetList>
        </PetsSection>
    </StyledMain>
}