import {
    StyledSection,
    StyledImage,
    StyledTitle
} from '@/styled-components/form.styled-components'
import { StyledMain } from './styled-components'
import ohmydogB64Image from '@/assets/images/ohmydog.b64image'
import { Form } from './components'
import { RedirectTo } from '@/components'

export default function Signup() {

    return <StyledMain>
        <StyledSection>
            <StyledImage
                src={ohmydogB64Image}
                alt="Oh My Dog!"
            />
            <StyledTitle>
                CREACIÓN DE CUENTA
            </StyledTitle>
            <Form />
        </StyledSection >
        <RedirectTo
            to="/signin"
            speech="¿Ya tiene cuenta?"
            linkText="Inicie sesión"
        />
    </StyledMain>
}