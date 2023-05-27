import Link from 'next/link'

export interface RedirectToProps {
    to: string
    speech: string
    linkText: string
}

export default function RedirectTo({
    to,
    speech,
    linkText
}: RedirectToProps) {

    return <p>{speech} <Link
        href={to}
    >{linkText}</Link>
    </p>
}