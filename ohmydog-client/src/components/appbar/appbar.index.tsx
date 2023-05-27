import { AppbarContent } from './components'
import {
    StyledAppbar,
    StyledAppbarContainer,
    StyledAppbarChildrenContainer
} from './styled-components/appbar.styled-components'
import { useRouter } from 'next/router'

export interface Props {
    children: React.ReactNode
}

export default function Appbar(props: Props) {
    const router = useRouter()
    const actualPath = new RegExp(`^.*(signup|signin).*$`).test(router.asPath)

    return <StyledAppbar>
        {
            actualPath ?
                null
                : <StyledAppbarContainer>
                    <AppbarContent />
                </StyledAppbarContainer>
        }
        <StyledAppbarChildrenContainer
            height={
                actualPath ?
                    '100vh'
                    : '91vh'
            }
        >
            {props.children}
        </StyledAppbarChildrenContainer>
    </StyledAppbar>
}