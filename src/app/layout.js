"use client";
import "./globals.css";
import ScrollToTop from "../../components/ScrollToTop";
import AccessibilityComp from "../../components/Accessibility/Accessibility";
import CookieConsent from "../../components/Cookies/CookieConsent";
// import { useVisitorTracker } from "../../hooks/useVisitorTracker";

export default function RootLayout({ children }) {

  // useVisitorTracker(); // This will trigger on every page navigation

  return (
    <html lang="en">
      <body
        style={{ overflowX: "hidden", fontFamily: "Avenir, AvenirBold", backgroundColor: "white", color: "black" }}
      >
        {children}
        <CookieConsent />
        <AccessibilityComp />
        <ScrollToTop />
      </body>
    </html>
  );
}






