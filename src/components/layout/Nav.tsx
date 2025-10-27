import Logo from "@/assets/icons/Logo"
import { ModeToggle } from "./ModeToggler"
import { Link, NavLink } from "react-router"

const Nav = () => {

    const navItems = [
        {name : "Home", path : '/'},
        {name : "About", path : '/about'}
    ]

  return (
    <header className="">
        <div>
            <div className="flex h-16 items-center justify-between">
            
            <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <Logo />
                </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                     {navItems.map((item) => (
                        <li key={item.name}>
                        <NavLink to={item.path}>
                            {
                                
                            ({ isActive }) => (
                            <div className="group relative inline-block">
                                {/* underline span */}
                                <span
                                className={`absolute -inset-y-0.5 left-0 h-0.5 mt-auto bg-teal-600 transition-all ${
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                                ></span>

                                {/* text span */}
                                <span
                                className={`transition ${
                                    isActive
                                    ? "text-gray-500"
                                    : "text-gray-500/80 hover:text-gray-500"
                                }`}
                                >
                                {item.name}
                                </span>
                            </div>
                            )
                            
                            
                            
                            }
                        </NavLink>
                        </li>
                    ))} 
                </ul>
                </nav>

                <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4 flex items-center">
                    <ModeToggle />
                    <Link to='/login' className="rounded-md bg-teal-600 px-5 
                    py-2.5 text-sm font-medium text-white shadow-sm"
                    >
                    Login
                    </Link>

                    <div className="hidden sm:flex">
                    <Link to='/register' className="rounded-md bg-gray-100 px-5 py-2.5 
                    text-sm font-medium text-teal-600" >
                        Register
                    </Link>
                    </div>
                </div>

                <div className="block md:hidden">
                    <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </button>
                </div>
                </div>
            </div>

            </div>
        </div>
    </header>
  )
}

export default Nav
