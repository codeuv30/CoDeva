import React, { useState } from "react";
import { Cpu } from "lucide-react";
import { COLORS } from "../../../../constants";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

import FadeIn from "../components/FadeIn";
import SectionDivider from "../components/SectionDivider";
import FeatureCard from "../components/FeatureCard";
import SignInModal from "../components/SignInModal";

const LandingPage = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <>
      <div
        className="w-full flex-1"
        style={{ backgroundColor: COLORS.HomePageBgColor }}
      >
        {/* Hero */}
        <section className="w-full flex justify-center items-center pt-40 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-white">
                Code with Intent.
                <br />
                Remember Why.
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                className="mt-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
                style={{ color: COLORS.HomePageMutedColor }}
              >
                The first editor that maps your architectural decisions, not
                just your code. Engineered for high-performance teams to reduce
                cognitive load and preserve context over decades.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => setSignInOpen(true)}
                  className="text-sm tracking-wide font-sans px-8 py-3.5 font-semibold rounded-lg text-white transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: COLORS.NavbarButtonBgColor }}
                >
                  Get Started
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("visual-map")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm tracking-wide font-sans px-8 py-3.5 font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
                >
                  Explore the Map
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full flex justify-center pb-24 px-4">
          <FadeIn delay={0.2}>
            <div className="relative w-[95%] max-w-6xl">
              <img
                src="/assets/section-1-image.png"
                alt="Codeva Editor"
                className="w-full rounded-xl border border-white/10 shadow-2xl shadow-black/50"
              />
            </div>
          </FadeIn>
        </section>

        <SectionDivider />

        {/* Problem Statement */}
        <section className="w-full pt-24 pb-16 flex justify-center px-4">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                Codebases rot because intent is lost.
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p
                className="mt-6 text-base md:text-lg font-medium leading-relaxed"
                style={{ color: COLORS.HomePageMutedColor }}
              >
                Lines of code tell you{" "}
                <span className="text-white font-semibold">what</span> happened.
                Documentation tells you what{" "}
                <span className="text-white font-semibold">should</span> happen.
                Neither tells you{" "}
                <span className="text-white font-semibold">why</span> a decision
                was made at 3 AM three years ago. Codeva bridges the gap between
                raw syntax and human reasoning.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="w-full pt-20 flex justify-center pb-24 px-4" id="visual-map">
          <div className="w-[95%] max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden">
            <FeatureCard
              icon={<Cpu size={16} />}
              label="Decision Memory"
              title="Your Code's Long-Term Memory."
              description="Surface the architectural reasoning right beside the complex functions, automatically linked to PRs and design docs."
              imageSrc="/assets/section-3-decision-image.png"
              imageAlt="Decision Memory"
              bgColor={COLORS.HomePageShowcaseSectionBgColor}
            />
            <FeatureCard
              icon={<EditNoteIcon />}
              label="Intent Mode"
              title="Refactor with Purpose."
              description="View side-by-side diffs augmented with performance rationale and historical context before you commit changes."
              imageSrc="/assets/section-3-intent-mode-image.png"
              imageAlt="Intent Mode"
              bgColor={COLORS.HomePageShowcaseSectionBgColor}
            />
            <FeatureCard
              icon={<AccountTreeIcon />}
              label="Visual Map"
              title="The Architecture, Unfolded."
              description="Navigate complex dependencies through an interactive, zoomable node graph that updates in real-time as you code."
              imageSrc="/assets/section-3-visual-map-image.png"
              imageAlt="Visual Map"
              bgColor={COLORS.HomePageShowcaseSectionBgColor}
              className="md:col-span-2"
            />
            <FeatureCard
              icon={<IntegrationInstructionsIcon />}
              label="Workflow"
              title="Seamlessly GitHub Integrated."
              description="Connect your repositories in seconds. Codeva imports your history and begins mapping intent immediately."
              imageSrc="/assets/section-3-github-integration.png"
              imageAlt="GitHub Integration"
              bgColor={COLORS.HomePageShowcaseSectionBgColor}
              className="md:col-span-2"
              centered
            />
          </div>
        </section>

        <SectionDivider />

        {/* CTA */}
        <section className="w-full flex justify-center py-24 px-4">
          <FadeIn>
            <div className="relative w-[95%] max-w-4xl rounded-2xl p-12 md:p-16 text-center border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Ready to preserve your intent?
                </h2>
                <p
                  className="mb-8 max-w-lg mx-auto text-base md:text-lg"
                  style={{ color: COLORS.HomePageMutedColor }}
                >
                  Join engineers who never lose context again.
                </p>
                <button
                  className="text-sm tracking-wide font-sans px-8 py-3.5 font-semibold rounded-lg text-white transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: COLORS.NavbarButtonBgColor }}
                >
                  Start Mapping for Free
                </button>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>

      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
    </>
  );
};

export default LandingPage;
