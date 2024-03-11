
const ExperienceTab = () => {

  const tools:string[] = ['React','Node.JS','C','SQL'] 

  return (
    <>
<div className='flex m-10'>

<div className='border-r  mr-1'>
  <img src="../../public/sigla_continental-removebg-preview.png" className='mr-3 min-w-20	p-1 border-b' alt="" />
</div>

<div>

<h1 className='m-4 text-3xl font-semibold'>Mes Engineer</h1>
<p className='m-4 text-lg'>July 2022 - Present</p>
<p className='m-4 text-2xl'>
  I am a MES engineer with focus on debugging, find new solution for the current application we maintain and develop custom procedure on data base and creating reporting tools.
</p>

<div className='text-2xl m-4 flex flex-col w-52'><p>Development tools: </p>{tools.map((tool)=><span key={tool} className='m-3 border-b p-1 border-cyan-400 bg-cyan-400'>{tool}</span>)}</div>


</div>


</div>



    </>
  )
}

export default ExperienceTab