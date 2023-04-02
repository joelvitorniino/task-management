import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center pl-4 pr-[1.2em] mb-8 bg-black text-white">
        <div className="flex justify-center items-center">
            <h1 className="md:ml-3em sm:ml-3em iphone:-ml-3 whitespace-nowrap font-bold">Task Management</h1>
        </div>
        
        <ul className="flex list-none justify-end">
          <li className="lg:mr-4 lg:ml-[54em] max-sm:mr-2 iphone:mr-0 iphone:ml-7 mr-4">
            <Link
              href="/"
              className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white font-medium"
            >
              Home
            </Link>
          </li>
          <li className="lg:mr-[1em] max-sm:mr-2 iphone:mr-0 mr-4">
            <Link
              href="/login"
              className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white font-medium"
            >
              Login
            </Link>
          </li>
          <li className="lg:mr-3 max-sm:mr-1 iphone:mr-0 iphone:-ml-1 mr-4">
            <Link
              href="/about"
              className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white font-medium"
            >
              Register
            </Link>
          </li>
          <li className="mr-0">
            <Link
              href="/contact"
              className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white font-medium"
            >
              Tasks
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
