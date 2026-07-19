import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Fertility Treatment",
  category: "Women & Child Health",
  image: "/assets/images/services/WomenChildHealth/women-and-child-healthfertility-treatment11.svg",
  tagline: "Advanced Reproductive Medicine and Assisted Conception Solutions",
  overview: "Our Fertility Unit blends clinical excellence with empathetic care to support couples navigating conception difficulties, offering individualized endocrinology workups and reproductive options.",
  features: [
    "Comprehensive Male and Female Infertility Diagnostic Evaluations",
    "Ovulation Induction Protocols and Monitored Conception Cycles",
    "Intrauterine Insemination (IUI) & Assisted Reproductive Technology Paths",
    "Advanced Management of Recurrent Pregnancy Losses and PCOS"
  ]
};

export const metadata = {
  title: `Fertility Treatment - Gracespring Hospitals`,
  description: `Advanced reproductive medicine options and fertility treatment protocols at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Expert solutions.`,
};

export default function FertilityPage() {
  return <ServicePageLayout data={pageData} />;
}