
import { Link } from 'react-router-dom'

const Presentation = () => {
  return (
    <>
    <div className='md:flex'>
    <div className='bg-red-900 md:w-1/2   h-screen flex flex-col justify-center font-mono '>

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
    <div className='bg-yellow-900 md:w-1/2  h-screen'>
        <h1>Img</h1>
    </div>
    </div>
    </>
  )
}

export default Presentation