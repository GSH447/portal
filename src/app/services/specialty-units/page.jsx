import React from "react";

import ServiceParentPage from "../../../../components/Product&Services/ServiceParentPage";

export const metadata = {
  title: `Specialty Units - Gracespring Hospitals`,
  description: `Critical care facilities and auxiliary healthcare ecosystems at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Our managed networks encompass ICU & Emergency Medicine, Dialysis, Chemotherapy, Diagnostic Services, Dental, Ophthalmology, Physiotherapy, Wellness, and Online Consultations.`,
};

export default function SpecialtyUnitsParent() {
  return <ServiceParentPage targetHref="/services/specialty-units" />;
}

