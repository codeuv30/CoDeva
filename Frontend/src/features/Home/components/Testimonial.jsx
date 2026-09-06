import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { COLORS } from '../../../../constants'

const Testimonial = ({ text, name, desc, profilePic }) => {
  return (
    <div
      className="relative p-6 md:p-8 rounded-xl transition-colors duration-300 hover:bg-white/[0.03] h-full flex flex-col"
      style={{ backgroundColor: COLORS.TestinomialBgColor }}
    >
      <div className="flex-1 relative pt-2">
        <FormatQuoteIcon
          className="absolute -top-2 -left-1 !text-4xl opacity-30"
          style={{ color: COLORS.TestinomialBorderColor }}
        />
        <p
          className="relative text-base leading-relaxed font-medium"
          style={{ color: COLORS.TestinomialTextColor }}
        >
          {text}
        </p>
      </div>

      <div className="pt-6 flex items-center gap-3 mt-auto">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: COLORS.TestinomialProfilePicBgColor }}
        >
          {profilePic}
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold leading-tight">{name}</h3>
          <p className="text-xs mt-0.5" style={{ color: COLORS.FooterSupportTextColor }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial