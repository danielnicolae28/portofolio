import { ChangeEvent } from "react"

type InputPropsType = {
    type:string,
    placeholder:string,
    labelInfo:string,
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void
}


const Input = ({type,placeholder,labelInfo,onChange}:InputPropsType) => {
  return (
    <>
   <label htmlFor="">{labelInfo}</label>
   <input type={type} placeholder={placeholder} onChange={onChange}  className="md:w-1/2 w-96 h-14 text-2xl outline-none border rounded border-x-primary-4 px-2 mx-2 m-1"/>
    </>
  )
}

export default Input