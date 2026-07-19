import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Rheumatology Specialist Care",
  category: "Internal Medicine",
  image: "/assets/images/services/InternalMedicine/Rheumatology.png",
  tagline: "Expert Control of Autoimmune and Musculoskeletal Diseases",
  overview: "Our Rheumatology clinic offers advanced diagnostic paths and long-term immunomodulatory therapies for systemic autoimmune conditions, complex connective tissue diseases, and destructive joint inflammations.",
  features: [
    "Comprehensive Care for Rheumatoid Arthritis and Osteoarthritis",
    "Systemic Lupus Erythematosus (SLE) and Scleroderma Management",
    "Therapeutic Management of Gouty Arthritis and Seronegative Spondylarthropathies",
    "Intra-articular Joint Injections for Pain Control & Inflammation Suppression"
  ]
};

export const metadata = {
  title: `Rheumatology Specialist Care - Gracespring Hospitals`,
  description: `Expert treatment for autoimmune diseases and musculoskeletal conditions at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function RheumatologyPage() {
  return <ServicePageLayout data={pageData} />;
}