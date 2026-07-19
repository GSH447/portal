import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Online Consultations",
  category: "Specialty Units",
  image: "/assets/images/services/SpecialtyUnits/onlineConsultation11.svg",
  tagline: "Seamless Telehealth Access to Gracespring Medical Specialists",
  overview: "Our Telehealth framework bridges geographical gaps by providing private, video-enabled online clinical consultations, giving you access to medical specialists for follow-ups and second opinions right from home or the office.",
  features: [
    "Secure, Encrypted High-Definition Video Tele-consultations with Specialists",
    "Digital Prescription Transmissions and Diagnostic Lab Ordering Integration",
    "Remote Review of Lab Results, Imaging Studies, and Electronic Medical Records",
    "Structured Digital Follow-Up Protocols for Stable Chronic Disease Management"
  ]
};

export const metadata = {
  title: `Online Consultations & Telehealth - Gracespring Hospitals`,
  description: `Secure remote telemedicine care options and virtual clinical reviews managed by Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function OnlineConsultPage() {
  return <ServicePageLayout data={pageData} />;
}