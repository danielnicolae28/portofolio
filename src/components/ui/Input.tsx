type InputPropsType = {
    type:string,
    placeholder:string,
    labelInfo:string,
}


const Input = ({type,placeholder,labelInfo}:InputPropsType) => {
  return (
    <>
   <label htmlFor="">{labelInfo}</label>
   <input type={type} placeholder={placeholder}  className="w-1/2 h-11 text-xl border"/>
    </>
  )
}

export default Input