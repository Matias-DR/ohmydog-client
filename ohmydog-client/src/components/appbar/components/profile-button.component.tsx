import {
    StyledProfileButton,
    StyledProfileButtonLink,
    StyledProfileButtonIcon,
} from '../styled-components/profile-button.styled-component'

export interface Props {
    username: string
}

export default function ProfileButton(props: Props) {
    return <StyledProfileButton
        variant='outlined'
    >
        <StyledProfileButtonLink href={'/user-profile'}>
            <StyledProfileButtonIcon />
            {props.username}
        </StyledProfileButtonLink>
    </StyledProfileButton>
}