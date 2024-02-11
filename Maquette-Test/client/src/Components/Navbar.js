import lemon from "../assets/lemon-logo.webp";
export default function Navbar(){
    return(
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0">
            <nav className="relative max-w-[120rem] w-full mx-auto px-3 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-12" aria-label="Global">
            
                <div className="flex sm:justify-between sm:gap-6 items-center">
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold text-black" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                        <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                    <div className="flex items-center mx-auto w-full justify-between">
                        <div className="flex items-center">
                            <a className="flex-none text-xl font-semibold" href="#" aria-label="Brand">Lemon Interactive</a>
                            <img className="w-12 h-auto" alt="logo lemon" src={lemon}></img>
                        </div>
                        <img className="sm:hidden" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYtJREFUSEu1ldFRxDAMRHWVAJUAlQCVAJVwnQCVQCdwj/F6NrLihI9khuEi27srrayc4uDndDB+7CG4joiHiHiMCH5/N1EfEfF5iZ1nImcEdxHx1kBnGBC+rhGtETxfEF8aKgCoRC2qyQLyq5QVeyBaPBWBg3PoaSJf5ZMY/i9IMgHK3hvgfVPMK0AQ4wMZ8Qex/CBOORUn078nEwAOiSsH/KvIAjBEiAQCCbipCFxF39CUsYYqAD0bxZQlAlnv2XsGUpDriHoOQSq1yop3FyP/egWcQEDU1nu7IkDxT1FmediJnUAHXCkY2RfUk232SmVC0L8I1kwGMIsZMvMMpNTbU83gqlGHufS7PNE+NUo3vyIYLovdXu9WEXlsavJgUGrJ6kJrPCgTNUTZppWhKhtrrljzSHG80N5F6+ab7IZSR7LKve6+6GJpL2sLD7eG3XAg1UmmKpzv0OoHZ2tcA+gfId4H8GrYuUBvzcpgxYYJ6pv3fDIpw621qsa1Ppl9NFcq9hDM1G+uHU7wC+/oexn9VG3PAAAAAElFTkSuQmCC"/>
                    </div>

                </div>

                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-y-6 gap-x-0 mt-5 sm:mx-12 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                        <form>
                            <div className="flex justify-end items-center sm:hidden">
                                <input type="text" id="search" name="search" className="bg-gray-100/50 rounded-sm p-2 w-full"></input>
                                <button type="button" className="absolute">
                                    <svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                                </button>
                            </div>
                        </form>
                        <a className="sm:py-6 duration-0 hover:duration-200 hover:text-green-500" href="#" aria-current="page">Home</a>
                        <a className="sm:py-6 duration-0 hover:duration-200 hover:text-green-500" href="#">Courses</a>
                        <a className="sm:py-6 duration-0 hover:duration-200 hover:text-green-500" href="#">Instructors</a>
                        <a className="sm:py-6 duration-0 hover:duration-200 hover:text-green-500" href="#">Contact</a>
            
                        <div className="flex sm:items-center sm:flex-row flex-col gap-x-4 gap-y-4 sm:ms-auto">
                            <div className="hidden sm:flex">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                                </a>
                            </div>
                            <a className="flex items-center gap-x-2 mx-2 duration-0 hover:duration-200 text-green-600 hover:text-green-500" 
                                href="#">
                                Log in
                            </a>
                            <a href="#" 
                            className="bg-[#96C67F] rounded-md text-white w-fit py-2 px-3
                            duration-0 hover:duration-500 hover:text-white hover:bg-green-500">Register</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}