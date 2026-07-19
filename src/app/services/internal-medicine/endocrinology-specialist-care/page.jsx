import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Endocrinology Specialist Care",
  image: "/assets/images/services/InternalMedicine/endocrinology.jpg",
  category: "Internal Medicine",
  tagline: "Precision Management of Diabetes, Thyroid, and Metabolic Disorders",
  overview: "Our Endocrinology clinic delivers comprehensive disease management frameworks for hormonal disturbances, focusing heavily on intensive diabetes care, metabolic syndromic management, and thyroid system normalization.",
  features: [
    "Intensive Type 1 and Type 2 Diabetes Management & Insulin Optimization",
    "Screening and Preventive Care for Diabetic Foot & Microvascular Damage",
    "Therapeutic Management of Hypothyroidism, Hyperthyroidism, and Nodules",
    "Evaluation of Adrenal, Pituitary, and Bone Mineral Conditions"
  ]
};

export const metadata = {
  title: `Endocrinology Specialist Care - Gracespring Hospitals`,
  description: `Specialist hormonal health and metabolic disorder care at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Advanced clinical diagnostics.`,
};

export default function EndocrinologyPage() {
  return <ServicePageLayout data={pageData} />;
}