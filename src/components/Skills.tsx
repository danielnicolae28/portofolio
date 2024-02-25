
const Skills = () => {

  const frontEndSkills:string[] =['HTML','CSS',"JavaScript","MaterialUI","Tailwind",'Bootstrap',"SASS",'Responsive design']

  const backEndSkills:string[] = ['NodeJS','Express.JS','PosgrteSQL','SQL','PL/SQL','MongoDB']

  return (
    <>

<div className="flex flex-col">
   
   <div className="m-3 flex">
    <h2 className="border-r mr-2 p-1 border-cyan-700">Front-end</h2>
    <div className="grid grid-cols-4">

    {frontEndSkills.map((skill)=>(<p className="m-2">{skill}</p>))}
    </div>
   </div>
   <div className="m-3 flex">
   <h2  className="border-r mr-2 p-1 border-cyan-700">Back-end</h2>
   <div className="grid grid-cols-4">

   {backEndSkills.map((skill)=>(<p className="m-2">{skill}</p>))}
   </div>
   </div>

</div>

    </>
  )
}

export default Skills