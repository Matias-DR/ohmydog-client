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
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'

export default function UserProfile() {
    const { role } = useContext(SessionContext).getUser()

    return <StyledMain>
        <UserSection>
            <UserForm></UserForm>
        </UserSection>
        {
            role === 'Cliente' &&
            <StyledSeparator />
        }
        {
            role === 'Cliente' &&
            <PetsSection>
                <StyledTitle>Mascotas</StyledTitle>
                <PetList></PetList>
            </PetsSection>
        }
    </StyledMain>
}