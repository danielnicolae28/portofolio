
const Skills = () => {

  const frontEndSkillsJS:string[] =['Single-page application(SPA)','ES6','React','TypeScript','Redux']
  const frontEndSkillsCSS:string[] =['HTML','CSS',"MaterialUI","Tailwind",'Bootstrap',"SASS",'Responsive design']

  const backEndSkills:string[] = ['NodeJS','Express.JS','PostgreSQL','SQL','PL/SQL','MongoDB']

  return (
    <>

<div className="flex flex-col">
   
    <h2 className=" text-2xl m-2  font-bold">Front-end</h2>
   <div className="m-3 flex border-t">
    <div>
    <h1 className="text-xl font-bold m-2 ">JavaScript</h1>
    <ul className= " grid md:grid-cols-4  grid-cols-2 gap-x-1">
    {frontEndSkillsJS.map((skill)=>(<li className="m-2 text-xl">{skill}</li>))}
    </ul>
      <h1 className="text-xl font-bold m-2 ">CSS</h1>
    <ul  className="grid md:grid-cols-4 grid-cols-2">
    {frontEndSkillsCSS.map((skill)=>(<li className="m-2 text-xl"> {skill}</li>))}
    </ul>
   </div>
</div>

   <h2  className=" text-2xl m-2  font-bold" >Back-end</h2>
   <div className="m-3 flex  border-t">
   <div className="grid md:grid-cols-4 grid-cols-2 gap-x-36 ">

   {backEndSkills.map((skill)=>(<p className="m-2 text-xl">{skill}</p>))}
   </div>
   </div>

</div>

    </>
  )
}

export default Skills