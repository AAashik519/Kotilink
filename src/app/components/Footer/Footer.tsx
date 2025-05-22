import Link from "next/link"
import { Linkedin, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className=" bg-[#D5E5D5] p-20 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:px-10 lg:px-20">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 border-2 border-[#064749] flex items-center justify-center">
                <div className="h-5 w-5 border-r-2 border-b-2 border-teal-700"></div>
              </div>
              <span className="ml-2 text-[#064749] font-semibold uppercase text-sm tracking-wider">Kotilink</span>
            </div>
            <p className="text-sm">Contact number: 02030074477</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-600 hover:text-teal-700" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-600 hover:text-teal-700" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-600 hover:text-teal-700" />
              </Link>
            </div>
            <p className="text-xs text-gray-500">© 2021 Flex Living</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-teal-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-teal-700">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-teal-700">
                  Our team
                </Link>
              </li>
            </ul>
          </div>

          {/* Guests Links */}
          <div>
            <h3 className="font-semibold mb-4">Guests</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-teal-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-teal-700">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-teal-700">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy Links and Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Privacy</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-teal-700">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-teal-700">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Stay up to date</h3>
              <p className="text-sm mb-3">Be the first to know about our newest apartments</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-2 border rounded-md bg-gray-100 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-6 py-2 rounded-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
