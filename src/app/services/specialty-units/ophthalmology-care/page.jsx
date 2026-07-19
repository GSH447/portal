import React from 'react';
import ServicePageLayout from "../../../../../components/ServicePageLayout/index";

const pageData = {
  title: "Ophthalmology Care",
  category: "Specialty Units",
  image: "/assets/images/services/SpecialtyUnits/opathmology11.svg",
  tagline: "Advanced Eye Care, Refraction Studies, and Microsurgical Interventions",
  overview: "Our Ophthalmology Service provides deep diagnostic vision mapping alongside microsurgical corrections for conditions like cataracts and glaucoma, preserving overall visual acuity.",
  features: [
    "Automated Refraction Screening, Visual Acuity Mapping & Lens Prescription",
    "Intraocular Pressure (IOP) Tonometry and Comprehensive Glaucoma Tracking",
    "Micro-Incision Cataract Surgeries with Intraocular Lens (IOL) Implants",
    "Therapeutic Management of Diabetic Retinopathy and Ocular Inflammations"
  ]
};

export const metadata = {
  title: `Ophthalmology Care - Gracespring Hospitals`,
  description: `Advanced clinical eye screenings, diagnostic checkups, and vision correction treatments at Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
};

export default function OphthalmologyPage() {
  return <ServicePageLayout data={pageData} />;
}