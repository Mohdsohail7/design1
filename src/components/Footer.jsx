import React from "react";
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';

function Footer(){
    return(
        <>
            <div className="bg-[#F0DFFF] text-gray-700 tracking-wide mt-auto">
                <div className="flex flex-col md:flex-row ml-10 gap-4 text-sm pt-5">
                    <div className="md:basis-1/4 flex flex-col mt-2 md:ml-4">
                        <a href="/">
                            <div className="text-lg font-semibold text-gray-700">
                                Binge 'n '<span className="text-[#540C97]">Bash</span>
                            </div>
                        </a>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.instagram.com/binge_n_bash/" target="_blank" rel="noreferrer">
                                <FaInstagram size={24} color="#540C97" />
                            </a>

                            <a href="https://www.youtube.com/@bingenbash" target="_blank" rel="noreferrer">
                                <FaYoutube size={24} color="#540C97" />
                            </a>

                            <a href="https://www.facebook.com/people/Binge-n-Bash-Private-Theaters/61550343193803/" target="_blank" rel="noreferrer">
                                <FaFacebook size={24} color="#540C97" />
                            </a>  
                        </div>
                    </div>
                        <div className="md:basis-1/4 flex flex-col md:items-center md:justify-center md:gap-2 gap-1 md:-ml-10 text-base font-medium">
                            <div className="text-gray-800 hover:text-[#540C97]">
                                <a href="/">Home</a>
                            </div>
                            <div className="text-gray-800 hover:text-[#540C97]">
                                <a href="/booknow">Book Now</a>
                            </div>
                            <div className="text-gray-800 hover:text-[#540C97]">
                                <a href="/addons">Add-ons</a>
                            </div>
                            <div className="text-gray-800 hover:text-[#540C97]">
                                <a href="/aboutus">About Us</a>
                            </div>
                        </div>

                        <div className="md:basis-1/4 flex flex-col md:items-center md:justify-center md:gap-2 gap-1 text-base font-medium">
                            <div className="text-gray-800 hover:text-[#540C97]">
                                <a href="/gallery">Gallery</a>
                            </div>
                            <div className="text-gray-800 hover:text-[#540C97]">
                                <a href="/refundpolicy">Refund Policy</a>
                            </div>
                            <div className="text-gray-800 hover:text-[#540C97]">
                                <a href="/privacy-policy">Privacy Policy</a>
                            </div>
                            <div className="text-gray-800 hover:text-[#540C97]">
                                <a href="/tnc">Terms and Conditions</a>
                            </div>
                        </div>

                        <div className="md:basis-1/5 flex flex-col">
                            <div className="font-medium text-base">Contact Us:</div>
                            <ul className="list-disc list-outside ml-4">
                                <li className="mt-2">401, Meta towers, Hitec city<br/>Madhapur, Hyderabad - 500081</li>
                                <li className="mt-2">
                                    <a href="https://wa.me/919948954545?text=Hi%2C%20I%20want%20to%20book%20the%20slot" target="_blank" rel="noreferrer">+91 9948954545 (WhatsApp only)
                                    </a>
                                </li>
                                <li className="mt-2">admin@bingenbash.com</li>
                            </ul>
                        </div>
                </div>

                <div class="ml-10 md:ml-14 pb-2 mt-2  text-sm font-medium">2023 © Binge 'n Bash, All Rights Reserved </div>
            </div>
        </>
    )
}
export default Footer;