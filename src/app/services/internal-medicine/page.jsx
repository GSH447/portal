import React from "react";
import ServiceParentPage from "../../../../components/Product&Services/ServiceParentPage";

export const metadata = {
  title: `Internal Medicine - Gracespring Hospitals`,
  description: `Comprehensive diagnostic management and expert internal specialist care at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Our clinical portfolios span advanced Cardiology, Pulmonology, Gastroenterology, Nephrology, Endocrinology, Rheumatology, Neurology, Oncology, and Haematology Specialist Care.`,
};

export default function InternalMedicineParent() {
  return <ServiceParentPage targetHref="/services/internal-medicine" />;
}

