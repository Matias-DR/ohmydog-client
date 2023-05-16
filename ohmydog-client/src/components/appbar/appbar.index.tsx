import {
    StyledAppbar,
    StyledAppbarContainer,
    StyledAppbarChildrenContainer
} from './styled-components/appbar.styled-components'
import {
    AppbarAnonymousContent,
    AppbarClientContent,
    AppbarVetContent
} from '../'
import { User } from '@/models/user.model'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

export interface Props {
    children: React.ReactNode
}

export default function Appbar(props: Props) {
    const user: User = useSelector((state: AppStore) => state.user)
    const router = useRouter()

    return <StyledAppbar>
        {
            ['/signup', '/signin'].includes(router.asPath) ?
                null
                : <StyledAppbarContainer>
                    {
                        user.rol === 'Anonimo' ?
                            <AppbarAnonymousContent></AppbarAnonymousContent>
                            : user.rol === 'Cliente' ?
                                <AppbarClientContent
                                    user={user}
                                ></AppbarClientContent>
                                : <AppbarVetContent
                                    user={user}
                                ></AppbarVetContent>
                    }
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