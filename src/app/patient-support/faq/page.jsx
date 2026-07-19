import React from "react";
// import FAQs from "../../../../components/FAQs/FAQs"; // Adjust this path to match your folder structure
import FAQs from "../../../../components/Faq"; // Adjust this path to match your folder structure

export const metadata = {
  title: `FAQs - The Gracespring Hospitals`,
  description: `Find answers to frequently asked questions about Gracespring Hospitals Limited in Sangotedo, Lekki. Learn more about our specialized care wings (Pistis, Elpis, Agape), online consultant bookings, 24/7 emergency services, and advanced surgical procedures led by our expert medical team.`,
};

export default function FAQus() {
  return (
    <>
      <FAQs />
    </>
  );
}