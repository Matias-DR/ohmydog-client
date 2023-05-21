import { SessionContext } from '@/contexts/session.context'
import { useRouter } from 'next/router'
import { useContext } from 'react'

export default function Home() {
    const { user } = useContext(SessionContext)
    const router = useRouter()

    return <>Bienvenido {user.rol}</>
}