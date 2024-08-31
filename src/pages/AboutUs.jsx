import Navbar from "../components/Navbar"

export default function Index() {
    
    return (
        <>
            <Navbar />

            <div className="hero bg-base-300 shadow-md">
                <div className="hero-content grid grid-cols-2 h-[400px]">
                    <div className="font-bold text-7xl items-center justify-items-center text-accent pr-10">
                        Our Mission
                    </div>

                    <div className="w-1/2 h-2/3 bg-base-100 rounded-lg">
                        
                    </div>
                </div>
            </div>
        </>
    )
}