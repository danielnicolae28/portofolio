import { BarsPropsType } from "../../models/types"

const Bars = ({onClick}:BarsPropsType) => {
  return (
    <div onClick={onClick} className="m-3">
        <div className='w-7 h-1 bg-primary-1 m-1'></div>
        <div className='w-7 h-1 bg-primary-1 m-1'></div>
        <div className='w-7 h-1 bg-primary-1 m-1'></div>
    </div>
  )
}

export default Bars