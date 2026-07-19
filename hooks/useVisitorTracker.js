import { useEffect } from 'react';
import axiosInstance from '../lib/axios';

export const useVisitorTracker = () => {
  useEffect(() => {
    // Only track if the user has consented or if you track all users
    const consent = localStorage.getItem("cookieConsent");
    
    // Send data to backend on every component mount (page change)
    const trackPageView = async () => {
      try {
        await axiosInstance.post("/?route=auth/track", {
          page_url: window.location.pathname,
          action: 'page_view' // Mark this as a view rather than a consent click
        });
      } catch (err) {
        console.error("Tracking error:", err);
      }
    };

    trackPageView();
  }, []); 
};