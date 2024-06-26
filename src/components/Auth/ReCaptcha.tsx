"use client";

import { useEffect, useState } from "react";

type Props = {
  onVerify: (token: string) => void;
};
function ReCaptcha({ onVerify }: Props) {
  const [tokenRequested, setTokenRequested] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const handleScriptLoad = () => {
      if (!tokenRequested) {
        (window as any).grecaptcha.ready(() => {
          (window as any).grecaptcha
            .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
              action: "submit",
            })
            .then((token: string) => {
              onVerify(token);
              setTokenRequested(true);
            });
        });
      }
    };

    script.addEventListener("load", handleScriptLoad);

    return () => {
      document.body.removeChild(script);
      script.removeEventListener("load", handleScriptLoad);

      // Remove reCAPTCHA badge
      const badge = document.querySelector(".grecaptcha-badge");
      if (badge) {
        badge.parentNode?.removeChild(badge);
      }
    };
  }, [onVerify, tokenRequested]);

  return null;
}

export default ReCaptcha;
