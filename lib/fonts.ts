import localFont from "next/font/local";

export const monumentExtended = localFont({
  src: [
    {
      path: "../public/fonts/MonumentExtended-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MonumentExtended-Ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-monument",
  display: "swap",
});

export const gtSuper = localFont({
  src: [
    {
      path: "../public/fonts/GT-Super-Text-Book.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gt-super",
  display: "swap",
});

export const wildYouth = localFont({
  src: [
    {
      path: "../public/fonts/WildYouth.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-wild-youth",
  display: "swap",
});

export const southampton = localFont({
  src: [
    {
      path: "../public/fonts/Southampton.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-southampton",
  display: "swap",
});
