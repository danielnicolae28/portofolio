import { FaLinkedin ,FaGithub,FaSquareXTwitter } from "react-icons/fa6";


const Links = () => {
  return (
    <div>
     <ul className="flex p-6 justify-center">
          <li className="mr-7 text-3xl cursor-pointer"> 
        <a href="https://www.linkedin.com/in/daniel-nicolae-ioana-369300202/" target="_blank">

        <FaLinkedin/>
        </a>
        </li>
          <li className="mr-7 text-3xl cursor-pointer">
            
            <a href="https://github.com/danielnicolae28" target="_blank">

            <FaGithub/>
            </a>
            </li>
          <li className="mr-7 text-3xl cursor-pointer">
            <a href="https://twitter.com/Daniel550497121" target="_blank" >

            <FaSquareXTwitter/>
            </a>
            
            </li>
        </ul>
    </div>
  )
}

export default Links