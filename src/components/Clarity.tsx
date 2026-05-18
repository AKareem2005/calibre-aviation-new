// src/components/Clarity.tsx
import { useEffect } from 'react';

const CLARITY_PROJECT_ID = "wsy6yv542o"; // Replace with your actual Clarity ID

export function Clarity() {
  useEffect(() => {
    // Load Clarity script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
    `;
    document.head.appendChild(script);
  }, []);

  return null;
}