import { ButtonTypes } from "../../models/types"



const Button = ({children,onClick}:ButtonTypes) => {
  return (
    <button className="m-4 w-10 h-10 text-primary-4" onClick={onClick}>{children}</button>
  )
}

export default Button