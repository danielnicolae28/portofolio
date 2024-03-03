import { ButtonTypes } from "../../models/types"

const Toggle = ({onClick}:ButtonTypes) => {
  return (
    <button onClick={onClick} className="md:none">

<div className="w-5 m-1 h-1 bg-primary-1"></div>
<div className="w-5 m-1 h-1 bg-primary-1"></div>
<div className="w-5 m-1 h-1 bg-primary-1"></div>


    </button>
  )
}

export default Toggle