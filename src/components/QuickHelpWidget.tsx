"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ArrowRight, ExternalLink, Mail, Phone, MessageCircle } from "lucide-react";

export function QuickHelpWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger floating entrance animation after page mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto font-sans">
      <AnimatePresence mode="wait">
        {isOpen ? (
          /* EXPANDED POPUP CARD */
          <motion.div
            key="help-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-80 sm:w-96 bg-[#ffffff] border border-[#E5E7EB] shadow-2xl rounded-xs p-6 space-y-4 relative overflow-hidden"
          >
            {/* Top Vivid Red Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#fd0000]" />

            {/* Header with Close Button */}
            <div className="flex items-start justify-between border-b border-[#E5E7EB] pb-3 pt-1">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#fd0000]">
                  <span className="h-2 w-2 rounded-full bg-[#fd0000] animate-pulse" />
                  KD Live Assist
                </div>
                <h3 className="font-display text-xl font-bold text-[#0A0A0A] leading-snug mt-0.5">
                  Contact KD Engineers
                </h3>
                <p className="text-xs text-[#525252] font-light mt-0.5">
                  Choose the most convenient enquiry option.
                </p>
              </div>

              {/* Close Button x */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#525252] hover:text-[#0A0A0A] hover:bg-[#FAFAFA] rounded-xs transition-colors cursor-pointer border border-transparent hover:border-[#E5E7EB]"
                aria-label="Close Pop-up"
              >
                <X size={18} />
              </button>
            </div>

            {/* 3 Main Action Buttons */}
            <div className="space-y-2.5 pt-1">
              {/* Option 1: Request a Quote */}
              <Link
                href="/contact?enquiry=quote"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#fd0000] text-white px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs hover:bg-[#0A0A0A] transition-colors flex items-center justify-between group shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  Request a Quote
                </span>
                <span className="text-white/80 group-hover:text-white">&rarr;</span>
              </Link>

              {/* Option 2: WhatsApp */}
              <a
                href="https://wa.me/919953336623"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors flex items-center justify-between group"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={15} />
                  WhatsApp
                </span>
                <ExternalLink size={13} className="opacity-70 group-hover:opacity-100" />
              </a>

              {/* Option 3: Email */}
              <a
                href="mailto:info@kdengineers.in"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#FAFAFA] text-[#0A0A0A] border border-[#E5E7EB] px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider rounded-xs hover:border-[#fd0000] hover:text-[#fd0000] hover:bg-white transition-colors flex items-center justify-between group"
              >
                <span className="flex items-center gap-2">
                  <Mail size={15} className="text-[#fd0000]" />
                  Email
                </span>
                <span className="text-[11px] font-mono text-[#525252] group-hover:text-[#fd0000]">info@kdengineers.in</span>
              </a>
            </div>

            {/* Quick Contact Footer Note */}
            <div className="pt-2 border-t border-[#E5E7EB] text-[11px] text-[#737373] font-mono flex items-center justify-between">
              <span>Faridabad &amp; Pune Plants</span>
              <a href="tel:+919953336623" className="hover:text-[#fd0000] font-bold text-[#0A0A0A] flex items-center gap-1">
                <Phone size={11} /> +91 99533 36623
              </a>
            </div>
          </motion.div>
        ) : (
          /* COLLAPSED FLOATING PILL BUTTON */
          <motion.button
            key="help-trigger"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(true)}
            className="bg-[#0A0A0A] text-white border border-[#262626] shadow-2xl px-4 py-3 rounded-full flex items-center gap-3 hover:border-[#fd0000] transition-colors cursor-pointer group"
          >
            {/* Glowing Red Pulsing Dot / Icon Container */}
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#fd0000] text-white shrink-0 shadow-md">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd0000] opacity-40"></span>
              <MessageSquare size={16} />
            </span>

            {/* Teaser Text */}
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-white group-hover:text-[#fd0000] transition-colors pr-1">
              How can I help you?
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
