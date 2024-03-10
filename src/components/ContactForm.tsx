import { useReducer } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const initialState :{
  yourName : string,
  email:string,
  description:string
} ={
  yourName :"",
  email: "",
  description :""
}

type actionType = {type:"name";payload:string} | {type:"email";payload:string}|{type:"description";payload:string}

function reducer(state : typeof initialState,action : actionType){
 switch (action.type){
  case "name":{
    return{
      ...state,name:state.yourName
    }

  }
  case "email":{
    return {
      ...state,email:state.email
    }

  }
  case "description":{
    return {
      ...state,description:state.description
    }
  }
 }
}

const ContactForm = () => {

  const [state,dispatch] = useReducer(reducer,initialState)
// const [name,setName] = useState<string>('');
// const [email,setEmail] = useState<string>('');
// const [description,setDescription] = useState<string>('');
  


  return (
    <>
    <form className="flex flex-col md:w-1/2 w-96 justify-center items-center bg-gray-50">
        
        <Input type="text"  placeholder="ex. Ioana Daniel" labelInfo="Your Name"/>
      
        <Input type="email" placeholder="ex. example@gmail.com" labelInfo="Your Email"/>

        <label htmlFor="">Description</label> 
        <textarea className="md:w-1/2 w-96 border  h-96 " />
        {/* <input type="textarea" /> */}
        <Button onClick={()=>{alert('clicked')}}>Submit</Button>

    </form>
    </>
  )
}

export default ContactForm;