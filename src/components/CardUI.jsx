import React from 'react'
import checkImage from '../assets/Number.png'
import rejectedImage from '../assets/rejected.png'



const CardUI = ({feature, cta, status, btnImg , time}) => {
  return (
    <>

<div className="rounded-xl overflow-hidden w-72 bg-white h-fit">
        <img className="w-full" src={feature}/>
        <div className="px-6 py-5 border-b bg-[#F9FAFB]">
            <div className="font-medium sm:text-lg text-base mb-1 text-[#101323]">Quick Attendance </div>
            <p className="text-gray-500 -mt-1 text-xs font-normal">
                Don’t forget to log your shift!
            </p>
        </div>

        <div className=" flex flex-col gap-y-6  ">
            <div className="w-full flex flex-col gap-y-3 justify-center items-center  px-6 py-4">
                <div className='flex items-center gap-x-1'>
                    <h2 className="text-sm font-medium text-gray-700">{cta}</h2>
                    <img src={status} className="w-4 h-4 "  />
                </div>

                {/* Start Button */}
                <div>
                    <button type="button" id="start-btn"
                            className="flex  items-center gap-x-2 bg-[#F9FAFB] border border-[#EBEBEB] px-5 py-2.5 rounded-full ">
                        {/* SVG Icon here */}
                        <img src={btnImg} className="w-2 h-3 "  />
                        <span className="text-xs font-medium text-black">{time}</span>

                    </button>
                </div>

                {/* Manual Time */}
                <div>
                    <button
                        className="text-transparent bg-clip-text gap-x-1 bg-gradient-to-r from-[#357DBC] to-[#B591DB] cursor-pointer rounded-full flex items-center">
                        {/* SVG Icon here */}
                        <span className="font-medium text-[#B54708] text-xs underline decoration-[#B54708] underline-offset-4 ">Complete Shift</span>
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col gap-y-3 px-5 pb-3">
                <h2 className="text-gray-700 font-medium text-sm">Recent Time Logs</h2>

                {/* Time Logs - Consider turning this into a separate component if the list is dynamic */}
                <div className="flex flex-col gap-y-3 py-2 max-h-40 overflow-y-auto hide-scrollbar">
                    {/* Repeat this block for each log entry */}
                    <div className="flex w-full justify-between items-center gap-x-2">
                        <div className="flex w-full items-center gap-x-3">
                            <img className="w-4 h-4" src={checkImage} alt="Check" />

                            <div>
                                <h2 className="text-gray-700 font-semibold text-sm">
                                    18 July 2023
                                </h2>
                                <p className="text-gray-400 font-normal text-sm">
                                    Tuesday
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col w-full items-end justify-between">

                         <p class="text-gray-400 font-normal text-sm">
                             02:00 - 05:00
                         </p>
                         <p class="text-gray-400 font-normal text-sm">
                             02:00 - 05:00
                         </p>
                        </div>
                        {/* Time details */}
                    </div>
                    <div className="flex w-full justify-between items-center gap-x-2">
                        <div className="flex w-full items-center gap-x-3">
                            
                            <img className="w-4 h-4" src={rejectedImage} alt="Check" />

                            <div>
                                <h2 className="text-gray-700 font-medium text-sm">
                                    18 July 2023
                                </h2>
                                <p className="text-gray-400 font-normal text-sm">
                                    Tuesday
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col w-full items-end justify-between">
                          <p class="text-gray-400 font-normal text-sm">
                              02:00 - 05:00
                          </p>
                          </div>
                        {/* Time details */}
                    </div>
                    <div className="flex w-full justify-between items-center gap-x-2">
                        <div className="flex w-full items-center gap-x-3">
                            <img className="w-5 h-5" src={checkImage} alt="Check" />

                            <div>
                                <h2 className="text-gray-700 font-medium text-sm">
                                    18 July 2023
                                </h2>
                                <p className="text-gray-400 font-normal text-sm">
                                    Tuesday
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col w-full items-end justify-between">

                         <p class="text-gray-400 font-normal text-sm">
                             02:00 - 05:00
                         </p>
                         <p class="text-gray-400 font-normal text-sm">
                             02:00 - 05:00
                         </p>
                        </div>
                        {/* Time details */}
                    </div>
                    <div className="flex w-full justify-between items-center gap-x-2">
                        <div className="flex w-full items-center gap-x-3">
                            <img className="w-4 h-4" src={checkImage} alt="Check" />

                            <div>
                                <h2 className="text-gray-700 font-semibold text-sm">
                                    18 July 2023
                                </h2>
                                <p className="text-gray-400 font-normal text-sm">
                                    Tuesday
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col w-full items-end justify-between">

                         <p class="text-gray-400 font-normal text-sm">
                             02:00 - 05:00
                         </p>
                         <p class="text-gray-400 font-normal text-sm">
                             02:00 - 05:00
                         </p>
                        </div>
                        {/* Time details */}
                    </div>
                    <div className="flex w-full justify-between items-center gap-x-2">
                        <div className="flex w-full items-center gap-x-3">
                            
                            <img className="w-4 h-4" src={rejectedImage} alt="Check" />

                            <div>
                                <h2 className="text-gray-700 font-medium text-sm">
                                    18 July 2023
                                </h2>
                                <p className="text-gray-400 font-normal text-sm">
                                    Tuesday
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col w-full items-end justify-between">
                          <p class="text-gray-400 font-normal text-sm">
                              02:00 - 05:00
                          </p>
                          </div>
                        {/* Time details */}
                    </div>
                    <div className="flex w-full justify-between items-center gap-x-2">
                        <div className="flex w-full items-center gap-x-3">
                            <img className="w-5 h-5" src={checkImage} alt="Check" />

                            <div>
                                <h2 className="text-gray-700 font-medium text-sm">
                                    18 July 2023
                                </h2>
                                <p className="text-gray-400 font-normal text-sm">
                                    Tuesday
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col w-full items-end justify-between">

                         <p class="text-gray-400 font-normal text-sm">
                             02:00 - 05:00
                         </p>
                         <p class="text-gray-400 font-normal text-sm">
                             02:00 - 05:00
                         </p>
                        </div>
                        {/* Time details */}
                    </div>
                    {/* ... other log entries */}
                </div>
            </div>
        </div>
                </div>

    </>
  )
}

export default CardUI