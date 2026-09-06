import React from "react";
import { Cpu } from "lucide-react";
import { COLORS } from "../../../../constants";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

import FadeIn from "../components/FadeIn";
import SectionDivider from "../components/SectionDivider";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
  return (
    <div
      className="w-full flex-1"
      style={{ backgroundColor: COLORS.HomePageBgColor }}
    >
      {/* Hero */}
      <section className="w-full flex justify-center items-center pt-40 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div
              className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.15] tracking-tight"
              style={{ color: COLORS.HomePageMainTextColor }}
            >
              <h1 className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Code with Intent.
              </h1>
              <h1 className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent mt-2">
                Remember Why.
              </h1>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mt-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed opacity-80"
              style={{ color: COLORS.HomePageSubMainTextColor }}
            >
              The first editor that maps your architectural decisions, not just
              your code. Engineered for high-performance teams to reduce
              cognitive load and preserve context over decades.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                className="text-sm tracking-wide font-sans px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10 active:scale-95"
                style={{ backgroundColor: COLORS.NavbarButtonBgColor }}
              >
                Get Started
              </button>
              <button className="text-sm tracking-wide font-sans px-8 py-3.5 font-semibold rounded-lg border border-white/20 text-white bg-transparent backdrop-blur-sm hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 active:scale-95">
                Explore the Map
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full flex justify-center pb-24 px-4">
        <FadeIn delay={0.2}>
          <div className="relative w-[95%] max-w-6xl group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src="/assets/section-1-image.png"
              alt="Codeva Editor"
              className="relative w-full rounded-xl border border-white/10 shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Problem Statement */}
      <section className="w-full pt-24 pb-16 flex justify-center px-4">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
              Codebases rot because intent is lost.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-6 text-base md:text-lg font-medium leading-relaxed"
              style={{ color: COLORS.HomePageSubMainTextColor }}
            >
              Lines of code tell you{" "}
              <span className="italic text-white/90">what</span> happened.
              Documentation tells you what{" "}
              <span className="italic text-white/90">should</span> happen.
              Neither tells you{" "}
              <span className="italic text-white/90">why</span> a decision was
              made at 3 AM three years ago. Codeva bridges the gap between raw
              syntax and human reasoning.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Feature Grid — FIXED overlap using standard col-span */}
      <section className="w-full pt-20 flex justify-center pb-24 px-4 text-white">
        <div className="w-[95%] max-w-6xl grid grid-cols-1 md:grid-cols-2 border border-[#3f4852]/80 rounded-xl overflow-hidden shadow-2xl shadow-black/30">
          <FeatureCard
            icon={<Cpu size={16} />}
            label="Decision Memory"
            title="Your Code's Long-Term Memory."
            description="Surface the architectural reasoning right beside the complex functions, automatically linked to PRs and design docs."
            imageSrc="/assets/section-3-decision-image.png"
            imageAlt="Decision Memory"
            bgColor={COLORS.HomePageShowcaseSectionBgColor}
            className="border-b md:border-r border-[#3f4852]/80"
          />

          <FeatureCard
            icon={<EditNoteIcon />}
            label="Intent Mode"
            title="Refactor with Purpose."
            description="View side-by-side diffs augmented with performance rationale and historical context before you commit changes."
            imageSrc="/assets/section-3-intent-mode-image.png"
            imageAlt="Intent Mode"
            bgColor={COLORS.HomePageShowcaseSectionBgColor}
            className="border-b border-[#3f4852]/80"
          />

          <FeatureCard
            icon={<AccountTreeIcon />}
            label="Visual Map"
            title="The Architecture, Unfolded."
            description="Navigate complex dependencies through an interactive, zoomable node graph that updates in real-time as you code."
            imageSrc="/assets/section-3-visual-map-image.png"
            imageAlt="Visual Map"
            bgColor={COLORS.HomePageCardBgColor}
            className="border-b border-[#3f4852]/80 md:col-span-2"
          />

          <FeatureCard
            icon={<IntegrationInstructionsIcon />}
            label="Workflow"
            title="Seamlessly GitHub Integrated."
            description="Connect your repositories in seconds. Codeva imports your history and begins mapping intent immediately."
            imageSrc="/assets/section-3-github-integration.png"
            imageAlt="GitHub Integration"
            bgColor={COLORS.HomePageCardBgColor}
            className="md:col-span-2"
            centered
          />
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials */}
      <section className="flex flex-col items-center w-full pt-24 pb-20 px-4">
        <FadeIn>
          <h2
            className="uppercase font-gmono text-[0.7rem] tracking-widest text-center mb-16"
            style={{ color: COLORS.HomePageSubMainTextColor }}
          >
            Trusted by high-performance engineering teams
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16 text-lg md:text-xl font-semibold"
            style={{ color: COLORS.HomePageShowcaseCompaniesTextColor }}
          >
            <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
              ACME Corp
            </span>
            <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
              Globex
            </span>
            <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
              Soylent
            </span>
            <span className="hover:text-white/80 transition-colors duration-300 cursor-default">
              Initech
            </span>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full px-4">
          <FadeIn delay={0.15} className="flex-1">
            <Testimonial
              text="Codeva completely changed how we onboard senior engineers. The 'why' is finally documented right where it matters—next to the implementation."
              name="Sarah L."
              desc="VP Engineering, Vercel"
              profilePic="SL"
            />
          </FadeIn>

          <FadeIn delay={0.25} className="flex-1">
            <Testimonial
              text="The Visual Map isn't just a gimmick; it's our primary tool for architectural reviews now. It highlights tight coupling we wouldn't have spotted otherwise."
              name="David K."
              desc="Principal Architect, Linear"
              profilePic="DK"
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center pb-24 px-4">
        <FadeIn>
          <div className="relative w-[95%] max-w-4xl rounded-2xl p-12 md:p-16 text-center overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to preserve your intent?
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto text-base md:text-lg">
                Join thousands of engineers who never lose context again.
              </p>
              <button
                className="text-sm tracking-wide font-sans px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10 active:scale-95"
                style={{ backgroundColor: COLORS.NavbarButtonBgColor }}
              >
                Start Mapping for Free
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default LandingPage;
