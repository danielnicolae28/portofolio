import { FaLinkedin ,FaGithub,FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='w-full bg-primary-1 text-white	text-white'>

    

        <ul className="flex p-6 justify-center">
          <li className="m-2 text-3xl"><FaLinkedin/></li>
          <li className="m-2 text-3xl"><FaGithub/></li>
          <li className="m-2 text-3xl"><FaSquareXTwitter/></li>
        </ul>
    </div>
  )
}

export default Footer;