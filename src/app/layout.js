"use client";
import "./globals.css";
import Header from "../../components/Header"; //Header components
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import AccessibilityComp from "../../components/Accessibility/Accessibility";
import CookieConsent from "../../components/Cookies/CookieConsent";
import { useVisitorTracker } from "../../hooks/useVisitorTracker";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isPatientDashboard = pathname?.startsWith("/patient-dashboard");

  useVisitorTracker(); // This will trigger on every page navigation

  return (
    <html lang="en">
      <body
        style={{ overflowX: "hidden", fontFamily: "Avenir, AvenirBold", backgroundColor: "white", color: "black" }}
      >
        {/* {!isPatientDashboard && <Header />} */}
        {children}
        {/* {!isPatientDashboard && <Footer />} */}
        <CookieConsent />
        <AccessibilityComp />
        <ScrollToTop />
      </body>
    </html>
  );
}






