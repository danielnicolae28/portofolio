import LinkComponent from "./ui/LinkComponent"
const NavBar = () => {
  return (
    <ul className="w-full h-7.5 border-solid border-b border-sky-500 fixed flex column justify-center items-center ">

        <LinkComponent to="/">Home</LinkComponent>
        <LinkComponent to="about">About</LinkComponent>
        <LinkComponent to="work">Work</LinkComponent>
        <LinkComponent to="experience">Experience</LinkComponent>
        <LinkComponent to="contact">Contact</LinkComponent>

    </ul>
  )
}

export default NavBar