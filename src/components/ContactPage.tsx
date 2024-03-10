import Links from "./ui/Links";

const ContactPage = () => {
  return (
    <div className="flex flex-col w-1/2 justify-center bg-gray-50 mb-20">
        
        <h1 className="text-4xl m-3">Contact:</h1>


        <h2 className="flex flex-col text-xl m-3">
        Email: <span>
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