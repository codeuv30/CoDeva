import React, { useState, useEffect } from 'react'
import { COLORS } from '../../../../constants'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Features', 'Editor', 'Visual Map', 'Pricing', 'Docs']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 md:px-8 flex justify-between items-center transition-all duration-300 border-b border-white/5 ${
        scrolled ? 'backdrop-blur-xl bg-black/60 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
      style={{ backgroundColor: scrolled ? undefined : COLORS.NavbarBackground }}
    >
      <div className="leftEl flex items-center space-x-8" style={{ color: COLORS.NavbarTextColor }}>
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
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/60 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>

      <div className="rightEl hidden md:flex items-center space-x-5" style={{ color: COLORS.NavbarTextColor }}>
        <button className="text-sm tracking-wide opacity-60 hover:opacity-100 transition-all duration-300 font-sans px-3 py-2">
          Sign In
        </button>
        <button
          className="text-sm tracking-wide font-sans px-5 py-2.5 font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95"
          style={{ backgroundColor: COLORS.NavbarButtonBgColor }}
        >
          Get Started
        </button>
      </div>

      <button
        className="md:hidden text-white/70 hover:text-white transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity font-sans"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
            <button className="text-sm tracking-wide opacity-70 font-sans py-2">Sign In</button>
            <button
              className="text-sm tracking-wide font-sans px-5 py-2.5 font-semibold rounded-md"
              style={{ backgroundColor: COLORS.NavbarButtonBgColor }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar