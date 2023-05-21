import { StyledList } from '@/styled-components/pet-card-list.styled-components'
import { AddPet, PetCard } from './'
import { useEffect } from 'react'
import { useContext } from 'react'
import { SessionContext } from '@/contexts/session.context'

export default function PetList() {
    const { pets } = useContext(SessionContext)

    useEffect(() => { }, [pets])

    return <StyledList container spacing={1}>
        <AddPet />
        {pets.map((pet: any, index) => <PetCard
            pet={pet}
            index={index}
            key={index}
        />)}
    </StyledList>
}