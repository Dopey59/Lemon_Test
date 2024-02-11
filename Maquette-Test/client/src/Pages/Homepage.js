// Components imports
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

// Images imports
import womenImage from "../assets/women.png";
import women2Image from "../assets/women-2.png";
import women3Image from "../assets/women-3.png";
import StudentMob from "../assets/studentsMobile.png";
import StudentWeb from "../assets/studentWebVers.png";
import Vignette1 from "../assets/vignette-1.png";
import Vignette2 from "../assets/vignette-2.png";

// CSS imports
import '../index.css';

// 

export default function HomePage(){
    function ArrowUp(){
        var element = document.getElementById("menu");
        element.scrollIntoView({behavior : "smooth"});
       

    }
    return(
        <>
        <main id="menu" className="w-auto h-full">
            <Navbar/>
            <div className=" hover:cursor-pointer bottom-2 z-50 fixed right-2 bg-gray-400/50 rounded-full p-2">
                <svg onClick={ArrowUp} fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 6.879-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122z"></path></svg>
            </div>
            {/* Section 1 - Start */}
            <div className="containerSection1 mx-auto">
                <h2 className="font-bold sm:text-9xl sm:flex hidden sm:mt-24 sm:mx-36 sm:-mb-7 text-gray-200/50">News</h2>{/* News Title showed in web version */}

                <div className="containerElement relative sm:p-12 sm:mx-28 bg-gray-100 rounded-xl">
                    <div className="mx-4 flex flex-col gap-2">
                        <h2 className="font-bold mt-3 sm:hidden">News</h2>{/* News Title showed in mobile version */}
                        <h1 className="font-bold text-2xl sm:text-3xl">Lorem Ipsum</h1>
                        <p className="text-sm sm:text-lg w-3/2 sm:w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper egestas augue, in fringilla ipsum condimentum at.</p>
                        
                        <div className="imageContainer flex justify-center sm:justify-end sm:items-center items-center sm:mt-0 mt-32">
                            <div className="absolute">
                                <div className="flex items-center sm:mb-20 justify-center">
                                    <div className="absolute flex items-center flex-col justify-center mr-52 w-32 sm:w-auto sm:mr-96 shadow-md shadow-zinc-500 bg-white sm:mt-16 rounded-xl px-4 py-4 mt-36">
                                        <p className="text-xs bg-repeat-x text-center w-32 font-medium ">Learn from best <span className="text-lime-500">instructors</span> around the globe</p>
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

                                    <div className="absolute flex justify-center items-center flex-col mt-64 sm:ml-80 sm:mt-64 ml-56 shadow-sm shadow-zinc-500 bg-white rounded-xl w-24 h-auto mx-2 p-3">
                                        <svg className="bg-green-100 rounded-full p-1" fill="#96C67F" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg>
                                        <h1 className="text-lime-500 font-medium">15K</h1>
                                        <p className="text-xs text-center w-24">Amazing students around the globe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 1 - End */}


            {/* Section 2  */}
            <div className="containerSection2 flex sm:mt-44 mt-72 sm:justify-evenly sm:items-center sm:overflow-hidden overflow-x-scroll ">{/* Carousel in mobile version */}
                {/* First block */}
                <div className="relative sm:p-12 p-7">
                    <div className="iconElement absolute bg-[#96C67F] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path></svg>
                    </div>
                    <div className="boxContainer p-4 rounded-xl bg-gray-200/50">
                        <div className="containerElement flex flex-col gap-3 mt-6">
                            <h1 className="font-bold text-2xl sm:text-3xl gap-6">Title</h1>
                            <p className="sm:w-64 w-64 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero. Suspendisse sit amet erat non.</p>
                        </div>
                    </div>
                </div>
                {/* First block */}

                {/* Second block */}
                <div className="relative sm:sm:p-12 p-7 sm:mt-36 ">
                    <div className="iconElement absolute bg-gray-200 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#96C67F" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path></svg>
                    </div>
                    <div className="boxContainer p-4 rounded-xl bg-[#96C67F]">
                        <div className="containerElement flex flex-col gap-3 mt-6">
                            <h1 className="font-bold text-2xl sm:text-3xl gap-6">Title</h1>
                            <p className="sm:w-64 w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero. Suspendisse sit amet erat non.</p>
                        </div>
                    </div>
                </div>
                {/* First block */}

                {/* Third block */}
                <div className="relative sm:p-12 p-7 ">
                    <div className="iconElement absolute bg-[#96C67F] p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"></path><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path></svg>
                    </div>
                    <div className="boxContainer w-fit p-4 rounded-xl bg-gray-200/50">
                        <div className="containerElement flex flex-col gap-3 mt-6">
                            <h1 className="font-bold text-2xl sm:text-3xl gap-6">Title</h1>
                            <p className="sm:w-64 w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero. Suspendisse sit amet erat non.</p>
                        </div>
                    </div>
                </div>
                {/* Third block */}

                {/* Fourth block */}
                <div className="relative sm:w-fit sm:p-12 p-7 sm:mt-36 ">
                    <div className="iconElement absolute bg-gray-100 p-2 flex sm:top-6 top-2 ml-4 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#96C67F" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
                    </div>
                    <div className="boxContainer w-fit p-4 rounded-xl bg-[#96C67F]">
                        <div className="containerElement flex flex-col gap-3 mt-6">
                            <h1 className="font-bold text-2xl sm:text-3xl gap-6">Title</h1>
                            <p className="sm:w-64 w-64">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero. Suspendisse sit amet erat non.</p>
                        </div>
                    </div>
                </div>
                {/* Third block */}
            </div>
            {/* Section 2 - End */}


            {/* Section 3 - Start */}
            <div className="containerSection3 sm:p-12 py-12 sm:flex-row flex sm:justify-between flex-col sm:mt-24 mt-12 sm:mx-36 items-center">
                <div className="relative sm:w-[30rem] w-[20rem] h-[20rem] sm:h-[30rem] bg-[#96C67F] p-6 rounded">
                    <img className="absolute sm:bottom-10 bottom-5 left-1 sm:-left-10 z-20 rounded-xl sm:w-64 w-44 h-auto -mt-4 -ml-4" alt="a woman smiling" src={women2Image} />
                    <img className="absolute sm:-top-20 -top-10 right-3 sm:right-14 z-10 rounded-xl sm:w-64 w-44 h-auto -mb-4 -mr-4" alt="a woman smiling" src={women3Image} />
                </div>


                <div className="textContainer sm:w-1/3 mx-auto mt-6 p-3">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
                        <h3 className="text-xl">Lorem Ipsum</h3>
                    </div>
                    <div className="mt-4 flex">
                        <p className="sm:text-base text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero. Suspendisse sit amet erat non nisl dignissim faucibus id ut augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero. Suspendisse sit amet erat non nisl dignissim faucibus id ut augue.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero.
                        </p>
                    </div>
                </div>

            </div>
            {/* Section 3 - End */}

            {/* Section 4 - Start */}
            <div className="containerSection4 sm:grid sm:grid-cols-2 flex flex-col mb-11">
                <div className="flex flex-wrap">
                    <img className="mx-auto px-6 w-full sm:w-auto sm:hidden h-auto" alt="a woman smiling" src={StudentMob}></img>
                    <img className="sm:ml-44 w-64 sm:flex hidden sm:w-auto h-auto mt-24 sm:mt-4" alt="a woman smiling" src={StudentWeb}></img>
                </div>
                <div className="flex gap-3 mt-6">
                    <div className="w-1/2">
                        <div className="boxContainer mx-auto flex sm:py-10 sm:px-4 p-3 w-full rounded-xl bg-gray-200/50">
                            <div className="containerElement flex flex-col gap-1 ">
                                {/* Content for Mohh Jumah */}
                                <div className="flex items-center justify-start ">
                                    <img className="rounded-full w-10 sm:w-14 h-auto sm:mt-4" alt="men vignette 1" src={Vignette1}></img>
                                    <div className="flex flex-col items-start sm:ml-3 ml-2 mt-2">
                                        <h1 className="font-bold sm:text-base text-sm">Mohh Jumah</h1>
                                        <h3 className="text-lime-500 text-xs">Senior Developer</h3>
                                    </div>
                                </div>
                                <p className="mt-2 sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero. Suspendisse sit amet erat non.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <div className="boxContainer mx-auto flex sm:py-10 sm:px-4 p-3 w-full rounded-xl bg-gray-200/50">
                            <div className="containerElement flex flex-col gap-1 ">
                                {/* Content for John Mark */}
                                <div className="flex items-center justify-start ">
                                    <img className="rounded-full w-10 sm:w-14 h-auto sm:mt-4" alt="men vignette 2" src={Vignette2}></img>
                                    <div className="flex flex-col items-start sm:ml-3 ml-2 mt-2">
                                        <h1 className="font-bold sm:text-base text-sm">John Mark</h1>
                                        <h3 className="text-lime-500 text-xs">Data Analyst</h3>
                                    </div>
                                </div>
                                <p className="mt-2 sm:text-base text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at posuere libero. Suspendisse sit amet erat non.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 4 - End */}
            <Footer/>
        </main>
        </>
    )
}