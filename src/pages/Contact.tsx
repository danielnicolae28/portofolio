import ContactForm from "../components/ContactForm"
import ContactPage from "../components/ContactPage"
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <>
    <div className="pt-20 flex flex-col md:flex-row  items-center w-full h-full">
    <ContactPage/>
    <ContactForm/>
    <Footer/>
    </div>    
    
    </>
  )
}

export default Contact