import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"

export default function Index() {
    
    return (
        <>
            <Navbar />

            <div className="hero bg-base-200 shadow-md">
                <div className="hero-content relative min-h-200">
                    <div className="absolute top-0 left-0 w-full h-full flex animate-slide opacity-50">
                        <div className="min-w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900)' }}>
                        </div>
                        
                        <div className="min-w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900)' }}>
                        </div>
                        
                        <div className="min-w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900)' }}>
                        </div>

                        <div className="min-w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900)' }}>
                        </div>
                        
                        <div className="min-w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900)' }}>
                        </div>
                        
                        <div className="min-w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900)' }}>
                        </div>
                    </div>


                    <div className="z-10 items-center justify-items-center w-2/3 text-center">
                        <div className="flex flex-col gap-5">
                            <div className="mt-20">
                                <p className="text-6xl opacity-80 font-bold leading-relaxed text-accent">Tomorrow's Greatest Minds Tackling Today's Biggest Problems</p>
                            </div>

                            <div>
                                <p className="text-3xl leading-relaxed">Ravine Solutions gives young problem solvers a way to showcase their work and use it to solve the biggest problems across the globe</p>
                            </div>
                            
                            <div className="grid grid-cols-2 justify-stretch gap-7 mt-10 pb-20">
                                <div className="btn btn-accent btn-active text-3xl hover:scale-110 h-20 rounded-lg">
                                    Donate Now
                                </div>
                                <div className="btn btn-secondary btn-outline text-3xl h-20 rounded-lg">
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

            <div className="bg-base-100 relative">
                <div className="min-h-200 relative pb-20">
                    <div className="mt-24 grid grid-cols-2 items-center justify-items-center">
                        <div className="ml-60 items-center justify-items-center w-7/12 text-start pb-20">
                            <div className="flex flex-col gap-5 w-full">
                                <div className="">
                                    <p className="text-5xl opacity-80 font-bold leading-relaxed text-accent">Our Current Topic: College Debt</p>
                                </div>

                                <div>
                                    <p className="text-2xl leading-loose">College debt puts a heavy financial strain on people, so Ravine scholars explored what the main factors are, compiled research, and created an AI model to forecast future debt.</p>
                                </div>
                                
                                <div className="btn btn-secondary btn-outline text-3xl h-20 rounded-lg">
                                    See Our Work
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="w-[800px] h-[500px] mr-60">
                            <img className="w-full h-full object-cover rounded-2xl outline outline-4 outline-offset-4 outline-accent" src="https://ak.picdn.net/shutterstock/videos/1047963091/thumb/1.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}