import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <header className="">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 border-2 border-[#27AE60] flex items-center justify-center">
              <div className="h-5 w-5 border-r-2 border-b-2 border-[#27AE60]"></div>
            </div>
            <span className="ml-2 text-[#27AE60] font-semibold uppercase text-sm tracking-wider">Kotilink</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm hover:text-[#27AE60]">
              Home
            </Link>
            <Link href="/findhouse" className="text-sm hover:text-[#27AE60]">
              Find House
            </Link>
            <Link href="#" className="text-sm hover:text-[#27AE60]">
              Blog
            </Link>
            <Link href="#" className="text-sm hover:text-[#27AE60]">
              About Us
            </Link>
            <Link href="/login" className="text-sm hover:text-[#27AE60]">
              Sign In
            </Link>
            <Link href="/register" className="text-sm hover:text-[#27AE60]">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
  )
}

export default Navbar
