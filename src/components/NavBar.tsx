import LinkComponent from "./ui/LinkComponent"
import Toggle from "./ui/Toggle";
import { useState } from "react";


const NavBar = () => {

  const [toggleHandle,setToggleHandle] = useState<boolean>(true);


  const onToggleHandler = ():void=>{
    setToggleHandle(!toggleHandle);
  }

  return (
    <div className="w-full border-b border-primary-1 flex flex-col items-start bg-primary-2" >
    <Toggle onClick={onToggleHandler}/>
    {
toggleHandle &&
      <ul>
        <LinkComponent to="/">Home</LinkComponent>
        <LinkComponent to="about">About</LinkComponent>
        <LinkComponent to="work">Work</LinkComponent>
        <LinkComponent to="experience">Experience</LinkComponent>
        <LinkComponent to="contact">Contact</LinkComponent>

    </ul>
    
    }
    
    </div>
  )
}

export default NavBar;