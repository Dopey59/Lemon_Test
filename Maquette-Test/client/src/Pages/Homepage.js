import Navbar from "../Components/Navbar"
import womenImage from "../assets/women.jpg";
import men from "../assets/men.jpg";
import '../index.css';


export default function HomePage(){
    return(
        <>
        <main className="">
            <Navbar/>
            
            {/* Section 1  */}

            <div className="containerSection1">
                <div>
                    <h2 className="font-bold sm:text-9xl sm:flex hidden sm:mt-24 sm:mx-52 sm:-mb-7 text-gray-200/50">News</h2>
                </div>
                <div className="containerElement relative sm:p-12 sm:mx-44 bg-gray-100 rounded-xl ">
                    <div className="mx-4 flex flex-col gap-2">
                        <h2 className="font-bold mt-3 sm:hidden">News</h2>
                        <h1 className="font-bold text-2xl sm:text-3xl">Section 1</h1>
                        <p className="text-sm sm:text-lg sm:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper egestas augue, in fringilla ipsum condimentum at.</p>
                        
                        <div className="imageContainer flex justify-center sm:justify-end sm:items-center items-center sm:mt-0 mt-44">
                            <div className="absolute">
                                <div className="flex items-center justify-center">
                                    <div className="absolute flex items-center flex-col justify-center mr-44 sm:mr-96 bg-white sm:mt-4 rounded-xl p-2 mt-36">
                                        <p className="text-xs bg-repeat-x text-center font-medium ">Learn from best <span className="text-lime-500">instructors</span> around the globe</p>
                                        <div className="imageStack flex justify-center items-center mt-1">
                                            <div className="stackedImage menImage"></div>
                                            <div className="stackedImage menImage"></div>
                                            <div className="stackedImage menImage"></div>
                                            <div className="stackedImage menImage"></div>
                                            <div className="stackedImage menImage"></div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <img  className="rounded-xl w-64 sm:w-96 h-auto mt-24 sm:mt-4" alt="a women smiling" src={womenImage}></img>
                                    </div>

                                    <div className="absolute flex justify-center items-center flex-col mt-80 sm:ml-80 sm:mt-96 ml-56 bg-white rounded-xl w-1/3 p-2">
                                        <svg className="bg-green-100 rounded-full p-0" fill="#96C67F" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg>
                                        <h1 className="text-lime-500">15K</h1>
                                        <p className="text-xs text-center">Amazing students around the globe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2  */}

            <div className="mt-96 sm:mx-44">
                <div className="boxContainer">
                    <h1>Title</h1>

                </div>
            </div>
        </main>
        </>
    )
}