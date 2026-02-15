"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center"
      style={{
        paddingTop: "max(env(safe-area-inset-top), 1.5rem)",
        paddingBottom: "max(env(safe-area-inset-bottom), 1.5rem)",
        paddingLeft: "max(env(safe-area-inset-left), 1rem)",
        paddingRight: "max(env(safe-area-inset-right), 1rem)",
      }}
    >
      {/* Soft floating accents */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute top-16 left-6 w-32 h-32 sm:w-40 sm:h-40 bg-blue-100 rounded-full blur-2xl"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-20 right-8 w-44 h-44 sm:w-52 sm:h-52 bg-cyan-100 rounded-full blur-3xl"
            animate={{ y: [0, -22, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg text-center px-2">
        {/* Animated Physio SVG */}
        <motion.div
          className="relative flex justify-center mb-6 sm:mb-10"
          animate={reduceMotion ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Healing rings */}
          {!reduceMotion && (
            <>
              <motion.div
                className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-blue-200"
                animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-blue-300/60"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}

          {/* SVG */}
          <svg
            viewBox="0 0 200 200"
            className="relative z-10 w-36 sm:w-44 md:w-52 h-auto"
            aria-hidden="true"
          >
            {/* Head */}
            <circle cx="100" cy="38" r="12" stroke="#2563EB" strokeWidth="3" />

            {/* Spine */}
            <motion.path
              d="M100 50 C95 70, 105 90, 100 110 C95 130, 105 150, 100 170"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
              animate={
                reduceMotion
                  ? {}
                  : {
                      d: [
                        "M100 50 C95 70, 105 90, 100 110 C95 130, 105 150, 100 170",
                        "M100 50 C105 70, 95 90, 100 110 C105 130, 95 150, 100 170",
                        "M100 50 C95 70, 105 90, 100 110 C95 130, 105 150, 100 170",
                      ],
                    }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Joint pulses */}
            {[70, 95, 120, 145].map((y, i) => (
              <motion.circle
                key={i}
                cx="100"
                cy={y}
                r="4"
                fill="#3B82F6"
                animate={reduceMotion ? {} : { opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Arms */}
            <path
              d="M100 80 L72 95"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M100 80 L128 95"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Text */}
        <h1 className="text-5xl sm:text-6xl font-semibold text-blue-600 mb-2">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-3">
          This page is out of alignment
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
          The page you’re looking for couldn’t be found.
          Let’s get you back to proper movement and care.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/appointment"
            className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
}
