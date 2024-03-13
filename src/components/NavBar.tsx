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

     <div className="md:hidden">
    <Bars onClick={onToggleHandler}/>
    {
      toggleHandle &&
      <ul className={`flex flex-col`}>
        <LinkComponent to="/">Home</LinkComponent>
        <LinkComponent to="about">About</LinkComponent>
        <LinkComponent to="work">Work</LinkComponent>
        <LinkComponent to="experience">Experience</LinkComponent>
        <LinkComponent to="contact">Contact</LinkComponent>

    </ul>
    
  }
  </div> 
  <div className="md:block hidden w-full">
  <ul className={`md:flex md:justify-center md:items-center`}>
        <LinkComponent to="/">Home</LinkComponent>
        <LinkComponent to="about">About</LinkComponent>
        <LinkComponent to="work">Work</LinkComponent>
        <LinkComponent to="experience">Experience</LinkComponent>
        <LinkComponent to="contact">Contact</LinkComponent>

    </ul>

  </div>
    
</div>
  )
}

export default NavBar;