import React from 'react'

const SectionDivider = ({ className = '' }) => (
  <div className={`w-full flex justify-center px-4 ${className}`}>
    <div className="border-b border-white/10 w-[95%] max-w-6xl" />
  </div>
)

export default SectionDivider