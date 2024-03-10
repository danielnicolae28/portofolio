import { FaLinkedin ,FaGithub,FaSquareXTwitter } from "react-icons/fa6";


const Links = () => {
  return (
    <div>
     <ul className="flex p-6 justify-center">
          <li className="mr-7 text-3xl cursor-pointer"><FaLinkedin/></li>
          <li className="mr-7 text-3xl cursor-pointer"><FaGithub/></li>
          <li className="mr-7 text-3xl cursor-pointer"><FaSquareXTwitter/></li>
        </ul>
    </div>
  )
}

export default Links