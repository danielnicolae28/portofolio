import { useState } from "react"
import Footer from "../components/Footer"
import Button from "../components/ui/Button"
import Skills from "../components/Skills";
import ExperienceTab from "../components/ExperienceTab";

const Experience = () => {
const [selected,setSelected] = useState<boolean>(true);

const selectionHandler = ()=>{
setSelected(!selected)
}
// const selectionHandlerExperience = ()=>{
// setSelected(false)
// }




  return (
    <>
    
    
    <div className="py-20 w-full h-screen bg-slate-500  flex justify-center ">
      <div className=" flex flex-col items-center justify-start bg-slate-50 md:w-1/2 md:h-1/2 mdabsolute top-1/4 ">
        <div>

    <Button onClick={selectionHandler} selected={selected}>Skills</Button>
    <Button onClick={selectionHandler} selected={selected}>Experience</Button>
        </div>
        <div className="my-20">
{selected ? <Skills/> : <ExperienceTab/>}
        </div>
      </div>
    </div>    
  <Footer/>
    </>
  )
}

export default Experience