import React from 'react';

import ServicePageLayout from "../../../../../components/ServicePageLayout";

const pageData = {
  title: "Cardiothoracic and Vascular Surgery",
  category: "Surgical Services",
  image: "/assets/images/services/ctvs.jpg",
  tagline: "World-Class Open Heart, Thoracic, and Endovascular Interventions",
  overview: "Our Cardiothoracic and Vascular Surgery unit provides comprehensive surgical treatment for diseases affecting the heart, lungs, esophagus, mediastinum, and major blood vessels.",
  features: [
    "Adult & Paediatric Open Heart Surgery (Congenital & Acquired)",
    "Video-Assisted Thoracoscopic Surgery (VATS) - Minimally Invasive",
    "Aneurysm Repairs (including EVAR & TEVAR techniques)",
    "Coronary Artery Bypass Grafting (CABG) & Valve Replacements",
    "Creation of Arterio-Venous (AV) Fistulae for Dialysis Access"
  ]
};

export const metadata = {
  title: `Cardiothoracic and Vascular Surgery - Gracespring Hospitals`,
  description: `Advanced cardiothoracic and vascular operative care at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Dedicated to complex cardiothoracic interventions and management.`,
};

export default function CardiothoracicPage() {
  return <ServicePageLayout data={pageData} />;
}