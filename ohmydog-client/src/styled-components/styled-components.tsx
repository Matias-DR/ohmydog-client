import styled from '@emotion/styled'

const Main = styled.main`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`

const Overflow = styled.div`
    width: 100%;
    height: 100%;
`

export const StyledMain = styled.main`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`

export const StyledTitle = styled.h1`
    font-size: 1.3rem;
    color: var(--ohmydog-lightblue-color);
`