"use client";

import { useEffect, useState, FormEvent } from "react";
import { Phone, MessageSquare, ArrowUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [isCallbackDrawerOpen, setIsCallbackDrawerOpen] = useState(false);
  const [callbackNumber, setCallbackNumber] = useState("");
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCallbackSubmit = (e: FormEvent) => {
    e.preventDefault();

    setCallbackSuccess(true);

    setTimeout(() => {
      setCallbackSuccess(false);
      setCallbackNumber("");
      setIsCallbackDrawerOpen(false);
    }, 3000);
  };

  const triggerWhatsApp = () => {
    const text =
      "Assalam-o-Alaikum ApnaGharPk, I would like to enquire about your luxury house construction and turnkey services. Please share standard rates.";

    window.open(
      `https://wa.me/923001234567?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* WhatsApp */}

      <button
        onClick={triggerWhatsApp}
        className="fixed bottom-6 left-6 z-40 bg-[#3E7C59] hover:bg-[#326448] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-[#3E7C59] group"
      >
        <MessageSquare className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-wider group-hover:pl-2">
          WhatsApp Desk
        </span>
      </button>

      {/* Callback */}

      <button
        onClick={() => setIsCallbackDrawerOpen(true)}
        className="fixed bottom-6 right-6 lg:right-24 z-40 bg-[#B8892D] hover:bg-[#C99A3C] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-[#B8892D] group"
      >
        <Phone className="w-5 h-5" />

        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-wider group-hover:pl-2">
          Request Callback
        </span>
      </button>

      {/* Back To Top */}

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="fixed bottom-24 right-6 z-40 bg-white border border-slate-200 text-[#1F2937] p-3 rounded-full shadow-lg"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Callback Modal */}

      <AnimatePresence>
        {isCallbackDrawerOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white max-w-sm w-full rounded-2xl border border-slate-200 p-6 shadow-2xl space-y-4"
            >
              <div className="flex justify-between items-center border-b pb-2">
                <h4 className="font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#B8892D]" />
                  Instant Callback
                </h4>

                <button
                  onClick={() => setIsCallbackDrawerOpen(false)}
                  className="text-xl"
                >
                  ×
                </button>
              </div>

              <p className="text-xs text-gray-500">
                Enter your WhatsApp / Phone Number.
              </p>

              {callbackSuccess ? (
                <div className="bg-green-50 border border-green-600 rounded-lg p-3 flex items-center gap-2 text-sm text-green-700">
                  <Check className="w-4 h-4" />
                  Callback request submitted.
                </div>
              ) : (
                <form
                  onSubmit={handleCallbackSubmit}
                  className="space-y-3"
                >
                  <input
                    required
                    type="tel"
                    value={callbackNumber}
                    onChange={(e) => setCallbackNumber(e.target.value)}
                    placeholder="Mobile Number"
                    className="w-full border rounded-lg p-3"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#B8892D] text-white rounded-lg py-3"
                  >
                    Call Me Back
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}