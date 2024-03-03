import { ButtonTypes } from "../../models/types"



const Button = ({children,onClick}:ButtonTypes) => {
  return (
    <button className="m-4 text-lg font-mono " onClick={onClick}>{children}</button>
  )
}

export default Button