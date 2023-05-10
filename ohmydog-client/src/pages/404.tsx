import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AppStore } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function Custom404() {
    const router = useRouter()
    const sessionState = useSelector((store: AppStore) => store.session);

    useEffect(() => {
        router.replace(sessionState?.token ? '/home' : '/signup')
    }, [])
}