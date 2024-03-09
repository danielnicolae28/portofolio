import { ButtonTypes } from "../../models/types"



const Button = ({children,onClick,selected,types}:ButtonTypes) => {

  let defaultClass:string ="mx-10 p-2 cursor-pointer text-primary-4  text-3xl "




  if(selected === true && types === "skills"){
defaultClass = defaultClass + "border-b"
  }
  if(selected === false && types  === "experience"){
    defaultClass = defaultClass + "border-b"
  }


  return ( 
    <button className={`${defaultClass}`} onClick={onClick}>{children}</button>
   
  )
}

export default Button