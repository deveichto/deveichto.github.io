import Link from "next/link"

const NavLinks = ({
    url,
    className, 
    ...props
}) => {
    return (
        <li><Link href={url} className={`${className} font-Ovo`} {...props} /></li>
    )
}

export default NavLinks
