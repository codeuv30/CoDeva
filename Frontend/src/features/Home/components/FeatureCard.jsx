import React from 'react'
import { COLORS } from '../../../../constants'

const FeatureCard = ({
  icon,
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  bgColor,
  centered = false,
  className = '',
}) => {
  return (
    <div
      className={`p-8 md:p-10 h-full group hover:bg-white/[0.02] transition-colors duration-500 ${
        centered ? 'flex flex-col items-center text-center' : ''
      } ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex gap-2 text-[#00A3FF] items-center font-gmono tracking-wide mb-4">
        <span className="inline-flex group-hover:rotate-12 transition-transform duration-300">
          {icon}
        </span>
        <h2 className="text-xs font-medium tracking-widest uppercase text-[#00A3FF]">
            {label}
        </h2>
      </div>

      <div className={`mb-6 ${centered ? 'max-w-2xl' : ''}`}>
        <h1 className="text-xl md:text-2xl font-semibold leading-tight mb-3">
          {title}
        </h1>
        <p
          className="text-sm leading-relaxed opacity-70"
          style={{ color: COLORS.HomePageSubMainTextColor }}
        >
          {description}
        </p>
      </div>

      <div
        className={`relative overflow-hidden rounded-lg border border-[#3f4852]/60 group-hover:border-[#3f4852] transition-colors duration-500 ${
          centered ? 'w-full' : ''
        }`}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  )
}

export default FeatureCard