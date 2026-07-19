import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Haematology Specialist Care",
  category: "Internal Medicine",
  image: "/assets/images/services/InternalMedicine/haematology.jpg",
  tagline: "Specialized Management for Malignant and Non-Malignant Blood Conditions",
  overview: "Our Haematology Service offers expert diagnosis and therapeutics for anomalies across white cells, red cells, platelets, and coagulation factor systems.",
  features: [
    "Comprehensive Sickle Cell Disease Crisis Management & Chronic Maintenance",
    "Diagnostic Evaluation of Severe Anemias, Leucopenias, and Thrombocytopenias",
    "Management of Thromboembolic Disorders and Bleeding Diatheses",
    "Therapeutic Phlebotomy and Blood Product Transfusion Supervision"
  ]
};

export const metadata = {
  title: `Haematology Specialist Care - Gracespring Hospitals`,
  description: `Specialized clinical care for blood disorders and bone marrow pathologies at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function HaematologyPage() {
  return <ServicePageLayout data={pageData} />;
}