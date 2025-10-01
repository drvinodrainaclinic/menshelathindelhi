"use client";

import { useEffect } from "react";

// Minimal global typings for Google Translate snippet
declare global {
  interface GoogleTranslateNamespace {
    TranslateElement: new (
      options: {
        pageLanguage: string;
        includedLanguages?: string;
        layout?: number;
        autoDisplay?: boolean;
      },
      elementId: string
    ) => void;
  }
  interface Window {
    google?: { translate?: GoogleTranslateNamespace };
    __initGoogleTranslate?: () => void;
  }
}

export default function TranslateWidget() {
  useEffect(() => {
    // Avoid duplicate script loads
    if (document.getElementById("google-translate-script")) return;

    const init = () => {
      if (typeof window.google !== "undefined" && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            // Major Indian languages; you can add/remove codes as needed
            includedLanguages:
              "hi,bn,ta,te,mr,gu,kn,ml,pa,ur,or,as,sd,ks,ne,si",
            layout: 1,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Google Translate script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=__initGoogleTranslate";
    window.__initGoogleTranslate = init;
    document.body.appendChild(script);

    return () => {
      // optional cleanup
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="hidden md:block fixed bottom-4 right-4 z-40 rounded-full bg-white/90 border border-black/10 px-3 py-2 shadow-sm"
      aria-label="Translate this page"
      title="Translate"
    />
  );
}
