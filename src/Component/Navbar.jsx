import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// import { Store } from '../context/Store'
import { Store } from '../context/Store'


const Navbar = () => {

    const { addItemCount, mode, setMode } = useContext(Store)



    const htmlTag = document.querySelector('html')
    const bodyTag = document.querySelector('body')

    bodyTag.classList.add('dark:bg-neutral-900', 'bg-white');
    // htmlTag.classList.remove('light');
    // htmlTag.classList.add('dark');


    // useEffect(() => {
    //     let Themes = localStorage.getItem("ThemeMode")

    //     htmlTag.classList.remove('dark', 'light');
    //     bodyTag.classList.add('dark:bg-neutral-900', 'bg-white');
    //     htmlTag.classList.add(Themes);

    //     console.log(mode);
    //     console.log(Themes);
    //     setMode(mode)
    // }, [mode, ChangeTheme])





    // function ChangeTheme() {
    //     // console.log(mode);
    //     setMode(mode === "light" ? "dark" : "light")
    //     localStorage.setItem("ThemeMode", mode)
    //     console.log(mode);
    // }



















    // useEffect(() => {
    //     const htmlTag = document.documentElement;
    //     const bodyTag = document.body;

    //     // Remove existing theme classes
    //     htmlTag.classList.remove('dark', 'light');
    //     bodyTag.classList.remove('dark:bg-neutral-900', 'bg-white');

    //     // Add the appropriate theme classes based on `mode`
    //     if (mode === 'dark') {
    //         htmlTag.classList.add('dark');
    //         bodyTag.classList.add('dark:bg-neutral-900');
    //     } else {
    //         htmlTag.classList.add('light');
    //         bodyTag.classList.add('bg-white');
    //     }

    //     // Save the mode to localStorage
    //     localStorage.setItem("ThemeMode", mode);

    // }, [mode]); 


    useEffect(() => {

        if (mode === "light") {
            
            htmlTag.classList.remove('dark');
            htmlTag.classList.add('light');
            // console.log('erwemlkij');
        }
        else {
            htmlTag.classList.remove('light');
            htmlTag.classList.add('dark');
        }
    }, [mode,ChangeTheme])


    function ChangeTheme() {
        const newMode = mode === 'light' ? 'dark' : 'light'; // Toggle theme
        setMode(newMode); // Update the mode state
        localStorage.setItem('ThemeMode', newMode); // Save the new theme in localStorage
    }



    return (
        <>
            <div className="bg-blue-500">
                <nav className="relative px-4 py-4 flex justify-between items-center bg-white dark:bg-zinc-800 border-b-2 dark:border-b-zinc-600">
                    <NavLink to="" className={({ isActive }) => isActive ? "text-3xl font-bold leading-none" : "text-3xl font-bold leading-none"}>
                        <svg className="h-10" alt="logo" viewBox="0 0 10240 10240" fill='#f97316' style={{ 'filter': 'drop-shadow(0px 10px 3px #d7c3c3)' }}>
                            <path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"></path>
                        </svg>
                    </NavLink>


                    {/* <div className="lg:hidden">
                        <button className="navbar-burger flex items-center text-blue-600 p-3">
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                        </div> */}

                    <ul className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 hidden md:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                        <li className='flex'><NavLink to="" className={({ isActive }) => isActive ? "text-sm text-white bg-orange-500 px-4 py-2 rounded" : "text-sm dark:text-white px-4 py-2 font-medium"}>Home</NavLink></li>

                        <li className='flex'><NavLink to="about" className={({ isActive }) => isActive ? "text-sm text-white bg-orange-500 px-4 py-2 rounded" : "text-sm dark:text-white px-4 py-2 font-medium"}>About Us</NavLink></li>

                        <li className='flex'><NavLink to="services" className={({ isActive }) => isActive ? "text-sm text-white bg-orange-500 px-4 py-2 rounded" : "text-sm dark:text-white px-4 py-2 font-medium"}>Services</NavLink></li>

                        <li className='flex'><NavLink to="collection" className={({ isActive }) => isActive ? "text-sm text-white bg-orange-500 px-4 py-2 rounded" : "text-sm dark:text-white px-4 py-2 font-medium"}>Collection</NavLink></li>

                        <li className='flex'><NavLink to="contact" className={({ isActive }) => isActive ? "text-sm text-white bg-orange-500 px-4 py-2 rounded" : "text-sm dark:text-white px-4 py-2 font-medium"}>Contact</NavLink></li>

                        <li className='flex'>
                            <NavLink to="cart" className={({ isActive }) => isActive ? "text-sm text-white bg-orange-500 px-4 py-2 rounded" : "text-sm dark:text-white px-4 py-2 font-medium border border-gray-300 rounded-lg"}>
                                <div className="relative">
                                    <div className="item-countings -right-5 -top-4 absolute bg-white border border-gray-300 grid h-5 items-center m-0 rounded-full text-[10px] text-center w-5 text-black">{addItemCount}</div>
                                    <i className="fa-light fa-cart-shopping"></i>
                                </div>
                            </NavLink>
                        </li>

                        <li className='flex'>
                            {/* <button onClick={() => setMode((prev) => !prev)}> */}
                            <button onClick={ChangeTheme}>
                                {mode === "light" ? <i className="dark:text-white fa-light fa-brightness"></i>
                                    :
                                    <i className="dark:text-white fa-duotone fa-solid fa-moon"></i>
                                }
                            </button>
                        </li>



                    </ul>
                    <NavLink to="login" className="hidden md:inline-block text-sm text-white bg-indigo-500 px-8 py-2 rounded transition duration-200">Login</NavLink>
                </nav>



                {/* <div className="navbar-menu relative z-50 hidden">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">
                            <NavLink className="mr-auto text-3xl font-bold leading-none">
                                <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"></path>
                                </svg>
                            </NavLink>
                            <button className="navbar-close">
                                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1">
                                    <NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Home</NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">About Us</NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Services</NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Pricing</NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">
                                <NavLink className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">Sign in</NavLink>
                                <NavLink className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">Sign Up</NavLink>
                            </div>
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>Copyright © 2021</span>
                            </p>
                        </div>
                    </nav>
                </div> */}

            </div>
        </>
    )
}

export default Navbar
