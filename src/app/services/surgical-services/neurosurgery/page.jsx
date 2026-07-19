import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Neurosurgery",
  category: "Surgical Services",
  image: "/assets/images/services/surgeries/neurosurgery11.svg",
  tagline: "Advanced Cranial, Spinal, and Peripheral Nerve Interventions",
  overview: "Our Neurosurgery department deals with the prevention, diagnosis, and surgical management of disorders affecting the central nervous system, including complex brain tumor removals, spinal fusions, and neuro-trauma stabilization.",
  features: [
    "Craniotomy for Brain Tumors, Aneurysms, and Intracranial Hematomas",
    "Spinal Decompression, Discectomy, and Complex Spinal Fixations",
    "Management of Traumatic Brain Injuries (TBI) & Spinal Cord Trauma",
    "Hydrocephalus Management including Ventriculoperitoneal (VP) Shunting"
  ]
};

export const metadata = {
  title: `Neurosurgery - Gracespring Hospitals`,
  description: `Advanced neurosurgical interventions for neurological and spine conditions at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. High-precision care.`,
};

export default function NeurosurgeryPage() {
  return <ServicePageLayout data={pageData} />;
}