import Link from 'next/link'
import { useRouter } from 'next/router'

export interface RedirectToProps {
    to: string
    speech: string
    linkText: string
}

export default function RedirectTo(props: RedirectToProps) {
    const router = useRouter()

    const handleClick = () => {
        router.replace(props.to)
    }

    return <p>{props.speech} <Link
        href='#'
        onClick={handleClick}
    >{props.linkText}</Link>
    </p>
}