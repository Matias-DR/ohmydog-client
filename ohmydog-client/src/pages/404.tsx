import { SessionContext } from '@/contexts/session.context';
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

export default function Custom404() {
    const router = useRouter()
    const { token } = useContext(SessionContext);

    useEffect(() => {
        router.replace(token ? '/home' : '/signin')
    }, [])
}