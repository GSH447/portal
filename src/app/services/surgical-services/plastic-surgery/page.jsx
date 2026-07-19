import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Plastic Surgery",
  category: "Surgical Services",
  image: "/assets/images/services/surgeries/plastic.jpg",
  tagline: "Expert Reconstructive and Aesthetic Operative Interventions",
  overview: "Our Plastic and Reconstructive Surgery team provides highly specialized treatment designed to reconstruct defects caused by burns, trauma, tumors, or congenital abnormalities, alongside elective aesthetic enhancement options.",
  features: [
    "Microvascular Reconstructive Surgery & Soft Tissue Flap Transfers",
    "Comprehensive Burn Reconstruction and Contracture Releases",
    "Cleft Lip and Cleft Palate Corrections & Congenital Craniofacial Care",
    "Scar Revision, Post-Traumatic Reconstruction, and Aesthetic Surgeries"
  ]
};

export const metadata = {
  title: `Plastic Surgery - Gracespring Hospitals`,
  description: `Reconstructive and aesthetic plastic surgery services at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Advanced surgical solutions.`,
};

export default function PlasticSurgeryPage() {
  return <ServicePageLayout data={pageData} />;
}