import React from 'react'
import { COLORS } from '../../../../constants'

const FeatureCard = ({ icon, label, title, description, imageSrc, imageAlt, bgColor, centered = false, className = '' }) => {
  return (
    <div
      className={`p-8 md:p-10 h-full group hover:bg-white/[0.02] transition-colors duration-300 ${
        centered ? 'flex flex-col items-center text-center' : ''
      } ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex gap-2 items-center font-gmono tracking-widest mb-4" style={{ color: COLORS.NavbarButtonBgColor }}>
        <span className="inline-flex">{icon}</span>
        <h2 className="text-xs uppercase font-medium">{label}</h2>
      </div>

      <div className={`mb-6 ${centered ? 'max-w-2xl' : ''}`}>
        <h1 className="text-xl md:text-2xl font-semibold leading-tight mb-3 text-white">
          {title}
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: COLORS.HomePageMutedColor }}>
          {description}
        </p>
      </div>

      <div className={`relative overflow-hidden rounded-lg ${centered ? 'w-full' : ''}`}>
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  )
}

export default FeatureCard