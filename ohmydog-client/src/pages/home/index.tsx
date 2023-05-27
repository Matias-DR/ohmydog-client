import { SessionContext } from '@/contexts/session.context'
import { useContext } from 'react'

export default function Home() {
    const { getUser } = useContext(SessionContext)
    const { role } = getUser()

    return <>Bienvenido {role}</>
}