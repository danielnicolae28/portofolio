import { useState } from "react"
import Footer from "../components/Footer"
import Button from "../components/ui/Button"
import Skills from "../components/experience/Skills";
import ExperienceTab from "../components/experience/ExperienceTab";

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
    
    
    <div className="py-20 w-full h-screen bg-slate-500  flex justify-center mb-20">
      <div className=" flex flex-col items-center justify-start bg-slate-50 md:w-1/2 md:h-1/2  ">
        <div>

    <Button onClick={selectionHandler} selected={selected} types="skills">Skills</Button>
    <Button onClick={selectionHandler} selected={selected} types="experience">Experience</Button>
        </div>
        <div className="my-20">
{selected ? <Skills/> : <ExperienceTab/>}
        </div>
      </div>
    </div>    
  {/* <Footer/> */}
    </>
  )
}

export default Experience