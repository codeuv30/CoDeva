import React, { useState, useEffect } from 'react'
import { COLORS } from '../../../../constants'
import { Menu, X } from 'lucide-react'
import SignInModal from './SignInModal'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Features', 'Editor', 'Visual Map', 'Pricing', 'Docs']

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 md:px-8 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl bg-black/60 shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
        style={{ backgroundColor: scrolled ? undefined : COLORS.NavbarBackground }}
      >
        <div className="flex items-center space-x-8">
          <h1
            style={{ color: COLORS.NavbarMainTextColor }}
            className="font-jetmono font-bold text-2xl tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          >
            CoDeva
          </h1>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm tracking-wide text-slate-400 hover:text-white transition-colors duration-200 font-sans"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-5">
          <button
            onClick={() => setSignInOpen(true)}
            className="text-sm tracking-wide font-sans px-5 py-2.5 font-semibold rounded-md text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ backgroundColor: COLORS.NavbarButtonBgColor }}
          >
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl p-6 md:hidden flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors font-sans"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => setSignInOpen(true)}
                className="text-sm tracking-wide text-slate-300 font-sans py-2 text-left"
              >
                Sign In
              </button>
              <button
                onClick={() => setSignInOpen(true)}
                className="text-sm tracking-wide font-sans px-5 py-2.5 font-semibold rounded-md text-white"
                style={{ backgroundColor: COLORS.NavbarButtonBgColor }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
    </>
  )
}

export default Navbar