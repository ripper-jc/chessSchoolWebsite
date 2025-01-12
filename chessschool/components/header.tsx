import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Send } from 'lucide-react'
import logo from '@/public/logo.png'

const navItems = [
  { name: 'ГОЛОВНА', href: '/' },
  { name: 'ТАРИФИ', href: '/about' },
  { name: 'ТРЕНЕРИ', href: '/services' },
  { name: 'ПРОГРАМА', href: '/portfolio' },
  { name: 'РОЗКЛАД', href: '/blog' },
  { name: 'ПРО НАС', href: '/contacts#contacts' },
  { name: 'КОНТАКТИ', href: '/contacts' },
]

const socialIcons = [
  { Icon: Facebook, href: 'https://www.facebook.com/kingandqueen.chess.school/' },
  { Icon: Send, href: 'https://t.me/KingAndQueenOnlineChess_UA' },
  { Icon: Instagram, href: 'https://instagram.com/kingandqueen_chess.school?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D' },
]

export default function Header() {
  return (
    <div className="relative">
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <header className="bg-amber-300 shadow-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src={logo} alt="Logo" width={60} height={60} />
              </Link>
            </div>

            {/* Navigation for larger screens */}
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-700 hover:text-stone-400 px-3 py-2 rounded-md text-md font-bold transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons for larger screens */}
            <div className="hidden md:flex items-center space-x-4">
              {socialIcons.map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-stone-400"
                >
                  <Icon className="h-6 w-6 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile menu button - remove input, keep only label */}
            <div className="md:hidden">
              <label htmlFor="menu-toggle" className="block text-gray-700 hover:text-gray-900 cursor-pointer">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu - update peer selector */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white shadow-md transition-all duration-300 max-h-0 overflow-hidden [.peer:checked~&]:max-h-screen">
        <nav className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="px-4 py-3 space-x-2 flex justify-center border-t border-gray-200">
          {socialIcons.map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

