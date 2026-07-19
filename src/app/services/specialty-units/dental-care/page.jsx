import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Dental Care",
  category: "Specialty Units",
  image: "/assets/images/services/SpecialtyUnits/dental11.svg",
  tagline: "Comprehensive Oral Health, Restorative, and Maxillofacial Solutions",
  overview: "Our Dental Clinic delivers preventive, cosmetic, and surgical oral interventions, operating modern equipment for restorations, endodontics, and structural jaw fixes.",
  features: [
    "Routine Scaling, Deep Root Planing, and Advanced Periodontal Management",
    "Precision Root Canal Therapies (Endodontics) & Permanent Composite Fillings",
    "Surgical Tooth Extractions, Disimpactions & Restorative Crown Placements",
    "Maxillofacial Trauma Support, Orthodontic Alignments & Preventative Tracking"
  ]
};

export const metadata = {
  title: `Dental Care Unit - Gracespring Hospitals`,
  description: `Comprehensive oral health solutions, surgery, and preventive clinical dental services at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function DentalPage() {
  return <ServicePageLayout data={pageData} />;
}