import ContactForm from "../components/ContactForm"
import ContactPage from "../components/ContactPage"

const Contact = () => {
  return (
    <>
    <div className="py-20 flex flex-col md:flex-row justify-center items-center w-full h-full">
    <ContactPage/>
    <ContactForm/>

   
    </div>    
    
    </>
  )
}

export default Contact