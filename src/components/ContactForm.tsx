import Button from "./ui/Button";
import Input from "./ui/Input";

const ContactForm = () => {
  return (
    <>
    <form className="flex flex-col w-1/2 justify-center items-center bg-gray-50">
        
        <Input type="text"  placeholder="ex. Ioana Daniel" labelInfo="Your Name"/>
      
        <Input type="email" placeholder="ex. example@gmail.com" labelInfo="Your Email"/>

        <label htmlFor="">Description</label> 
        <textarea className="w-1/2 border  h-96 " />
        {/* <input type="textarea" /> */}
        <Button onClick={()=>{alert('clicked')}}>Submit</Button>

    </form>
    </>
  )
}

export default ContactForm;