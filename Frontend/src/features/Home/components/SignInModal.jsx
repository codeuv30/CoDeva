import React from "react";
import { Dialog, DialogContent } from "../../../components/ui/dialog";
import GitHubIcon from "@mui/icons-material/GitHub";
import { COLORS } from "../../../../constants";

const SignInModal = ({ open, onOpenChange }) => {
  const handleGitHubLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md p-0 border border-white/10 rounded-2xl overflow-hidden"
        style={{ backgroundColor: COLORS.NavbarBackground }}
      >
        <div className="px-8 pt-10 pb-8 flex flex-col items-center text-center">
          {/* Logo pill */}
          <div className="mb-6 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03]">
            <span className="font-jetmono font-bold text-lg tracking-widest text-white">
              CODEVA
            </span>
          </div>

          <h2 className="text-xl font-semibold text-white mb-2">
            Sign in to Codeva
          </h2>
          <p
            className="text-sm leading-relaxed max-w-[300px] mb-8"
            style={{ color: COLORS.HomePageMutedColor }}
          >
            Connect your GitHub account to access your repositories, decision
            memories, and visual codebase maps.
          </p>

          {/* Sweep-fill button — animates automatically on modal open */}
          <button
            onClick={handleGitHubLogin}
            className="relative w-full overflow-hidden flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-lg border border-white/25 bg-transparent"
          >
            {open && (
              <span
                className="absolute inset-0 bg-white animate-sweep-fill"
                style={{ transformOrigin: "left", transform: "scaleX(0)" }}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10 flex items-center gap-2 text-white animate-sweep-text">
              <GitHubIcon fontSize="small" />
              Continue with GitHub
            </span>
          </button>

          <p
            className="text-xs mt-6 leading-relaxed"
            style={{ color: COLORS.HomePageMutedColor }}
          >
            Codeva only requests read access to public/private repositories you
            explicitly authorize. SSO &amp; Enterprise ready.
          </p>
        </div>

        <div
          className="px-8 py-4 text-center text-xs border-t border-white/10"
          style={{ color: COLORS.HomePageMutedColor }}
        >
          By signing in, you agree to our{" "}
          <a
            href="/terms"
            className="underline hover:text-white transition-colors"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="underline hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          .
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
