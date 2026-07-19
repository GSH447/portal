import React from "react";

import ServiceParentPage from "../../../../components/Product&Services/ServiceParentPage";

export const metadata = {
  title: `Women & Child Health - Gracespring Hospitals`,
  description: `Dedicated maternal care and pediatric development solutions provided at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Our specialized services are structured to provide reliable medical attention across Obstetrics & Gynaecological Services, Fertility Treatment, and General Paediatrics.`,
};

export default function WomenAndChildHealthParent() {
  return <ServiceParentPage targetHref="/services/women-and-child-health" />;
}