import {
    StyledSection,
    StyledImage,
} from '@/styled-components/form.styled-components'
import {
    StyledMain,
    StyledTitle,
} from '@/styled-components/styled-components'
import ohmydogB64Image from '@/assets/images/ohmydog-b64-image'
import { Form } from './components'
import { RedirectTo } from '@/components'

export default function Signup() {
    return <StyledMain>
        <StyledSection>
            <StyledImage
                src={`data:image/jpeg;base64,${ohmydogB64Image}`}
                alt="Oh My Dog!"
            />
            <StyledTitle>
                INICIO DE SESIÓN
            </StyledTitle>
            <Form />
        </StyledSection >
        <RedirectTo
            to="/signup"
            speech="¿No tiene cuenta?"
            linkText="Regístrese"
        />
    </StyledMain>
}