import styled from '@emotion/styled'

export const StyledAppbar = styled.div`
    height: 100vh;
    width: 100vw;
`

export const StyledAppbarContainer = styled.div`
    height: 9vh;
`

interface StyledAppbarChildrenContainerProps {
    height: string
}

export const StyledAppbarChildrenContainer = styled.div<StyledAppbarChildrenContainerProps>`
    height: ${props => props.height};
`