import { ButtonTypes } from "../../models/types"



const Button = ({children,onClick,selected,types}:ButtonTypes) => {

  let defaultClass:string ="mx-10 p-2 cursor-pointer text-primary-4  text-3xl "




  if(selected === true && types === "skills"){
defaultClass = defaultClass + "border-b"
  }
  if(selected === false && types  === "experience"){
    defaultClass = defaultClass + "border-b"
  }
if(types === 'submitForm'){
  defaultClass = defaultClass+ "border m-12 pointer rounded px-6 text-3xl  font-medium w-48 h-14 "
}

  return ( 
    <button className={`${defaultClass}`} onClick={onClick}>{children}</button>
   
  )
}

export default Button