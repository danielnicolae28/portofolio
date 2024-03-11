import { ChangeEvent, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";


const ContactForm = () => {

const [name,setName] = useState<string>('');
const [email,setEmail] = useState<string>('');
const [description,setDescription] = useState<string>('');
  

const nameHandler =(e: ChangeEvent<HTMLInputElement>)=>{
setName(e.target.value);
}

console.log(name);

const emailHandler=(e:ChangeEvent<HTMLInputElement>)=>{
setEmail(e.target.value);
}
console.log(email)
const descriptionHandler =(e:ChangeEvent<HTMLTextAreaElement>)=>{
setDescription(e.target.value);
}

console.log(description)

  return (
    <>
    <form className="flex flex-col md:w-1/2 w-96 justify-center items-center bg-gray-50">
        
        <Input type="text"  placeholder="ex. Ioana Daniel" labelInfo="Your Name" onChange={nameHandler}/>
      
        <Input type="email" placeholder="ex. example@gmail.com" labelInfo="Your Email" onChange={emailHandler}/>

        <label htmlFor="" className="m-1">Description</label> 
        <textarea className="md:w-1/2 w-96 border m-1 h-96 outline-none p-2 px-2 mx-2 text-lg" placeholder="How can I help You" onChange={descriptionHandler} />
        {/* <input type="textarea" /> */}
        <Button onClick={()=>{alert('clicked')}}  types="submitForm">Submit</Button>

    </form>
    </>
  )
}

export default ContactForm;