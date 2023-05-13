import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'

export default function Home() {
    const user = useSelector((store: AppStore) => store.user)

    return <>Bienvenido {user.rol}</>
}