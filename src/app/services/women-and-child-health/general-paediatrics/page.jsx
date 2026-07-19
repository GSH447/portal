import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "General Paediatrics",
  category: "Women & Child Health",
  image: "/assets/images/services/WomenChildHealth/GeneralPaediatrics11.svg",
  tagline: "Nurturing Healthy Development from Infancy through Adolescence",
  overview: "Our General Paediatrics division provides comprehensive outpatient and inpatient clinical coverage for children, ensuring timely acute treatment and consistent developmental monitoring.",
  features: [
    "Routine Well-Baby Checks, Growth Charting & Developmental Milestones",
    "Comprehensive Childhood Immunization & National/International Vaccine Scheduling",
    "Management of Acute Childhood Infections (Malaria, Pneumonias, Enteritis)",
    "Asthma Control, Allergy Testing, and Nutritional Counseling Services"
  ]
};


export const metadata = {
  title: `General Paediatrics - Gracespring Hospitals`,
  description: `Complete children health management and adolescent physiological tracking at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};


export default function PaediatricsPage() {
  return <ServicePageLayout data={pageData} />;
}