
import Footer from "./Footer";
import { IoMdCalendar } from "react-icons/io";
import '../App.css';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function Main(){

    const [selectedDate, setSelectedDate] = useState(new Date('2024-01-25'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    return(
        <>
            <div className="flex flex-col justify-between h-screen">
                <div className="flex flex-col py-[1.5rem] items-center bg-gradient-to-b from-[#370160d4] to-[#6b0166a3]">
                    <div className="text-xl lg:text-3xl text-gray-100 font-medium">Choose your theater at Hitec city</div>
                    <div className="bg-[#ebeaea60] mt-5 flex flex-col items-center rounded-2xl pt-5 w-[90%] shadow-md px-3 pb-6">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 py-3 px-5 bg-[#ffffff76] rounded-lg">
                            <div className="labelDiv">
                                <label htmlFor="label1" className="labelText">
                                    Check Slot Availability
                                </label>
                                <div className="inputDiv">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="dd-MMMM-yyyy"
                                    className="inputField"
                                />    
                                <div className="icon-btn-div">
                                        <button className="btnIcon" type="button" onClick={() => setSelectedDate(new Date('2024-01-25'))} >
                                        <IoMdCalendar />
                                        </button>
                                        
                                    </div>
                                    <fieldset aria-hidden="true" className="css-field">
                                        <legend className="css-legend">
                                            <span>Check Slot Availability</span>
                                        </legend>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-20 gap-y-5 w-[100%] mb-6">
                            <a href="https://www.bingenbash.com/theater/platinum_hitec_city"
                                className="flex flex-col items-center justify-between text-center mb-6 md:mb-12 py-4 bg-[#ffffff] rounded-2xl tracking-wide gap-3 md:w-[20rem] lg:w-[22rem] lg:gap-3 
                                font-medium shadow-lg hover:scale-105 transition-all overflow-hidden relative">
                                    <div className="flex flex-col items-center text-center gap-1">
                                        <img src="https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2platinum1.jpg" alt="Platinum Theatre"
                                        className="w-[90%] rounded-xl" loading="lazy" />
                                    <div className="text-xl lg:text-xl  leading-9 text-gray-700 md:p-3">Platinum Theatre</div>
                                    <div className="leading-relaxed md:px-16 px-8  text-gray-700">₹2799 for 6 or less people (Rs 400 per extra person)</div>

                                    </div>
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="text-red-600 ">
                                            0 slots available on 25-01-2024
                                        </div>
                                        <button className="rounded-full text-gray-100 px-6 py-2 bg-[#5A0C97] hover:bg-[rgb(115,48,166)] text-xl drop-shadow-md">Check Slots</button>
                                        <div className="text-xl lg:text-lg tracking-wider text-[#5A0C97] mb-2">2 - 12 People</div>
                                    </div>
                            </a>

                            <a href="https://www.bingenbash.com/theater/majestic_hitec_city"
                                className="flex flex-col items-center justify-between text-center mb-6 md:mb-12 py-4 bg-[#ffffff] rounded-2xl tracking-wide gap-3 md:w-[20rem] lg:w-[22rem] lg:gap-3 
                                font-medium shadow-lg hover:scale-105 transition-all overflow-hidden relative">
                                    <div className="flex flex-col items-center text-center gap-1">
                                        <img src="https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2majestic2.jpg" alt="Majestic Theatre"
                                        className="w-[90%] rounded-xl" loading="lazy" />
                                    <div className="text-xl lg:text-xl  leading-9 text-gray-700 md:p-3">Majestic Theatre</div>
                                    <div className="leading-relaxed md:px-16 px-8  text-gray-700">₹2699 for 6 or less people (Rs 400 per extra person)</div>

                                    </div>
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="text-red-600 ">
                                            0 slots available on 25-01-2024
                                        </div>
                                        <button className="rounded-full text-gray-100 px-6 py-2 bg-[#5A0C97] hover:bg-[rgb(115,48,166)] text-xl drop-shadow-md">Check Slots</button>
                                        <div className="text-xl lg:text-lg tracking-wider text-[#5A0C97] mb-2">2 - 10 People</div>
                                    </div>
                            </a>

                            <a href="https://www.bingenbash.com/theater/stellar_hitec_city"
                                className="flex flex-col items-center justify-between text-center mb-6 md:mb-12 py-4 bg-[#ffffff] rounded-2xl tracking-wide gap-3 md:w-[20rem] lg:w-[22rem] lg:gap-3 
                                font-medium shadow-lg hover:scale-105 transition-all overflow-hidden relative">
                                    <div className="flex flex-col items-center text-center gap-1">
                                        <img src="https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2stellar1.jpg" alt="Stellar Theatre"
                                        className="w-[90%] rounded-xl" loading="lazy" />
                                    <div className="text-xl lg:text-xl  leading-9 text-gray-700 md:p-3">Stellar Theatre</div>
                                    <div className="leading-relaxed md:px-16 px-8  text-gray-700">₹1799 for 4 or less people (Rs 400 per extra person)</div>

                                    </div>
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="text-red-600 ">
                                            0 slots available on 25-01-2024
                                        </div>
                                        <button className="rounded-full text-gray-100 px-6 py-2 bg-[#5A0C97] hover:bg-[rgb(115,48,166)] text-xl drop-shadow-md">Check Slots</button>
                                        <div className="text-xl lg:text-lg tracking-wider text-[#5A0C97] mb-2">2 - 6 People</div>
                                    </div>
                            </a>

                            <a href="https://www.bingenbash.com/theater/carnival_hitec_city"
                                className="flex flex-col items-center justify-between text-center mb-6 md:mb-12 py-4 bg-[#ffffff] rounded-2xl tracking-wide gap-3 md:w-[20rem] lg:w-[22rem] lg:gap-3 
                                font-medium shadow-lg hover:scale-105 transition-all overflow-hidden relative">
                                    <div className="flex flex-col items-center text-center gap-1">
                                        <img src="https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2carnival1.jpg" alt="Carnival Theatre"
                                        className="w-[90%] rounded-xl" loading="lazy" />
                                    <div className="text-xl lg:text-xl  leading-9 text-gray-700 md:p-3">Carnival Theatre</div>
                                    <div className="leading-relaxed md:px-16 px-8  text-gray-700">₹1899 for 4 or less people (Rs 400 per extra person)</div>

                                    </div>
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="text-red-600 ">
                                            1 slots available on 25-01-2024
                                        </div>
                                        <button className="rounded-full text-gray-100 px-6 py-2 bg-[#5A0C97] hover:bg-[rgb(115,48,166)] text-xl drop-shadow-md">Check Slots</button>
                                        <div className="text-xl lg:text-lg tracking-wider text-[#5A0C97] mb-2">2 - 10 People</div>
                                    </div>
                            </a>

                            <a href="https://www.bingenbash.com/theater/amigos_hitec_city"
                                className="flex flex-col items-center justify-between text-center mb-6 md:mb-12 py-4 bg-[#ffffff] rounded-2xl tracking-wide gap-3 md:w-[20rem] lg:w-[22rem] lg:gap-3 
                                font-medium shadow-lg hover:scale-105 transition-all overflow-hidden relative">
                                    <div className="flex flex-col items-center text-center gap-1">
                                        <img src="https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2amigos1.jpg" alt="Amigos Theatre"
                                        className="w-[90%] rounded-xl" loading="lazy" />
                                    <div className="text-xl lg:text-xl  leading-9 text-gray-700 md:p-3">Amigos Theatre</div>
                                    <div className="leading-relaxed md:px-16 px-8  text-gray-700">₹1699 for 4 or less people </div>

                                    </div>
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="text-red-600 ">
                                            0 slots available on 25-01-2024
                                        </div>
                                        <button className="rounded-full text-gray-100 px-6 py-2 bg-[#5A0C97] hover:bg-[rgb(115,48,166)] text-xl drop-shadow-md">Check Slots</button>
                                        <div className="text-xl lg:text-lg tracking-wider text-[#5A0C97] mb-2">2 - 4 People</div>
                                    </div>
                            </a>

                            <a href="https://www.bingenbash.com/theater/scarlet_hitec_city"
                                className="flex flex-col items-center justify-between text-center mb-6 md:mb-12 py-4 bg-[#ffffff] rounded-2xl tracking-wide gap-3 md:w-[20rem] lg:w-[22rem] lg:gap-3 
                                font-medium shadow-lg hover:scale-105 transition-all overflow-hidden relative">
                                    <div className="flex flex-col items-center text-center gap-1">
                                        <img src="https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2scarlet1.jpg" alt="Scarlet1 Theatre"
                                        className="w-[90%] rounded-xl" loading="lazy" />
                                    <div className="text-xl lg:text-xl  leading-9 text-gray-700 md:p-3">Scarlet Theatre(Couple)</div>
                                    <div className="leading-relaxed md:px-16 px-8  text-gray-700">₹1499 for 2 people (Decorations mandatory)</div>

                                    </div>
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="text-red-600 ">
                                            0 slots available on 25-01-2024
                                        </div>
                                        <button className="rounded-full text-gray-100 px-6 py-2 bg-[#5A0C97] hover:bg-[rgb(115,48,166)] text-xl drop-shadow-md">Check Slots</button>
                                        <div className="text-xl lg:text-lg tracking-wider text-[#5A0C97] mb-2">2 People</div>
                                    </div>
                            </a>
                        </div>
                        <button className="rounded-lg px-3 sm:px-5 py-3 text-gray-200 font-medium text-lg md:text-xl tracking-wider uppercase bg-[#5a0c97] hover:bg-[#5b0c97bf]">Jooin Waitlist</button>
                        <div></div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}
export default Main;