import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Orthopaedics Surgery",
  category: "Surgical Services",
    image: "/assets/images/services/surgeries/orthopedic1.svg",
  tagline: "Restoring Mobility through Joint, Bone, and Sports Medicine Excellence",
  overview: "Our Orthopaedic Surgery team focuses on correcting musculoskeletal deformities, treating acute bone fractures, managing degenerative joint problems, and providing sophisticated joint replacement procedures.",
  features: [
    "Total Knee and Total Hip Replacement Arthroplasty",
    "Complex Fracture Fixation (Internal and External Stabilization)",
    "Arthroscopic Sports Medicine Interventions (ACL & Meniscal Repairs)",
    "Correction of Deformities and Bone Realignment Operations"
  ]
};

export const metadata = {
  title: `Orthopaedics Surgery - Gracespring Hospitals`,
  description: `Expert orthopedic surgical procedures and joint reconstruction at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Comprehensive musculoskeletal care.`,
};

export default function OrthopaedicsSurgeryPage() {
  return <ServicePageLayout data={pageData} />;
}