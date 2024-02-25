import LinkComponent from "./ui/LinkComponent"


const NavBar = () => {
  return (
    <ul className="w-full border-solid border-b border-gray-300 flex justify-center p-4 fixed bg-gray-50">

        <LinkComponent to="/">Home</LinkComponent>
        <LinkComponent to="about">About</LinkComponent>
        <LinkComponent to="work">Work</LinkComponent>
        <LinkComponent to="experience">Experience</LinkComponent>
        <LinkComponent to="contact">Contact</LinkComponent>

    </ul>
  )
}

export default NavBar;