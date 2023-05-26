import { AppbarContent } from './components'
import {
    StyledAppbar,
    StyledAppbarContainer,
    StyledAppbarChildrenContainer
} from './styled-components/appbar.styled-components'
import { SessionContext } from '@/contexts/session.context'
import { useRouter } from 'next/router'
import { useContext } from 'react'

export interface Props {
    children: React.ReactNode
}

export default function Appbar(props: Props) {
    const { user } = useContext(SessionContext)
    const router = useRouter()

    return <StyledAppbar>
        {
            ['/signup', '/signin'].includes(router.asPath) ?
                null
                : <StyledAppbarContainer>
                    <AppbarContent />
                </StyledAppbarContainer>
        }
        <StyledAppbarChildrenContainer
            height={
                ['/signup', '/signin'].includes(router.asPath) ?
                    '100vh'
                    : '91vh'
            }
        >
            {props.children}
        </StyledAppbarChildrenContainer>
    </StyledAppbar>
}