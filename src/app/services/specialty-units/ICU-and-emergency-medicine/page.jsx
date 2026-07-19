import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "ICU & Emergency Medicine",
  category: "Specialty Units",
  image: "/assets/images/services/SpecialtyUnits/emergency11.svg",
  tagline: "24/7 High-Acuity Trauma, Resuscitation, and Critical Care Support",
  overview: "Our Intensive Care and Emergency Department operates continuously to stabilize critical multi-system trauma, cardiovascular crises, and acute respiratory compromise with advanced life-support technology.",
  features: [
    "Continuous Multi-Parameter Hemodynamic Monitoring and Invasive Support",
    "Mechanical Ventilation Setup, Airway Management, and Blood Gas Control",
    "Rapid Response Trauma Resuscitation, Triaging, and Cardiac Interventions",
    "Dedicated High-Dependency Care Units for Post-Operative Stabilizations"
  ]
};

export const metadata = {
  title: `ICU & Emergency Medicine - Gracespring Hospitals`,
  description: `24/7 high-dependency critical care unit and trauma emergency medicine infrastructure at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function IcuEmergencyPage() {
  return <ServicePageLayout data={pageData} />;
}