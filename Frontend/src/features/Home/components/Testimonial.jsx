import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { COLORS } from "../../../../constants";

const Testimonial = ({ text, name, desc, profilePic }) => {
  return (
    <div
      className="relative p-6 md:p-8 rounded-xl border transition-all duration-500 hover:border-white/20 group h-full flex flex-col"
      style={{
        backgroundColor: COLORS.TestinomialBgColor,
        borderColor: COLORS.TestinomialBorderColor,
      }}
    >
      {/* Floating quote badge */}
      <div
        className="absolute -top-3 left-6 w-6 h-6 flex items-center justify-center rounded-full border"
        style={{
          backgroundColor: COLORS.TestinomialBgColor,
          borderColor: COLORS.TestinomialBorderColor,
          color: COLORS.TestinomialBorderColor,
        }}
      >
        <FormatQuoteIcon className="!text-sm" />
      </div>

      {/* Text */}
      <div className="flex-1 pt-2">
        <p className="text-base leading-relaxed text-slate-300 font-medium">
          "{text}"
        </p>
      </div>

      {/* Customer */}
      <div className="pt-6 flex items-center gap-3 mt-auto">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{
            backgroundColor: COLORS.TestinomialProfilePicBgColor,
            border: `1px solid ${COLORS.TestinomialBorderColor}`,
          }}
        >
          {profilePic}
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold leading-tight">
            {name}
          </h3>
          <p
            className="text-xs mt-0.5"
            style={{ color: COLORS.TestinomialDescTextColor }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
