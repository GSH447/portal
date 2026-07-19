import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Oncology Specialist Care",
  category: "Internal Medicine",
  image: "/assets/images/services/InternalMedicine/Oncology.png",
  tagline: "Evidence-Based, Multi-Disciplinary Cancer Care and Support",
  overview: "Our Oncology Unit provides comprehensive clinical cancer care, delivering customized chemotherapy regimens, targeted immunotherapy pathways, and targeted supportive systems within a secure, calm ecosystem.",
  features: [
    "Solid Tumor Chemotherapy Infusions (Breast, Colon, Prostate, Lung)",
    "Targeted Systemic Therapies and Modern Biological Immunotherapy",
    "Multi-Disciplinary Tumor Board Reviews for Tailored Protocols",
    "Palliative Symptom Management and Comprehensive Pain Control Systems"
  ]
};

export const metadata = {
  title: `Oncology Specialist Care - Gracespring Hospitals`,
  description: `Comprehensive cancer therapeutics and tumor screening at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Compassionate medical attention.`,
};

export default function OncologyPage() {
  return <ServicePageLayout data={pageData} />;
}