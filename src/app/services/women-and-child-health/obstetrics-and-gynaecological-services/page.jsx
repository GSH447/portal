import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Obstetrics & Gynaecological Services",
  category: "Women & Child Health",
  image: "/assets/images/services/oandg.jpg",
  tagline: "Comprehensive Care Across Every Stage of Womanhood",
  overview: "Our OB/GYN department provides premium maternity services, high-risk obstetrics monitoring, routine preventative screenings, and advanced gynaecological interventions to support women's health.",
  features: [
    "Comprehensive Antenatal Care, Electronic Fetal Monitoring & Safe Delivery",
    "High-Risk Pregnancy Management (Preeclampsia, Gestational Diabetes)",
    "Minimally Invasive Gynaecological Surgeries (Myomectomy & Hysterectomy)",
    "Cervical Cancer Screening, Pap Smears, and Preventive HPV Vaccinations"
  ]
};

export const metadata = {
  title: `Obstetrics & Gynaecological Services - Gracespring Hospitals`,
  description: `Comprehensive maternal health cycles, prenatal tracking, and gynecological care at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function ObGynPage() {
  return <ServicePageLayout data={pageData} />;
}