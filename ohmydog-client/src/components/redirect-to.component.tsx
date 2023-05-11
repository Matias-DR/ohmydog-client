import { useRouter } from "next/router"

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

    return <p>{props.speech} <a
        href="#"
        onClick={handleClick}
    >{props.linkText}</a>
    </p>
}