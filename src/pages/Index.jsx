import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"

export default function Index() {
    
    return (
        <>
            <Navbar />

            <div className="hero bg-base-200 min-h-200">
                <div className="hero-content">
                    <div className="items-center justify-items-center w-1/2 text-center">
                        <div className="flex flex-col gap-5">
                            <div className="mt-20">
                                <p className="text-5xl opacity-80 font-bold leading-relaxed text-teal-500">Tomorrow's Greatest Minds Tackling Today's Biggest Problems</p>
                            </div>

                            <div>
                                <p className="text-3xl leading-relaxed">Ravine Solutions gives young problem solvers a way to showcase their work and use it to solve the biggest problems across the globe</p>
                            </div>
                            
                            <div className="grid grid-cols-2 justify-stretch gap-7 mt-10 pb-20">
                                <div className="btn btn-success btn-active text-3xl hover:scale-110 h-20 rounded-lg">
                                    Donate Now!
                                </div>
                                <div className="btn btn-green-500 btn-outline text-3xl h-20 rounded-lg">
                                    See Our Work
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}