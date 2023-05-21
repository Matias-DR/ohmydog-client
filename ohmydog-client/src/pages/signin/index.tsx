import {
    StyledSection,
    StyledImage,
    StyledTitle,
} from '@/styled-components/form.styled-components'
import { StyledMain } from './styled-components'
import ohmydogB64Image from '@/assets/images/ohmydog.b64image'
import { Form } from './components'
import { RedirectTo } from '@/components'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Signup() {
    const router = useRouter()
    const session = useSelector((store: AppStore) => store.session)

    useEffect(() => {
        if (session.token) {
            router.replace('/home')
        }
    }, [])
    return <StyledMain>
        <StyledSection>
            <StyledImage
                src={ohmydogB64Image}
                alt="Oh My Dog!"
            />
            <StyledTitle>
                INICIO DE SESIÓN
            </StyledTitle>
            <Form />
            <RedirectTo
                to="/signup"
                speech="¿No tiene cuenta?"
                linkText="Regístrese"
            />
        </StyledSection >
    </StyledMain>
}