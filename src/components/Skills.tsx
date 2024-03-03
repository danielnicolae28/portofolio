
const Skills = () => {

  const frontEndSkillsJS:string[] =['Single-page application(SPA)','ES6','React','TypeScript','Redux']
  const frontEndSkillsCSS:string[] =['HTML','CSS',"MaterialUI","Tailwind",'Bootstrap',"SASS",'Responsive design']

  const backEndSkills:string[] = ['NodeJS','Express.JS','PostgreSQL','SQL','PL/SQL','MongoDB']

  return (
    <>

<div className="flex flex-col justify-center">
   
   <div className="m-3 flex ">
    <h2 className="border-r mr-2 p-1 border-cyan-700">Front-end</h2>
    <div>
    <h1 className="text-xl font-bold m-2 ">JavaScript</h1>
    <ul className="grid grid-cols-4">
    {frontEndSkillsJS.map((skill)=>(<li className="m-2">{skill}</li>))}
    </ul>
      <h1 className="text-xl font-bold m-2 ">CSS</h1>
    <ul  className="grid grid-cols-4">
    {frontEndSkillsCSS.map((skill)=>(<li className="m-2"> {skill}</li>))}
    </ul>
   </div>
</div>
   <div className="m-3 flex ">
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