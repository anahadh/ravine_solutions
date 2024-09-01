import Navbar from "../components/Navbar"

export default function Index() {
    const executiveTeam = [
        {
            id: 1,
            name: "Aahad Ali",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            name: "Adarsh Prasad",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            name: "Anahadh Multani",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 4,
            name: "Sahdah Narayanan",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 5,
            name: "Sutej Mandadi",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
    
    return (
        <>
            <Navbar />

            <div className="relative hero bg-base-300 shadow-md">
                <div className="hero-content grid grid-cols-2 h-[50vh] relative">
                    <div className="font-bold text-8xl text-accent pr-10">
                        Our Mission
                    </div>

                    <div className="w-1/2 h-2/3 bg-base-100 rounded-lg">
                        
                    </div>
                </div>
            </div>

            <div className="relative bg-base-100 shadow-md">
                <div className="relative p-7 flex flex-col items-center gap-20 mb-20">
                    <p className="font-bold text-[75px] text-accent text-center mt-15">Meet the Executive Team</p>
                    
                    {executiveTeam.map((member) => (
                        <div className="card flex flex-row border-4 border-gray-300 w-full max-w-[75vw] mx-5" key={member.id}>
                            <div className="w-1/4">
                                <figure className="m-4 flex justify-center">
                                    <img src="https://img.freepik.com/free-photo/shallow-focus-vertical-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-27259.jpg" alt="A dog" className="rounded-xl h-full object-cover" />
                                </figure>
                            </div>
                            <div className="card-body flex flex-col p-5 w-3/4">
                                <div className="flex flex-col h-full mt-4">
                                    <p className="card-title text-8xl text-accent font-bold">{member.name.toUpperCase()}</p>
                                    <p className="text-[35px] leading-[80px] flex-grow overflow-y-auto">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}