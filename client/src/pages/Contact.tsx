import ContactForm from "../components/contact/ContactForm"
import ContactPage from "../components/contact/ContactPage"
const Contact = () => {
  return (
    <>
    {/* <div className="bg-primary-3 pt-20  w-full h-full flex flex-col"> */}
    <div className="pt-20 flex flex-col md:flex-row items-center  mb-20">
      
    <ContactPage/>
    <ContactForm/>
    </div>    
    {/* </div> */}
    
    </>
  )
}

export default Contact;