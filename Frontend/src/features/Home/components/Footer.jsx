import React from 'react'
import { COLORS } from '../../../../constants'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-8 px-6 md:px-8" style={{ backgroundColor: COLORS.FooterBgColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-white tracking-tight">CoDeva</h1>
            <p className="text-xs max-w-sm leading-relaxed" style={{ color: COLORS.FooterSupportTextColor }}>
              Mapping intent, preserving context. Built for engineers who care about the future of their code.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-200"><GitHubIcon /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-200"><XIcon /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-200"><LinkedInIcon /></a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: `1px solid ${COLORS.FooterBorderColor}` }}>
          <p className="text-xs" style={{ color: COLORS.FooterSupportTextColor }}>
            © {new Date().getFullYear()} Codeva Systems Inc.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs" style={{ color: COLORS.FooterSupportTextColor }}>
            {['Privacy Policy', 'Terms of Service', 'Security', 'Changelog', 'Status'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer