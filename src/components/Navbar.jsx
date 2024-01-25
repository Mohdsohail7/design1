import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';

function Navbar(){
    return(
        <>
        <div className="md:flex gap-5 bg-gray-50 z-10 hidden shadow-md">
            <div>
                <a href="https://www.bingenbash.com/">
                    <img src="https://www.bingenbash.com/static/media/bnb_crown.a8bf7f6fa383aaa00ec739e109c2f8aa.svg" alt="Logo"
                    className="w-[15vw] lg:w-[12.5vw] lg:max-w-[140px] ml-5 lg:ml-[8vw] lg:mr-14 md:mr-3" />
                </a>
            </div>

            <div className="flex-grow">
                <div className="flex justify-evenly rounded-bl-3xl bg-[#5a0c97] text-gray-100 py-4 px-8 text-sm lg:text-base">
                    <div className="flex">
                    <FaLocationDot size={24} color="#9ca3af"/>
                    <a href="https://goo.gl/maps/D82D29gicguCBp366" target="_blank" rel="noreferrer" className="ml-2 mr-2">Hyderabad</a>
                    </div>

                    <div className="flex">
                    <CgMail size={24} color="#9ca3af"/>
                     <span> admin@bingenbash.com</span>
                    </div>

                    <div className="flex">
                    <FaWhatsapp size={24} color="#9ca3af"/>
                    <a href="https://wa.me/919948954545?text=Hi%2C%20I%20want%20to%20book%20the%20slot" target="_blank" rel="noreferrer" className="ml-2 mr-2">+91 9948954545 (WhatsApp only)</a>
                    </div>

                    <div className="lg:flex gap-5 md:hidden">
                    <a rel="noreferrer" href="https://www.instagram.com/binge_n_bash/" target="_blank">
                        <FaInstagram size={24} color="#f8fafc" />
                    </a>

                    <a rel="noreferrer" href="https://www.youtube.com/@bingenbash" target="_blank">
                        <FaYoutube size={24} color="#f8fafc" />
                    </a>

                    <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=61550343193803" target="_blank">
                        <FaFacebook size={24} color="#f8fafc" />
                    </a>
                    </div>
                </div>

                <div className="mt-3 lg:mt-5 flex justify-end gap-12 xl:gap-24 mx-5 lg:mx-10 items-center font-medium">
                    <div className="flex gap-8 lg:gap-20 text-gray-700 md:text-sm lg:text-base">
                        <a className="hover:text-purple-600" href="https://www.bingenbash.com/">HOME</a>
                        <a className="hover:text-purple-600" href="https://www.bingenbash.com/aboutus">ABOUT US</a>
                        <a className="hover:text-purple-600" href="https://www.bingenbash.com/gallery">GALLERY</a>
                        <a className="hover:text-purple-600" href="https://www.bingenbash.com/refundpolicy">REFUND POLICY</a>
                        <a className="hover:text-purple-600" href="https://www.bingenbash.com/addons">ADD-ONS</a>
                        </div>
                        <a href="/booknow">
                            <button className="rounded-lg px-3 lg:px-5 py-2 lg:py-3 text-gray-200 bg-gradient-to-r from-[#a330f1] to-[#ce25fc] tracking-wider hover:from-[#ce25fc] hover:to-[#ce25fc]">
                                BOOK NOW
                            </button>
                            </a>
                    </div>
            </div>
            
        </div>

            <div className="px-5 py-3 sticky top-0 z-50 bg-gray-50 md:hidden flex justify-between items-center shadow-md">
                <h2 className="flex gap-1 text-2xl font-bold">
                    <a href="/">
                        Binge 'n <span className="text-[#5a0c97] ml-1">Bash</span>
                    </a>
                </h2>
                    <div className="flex gap-3">
                            <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=61550343193803" target="_blank">
                                <FaFacebook size={24} color="#312e81" />
                            </a>

                            <a rel="noreferrer" href="https://www.instagram.com/binge_n_bash/" target="_blank">
                                <FaInstagram size={24} color="#312e81" />
                            </a>

                            <a rel="noreferrer" href="https://www.youtube.com/@bingenbash" target="_blank">
                                <FaYoutube size={24} color="#312e81" />
                            </a>
                        </div>
            </div>
        </>
    )
}
export default Navbar;

