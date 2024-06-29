import contact from '../assests/contact.png'
import { AiOutlineLinkedin,AiOutlineMail } from "react-icons/ai";

export default function Contact() {
    return (
        <section id='contact' className="flex flex-col md:flex-row justify-between items-center py-10md:py-20 font-Home-font">
            <div className="md:w-1/2 md:pl-10 py-10">
                <div className="flex flex-col justify-center py-16 md:py-20">
                    <h1 className="text-4xl border-b-4 border-[#318445] mb-5 w-[160px] text-justify font-bold">CONTACT</h1>
                    <p>For more details, please contact me -</p>
                    <div className='hover:text-[#318445] font-medium flex items-center mb-2'>
                        <AiOutlineLinkedin className='mr-2' size={40} />
                        <span>LinkedIn: </span>
                        <a 
                            className='hover:text-[#318445] font-medium ml-2' 
                            href='https://www.linkedin.com/in/naveen-k-6337b6214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            NAVEEN.K
                        </a>
                    </div>
                    <div className='hover:text-[#318445] font-medium flex items-center'>
                        <AiOutlineMail className='mr-2' size={40} />
                        <span>Email: </span>
                        <a 
                            className='hover:text-[#318445] font-medium ml-2' 
                            href='mailto:naveennavi1711@gmail.com'>
                            naveennavi1711@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
                <img className="w-[250px] md:w-[310px] px-6 pl-1" src={contact} alt="Contact" />
            </div>
        </section>
    );
}