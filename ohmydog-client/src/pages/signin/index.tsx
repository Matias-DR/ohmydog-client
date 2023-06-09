import {
    StyledSection,
    StyledImage,
    StyledTitle,
} from '@/styled-components/form.styled-components'
import { StyledMain } from './styled-components'
import ohmydogB64Image from '@/assets/images/ohmydog.b64image'
import { SigninForm } from './signin-form.component'
import { RedirectTo } from '@/components'

export default function Signup() {
    return <StyledMain>
        <StyledSection>
            <StyledImage
                src={ohmydogB64Image}
                alt="Oh My Dog!"
            />
            <StyledTitle>
                INICIO DE SESIÓN
            </StyledTitle>
            <SigninForm />
            <RedirectTo
                to="/signup"
                speech="¿No tiene cuenta?"
                linkText="Regístrese"
            />
        </StyledSection >
    </StyledMain>
}