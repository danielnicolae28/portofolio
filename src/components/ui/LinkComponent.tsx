import { Link } from "react-router-dom"

type LinkComponentProps = {
    to:string,
    children:string
}

const LinkComponent = ({to,children}:LinkComponentProps) => {
  return (
    <li>

    <Link to={`${to}`} className="text-lg m-3">{children}</Link>
    </li>
  )
}

export default LinkComponent;