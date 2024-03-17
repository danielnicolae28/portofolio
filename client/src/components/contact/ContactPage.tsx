import Links from "../ui/Links";

const ContactPage = () => {
  return (
    <div className="flex flex-col  md:w-1/2 justify-center bg-gray-50 mb-5">
        
        <h1 className="text-4xl m-1">Contact:</h1>


        <h2 className="flex flex-col text-2xl m-1">
        Email: <span className="m-2 font-medium">
            danielnicolae286@gmail.com
        </span>
        </h2>
        <div>
          <Links/>
        </div>


    </div>
  )
}

export default ContactPage;