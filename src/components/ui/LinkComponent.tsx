import { Link } from "react-router-dom"

type LinkComponentProps = {
    to:string,
    children:string
}

const LinkComponent = ({to,children}:LinkComponentProps) => {
  return (
    <li className="m-4 md:m-8">

    <Link to={`${to}`} className="text-lg md:text-2xl   text-primary-1">{children}</Link>
    </li>
  )
}

export default LinkComponent;