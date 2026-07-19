import React from "react";

import ServiceParentPage from "../../../../components/Product&Services/ServiceParentPage";

export const metadata = {
  title: `Surgical Services - Gracespring Hospitals`,
  description: `Explore advanced surgical care options at Gracespring Hospitals, located at Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Our state-of-the-art theater suites support procedures including Cardiothoracic, Vascular, Urology, General, Paediatric, Neurosurgery, Orthopaedics, and Plastic Surgery to ensure patients receive the highest standard of medical attention.`,
};

export default function SurgicalServicesParent() {
  return <ServiceParentPage targetHref="/services/surgical-services" />;
}