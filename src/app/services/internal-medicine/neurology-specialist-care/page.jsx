import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Neurology Specialist Care",
  category: "Internal Medicine",
  image: "/assets/images/services/InternalMedicine/neurology.jpg",
  tagline: "Comprehensive Diagnostics and Treatment for Neurological Conditions",
  overview: "Our Neurology department evaluates and addresses standard and complex central and peripheral nervous system anomalies, utilizing personalized neuro-restorative and clinical therapeutic regimens.",
  features: [
    "Acute Stroke Management Protocols and Secondary Stroke Prevention",
    "Comprehensive Diagnosis and Treatment for Epilepsy and Seizure Disorders",
    "Specialized Management of Parkinson's Disease and Movement Issues",
    "Clinical Workup for Chronic Migraines, Neuropathies, and Dementias"
  ]
};

export const metadata = {
  title: `Neurology Specialist Care - Gracespring Hospitals`,
  description: `Specialist care for central and peripheral nervous system disorders at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos. Diagnostic excellence.`,
};

export default function NeurologyPage() {
  return <ServicePageLayout data={pageData} />;
}