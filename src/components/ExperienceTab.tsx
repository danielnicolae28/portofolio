
const ExperienceTab = () => {

  const tools:string[] = ['React','Node.JS','C','SQL'] 

  return (
    <>
<div className='flex m-10'>

<div className='border-r  mr-3'>
  <img src="../../public/sigla_continental-removebg-preview.png" className='mr-3 w-80	p-1 border-b' alt="" />
</div>

<div>

<h1 className='m-4 text-3xl'>Mes Engineer</h1>
<p className='m-4 text-lg'>July 2022 - Present</p>
<p className='m-4 text-lg'>
  I am a MES engineer with focus on debugging, find new solution for the current application we maintain and develop custom procedure on data base and creating reporting tools.
</p>

<p className='text-lg m-4'>Development tools: {tools.map((tool)=><span key={tool} className='m-2 border p-1 border-cyan-400 bg-cyan-400'>{tool}</span>)}</p>


</div>


</div>



    </>
  )
}

export default ExperienceTab