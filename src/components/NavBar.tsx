import LinkComponent from "./ui/LinkComponent"
import Bars from "./ui/Bars";

import { useState } from "react";


const NavBar = () => {

  const [toggleHandle,setToggleHandle] = useState<boolean>(false);


  const onToggleHandler = ():void=>{
    setToggleHandle(!toggleHandle);
  }

  return (
    <div className="w-full border-b border-primary-1 flex flex-col items-start bg-primary-2">
    <Bars onClick={onToggleHandler}/>
    {
toggleHandle &&
      <ul className={`m-5 transition-all ${toggleHandle ? 'transition-all duration-1000 ease-out	': 'transition-all duration-1000	ease-in'}`}>
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