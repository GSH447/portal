import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "General Surgery",
  category: "Surgical Services",
  image: "/assets/images/services/surgeries/gsh-gs.png",
  tagline: "Pioneering Laparoscopic & Minimally Invasive Solutions",
  overview: "Our General Surgery framework handles high-volume abdominal procedures with an emphasis on advanced minimal access (laparoscopic) interventions.",
  features: [
    "Laparoscopic Cholecystectomy (Gallbladder Removal)",
    "Laparoscopic and Open Hernia Repair (Inguinal, Umbilical, Incisional)",
    "Colorectal Resections for Diverticular Disease & Bowel Cancer",
    "Appendicectomy and Acute Trauma Surgical Interventions"
  ]
};

export const metadata = {
  title: `General Surgery - Gracespring Hospitals`,
  description: `Comprehensive general surgical operations and elective treatments at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Expert operative care options.`,
};

export default function GeneralSurgeryPage() {
  return <ServicePageLayout data={pageData} />;
}