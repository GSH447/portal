import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Cardiology Specialist Care",
  category: "Internal Medicine",
  image: "/assets/images/services/InternalMedicine/cardiology.jpg",
  tagline: "Comprehensive Cardiovascular Health and Preventive Cardiology",
  overview: "Our Cardiology Unit provides diagnostic screening, treatment, and ongoing management for acute and chronic heart conditions, focusing on hypertension control, coronary artery diseases, and heart failure management.",
  features: [
    "Advanced Electrocardiography (ECG) and Echocardiography Studies",
    "24-Hour Holter and Continuous Ambulatory Blood Pressure Monitoring",
    "Cardiac Risk Assessment, Hypertension & Dyslipidemia Clinics",
    "Post-Myocardial Infarction Follow-up and Heart Failure Maintenance"
  ]
};


export const metadata = {
  title: `Cardiology Specialist Care - Gracespring Hospitals`,
  description: `Specialist cardiovascular diagnostics and therapy at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Premium diagnostic management for your heart.`,
};


export default function CardiologyPage() {
  return <ServicePageLayout data={pageData} />;
}