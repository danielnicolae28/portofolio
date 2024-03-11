import ContactForm from "../components/contact/ContactForm"
import ContactPage from "../components/contact/ContactPage"
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <>
    {/* <div className="bg-primary-3 pt-20  w-full h-full flex flex-col"> */}
    <div className="pt-20 flex flex-col md:flex-row items-center  h-full  ">
      
    <ContactPage/>
    <ContactForm/>
    </div>    
    {/* </div> */}
    
    </>
  )
}

export default Contact;