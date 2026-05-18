// src/components/Clarity.tsx
import { useEffect } from 'react';

declare global {
  interface Window {
    clarity?: (command: string, ...args: unknown[]) => void;
  }
}

const CLARITY_PROJECT_ID = "YOUR_PROJECT_ID"; // Replace with your actual ID

export function Clarity() {
  useEffect(() => {
    // Check if already loaded
    if (typeof window !== 'undefined' && !window.clarity) {
      // Load Clarity script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
      script.onerror = () => console.error('Failed to load Microsoft Clarity');
      
      // Initialize Clarity
      window.clarity = function(...args: unknown[]) {
        (window.clarity?.q = window.clarity?.q || []).push(args);
      };
      
      document.head.appendChild(script);
    }
  }, []);

  return null;
}