import { Link } from "react-router-dom"

type LinkComponentProps = {
    to:string,
    children:string
}

const LinkComponent = ({to,children}:LinkComponentProps) => {
  return (
    <Link to={`${to}`} className="text-lg">{children}</Link>
  )
}

export default LinkComponent;