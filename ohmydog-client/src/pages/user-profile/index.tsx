import {
    StyledMain,
    UserSection,
    StyledSeparator,
    PetsSection,
} from './styled-components/styled-components'
import { StyledTitle } from '@/styled-components/form.styled-components'
import {
    UserForm,
    PetList
} from './components'

export default function UserProfile() {
    return <StyledMain>
        <UserSection>
            <UserForm></UserForm>
        </UserSection>
        <StyledSeparator />
        <PetsSection>
            <StyledTitle>Mascotas</StyledTitle>
            <PetList></PetList>
        </PetsSection>
    </StyledMain>
}