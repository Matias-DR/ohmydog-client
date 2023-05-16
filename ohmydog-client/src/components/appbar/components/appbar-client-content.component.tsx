import {
    ProfileButton,
    SignOutButton,
} from '../../'
import { User } from '@/models/user.model'

export interface Props {
    user: User
}

export default function AppbarClientContent(props: Props) {
    return <>
        <ProfileButton username={props.user.nombre}></ProfileButton>
        <SignOutButton />
    </>
}