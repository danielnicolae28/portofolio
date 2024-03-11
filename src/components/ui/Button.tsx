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
  defaultClass = defaultClass+ "border m-8 pointer rounded px-6 text-3xl bg-red-500 font-medium"
}

  return ( 
    <button className={`${defaultClass}`} onClick={onClick}>{children}</button>
   
  )
}

export default Button