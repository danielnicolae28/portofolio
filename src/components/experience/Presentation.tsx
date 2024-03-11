
import { Link } from 'react-router-dom'

const Presentation = () => {
  return (
    <>
<div className='flex flex-col justify-start items-start w-full h-full ' >
    <div className='bg-primary-2 text-primary-1 md:w-1/2   h-full  md:flex md:flex-col md:justify-center font-mono '>

<h3 className='m-4'>Hi, my name is Ioana Nicolae Daniel</h3>
<h1 className='flex flex-col m-4 font-bold text-lg'><span>
     I'm on the path to become a full stack developer,
    </span>
    <span>
        specialized in development of web applications using React, Node.js & more
    </span>
      </h1>
    
   <div className='m-4 border border-slate-500 w-1/3 flex justify-center' >

<Link to="about" className='p-2'>Find out more</Link>
     </div>
 </div>
    <div className='w-1/2  h-screen'>
       <img src="../../public/my-image.png" className='w-40 h-72' />
    </div>
</div>
    </>
  )
}

export default Presentation