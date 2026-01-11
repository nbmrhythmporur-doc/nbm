import localFont from "next/font/local";

export const primaryFont = localFont({
  src: [
    {
      path: "../../public/fonts/AlbraGroteskTRIAL-Regular.otf",    
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AlbraGroteskTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});
