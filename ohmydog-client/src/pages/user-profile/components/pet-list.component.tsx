import {
    StyledPetList,
    StyledPetCardContainer
} from '@/styled-components/pet-card.styled-components'

export default function PetList() {
    return <StyledPetList container spacing={1}>
        {[...Array(50)].map((_, index) => <StyledPetCardContainer
            xs={6} sm={4} md={3} lg={2} xl={1}
            key={index}
        ></StyledPetCardContainer>)}
    </StyledPetList>
}