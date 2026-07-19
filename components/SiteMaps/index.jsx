"use client";

export const links = [
  {
    label: "About Us",
    href: "#",
    caption: "#",
    subLinks: [
      {
        header: "About us",
        href: "/who-we-are/about-us",
        subMenu: [{ label: "Find out more about who we are", href: "/who-we-are/about-us" }],
      },
      {
        header: "Meet the team",
        href: "/who-we-are/meet-the-team",
        subMenu: [{ label: "Meet our Patrons and Leadership", href: "/who-we-are/meet-the-team" }],
      }
    ],
  },

  {
    label: "Services",
    href: "#",
    caption: "#healthcare #excellence #surgery",
    subLinks: [
      {
        header: "Surgical Services",
        href: "/services/surgical-services",
        subMenu: [
          { label: "Cardiothoracic and Vascular Surgery", href: "/services/surgical-services/cardiothoracic-and-vascular-surgery" },
          { label: "Urology Surgery", href: "/services/surgical-services/urology-surgery" },
          { label: "General Surgery", href: "/services/surgical-services/general-surgery" },
          { label: "Paediatric Surgery", href: "/services/surgical-services/paediatric-surgery" },
          { label: "Neurosurgery", href: "/services/surgical-services/neurosurgery" },
          { label: "Orthopaedics Surgery", href: "/services/surgical-services/orthopaedics-surgery" },
          { label: "Plastic Surgery", href: "/services/surgical-services/plastic-surgery" },
        ],
      },
      {
        header: "Internal Medicine",
        href: "/services/internal-medicine",
        subMenu: [
          { label: "Cardiology Specialist Care", href: "/services/internal-medicine/cardiology-specialist-care" },
          { label: "Pulmonology Specialist Care", href: "/services/internal-medicine/pulmonology-specialist-care" },
          { label: "Gastroenterology Specialist Care", href: "/services/internal-medicine/gastroenterology-specialist-care" },
          { label: "Nephrology Specialist Care", href: "/services/internal-medicine/nephrology-specialist-care" },
          { label: "Endocrinology Specialist Care", href: "/services/internal-medicine/endocrinology-specialist-care" },
          { label: "Rheumatology Specialist Care", href: "/services/internal-medicine/rheumatology-specialist-care" },
          { label: "Neurology Specialist Care", href: "/services/internal-medicine/neurology-specialist-care" },
          { label: "Oncology Specialist Care", href: "/services/internal-medicine/oncology-specialist-care" },
          { label: "Haematology Specialist Care", href: "/services/internal-medicine/haematology-specialist-care" },
        ],
      },
      {
        header: "Women & Child Health",
        href: "/services/women-and-child-health",
        subMenu: [
          { label: "Obstetrics & Gynaecological Services", href: "/services/women-and-child-health/obstetrics-and-gynaecological-services" },
          { label: "Fertility Treatment", href: "/services/women-and-child-health/fertility-treatment" },
          { label: "General Paediatrics", href: "/services/women-and-child-health/general-paediatrics" },
        ],
      },
      {
        header: "Specialty Units",
        href: "/services/specialty-units",
        subMenu: [
          { label: "ICU & Emergency Medicine", href: "/services/specialty-units/ICU-and-emergency-medicine" }, // FIXED: Match uppercase ICU
          { label: "Dialysis", href: "/services/specialty-units/dialysis" },
          { label: "Chemotherapy", href: "/services/specialty-units/chemotherapy" },
          { label: "Diagnostic Services", href: "/services/specialty-units/diagnostic-services" },
          { label: "Dental Care", href: "/services/specialty-units/dental-care" },
          { label: "Ophthalmology Care", href: "/services/specialty-units/ophthalmology-care" },
          { label: "Physiotherapy", href: "/services/specialty-units/physiotherapy" },
          { label: "Wellness", href: "/services/specialty-units/wellness" },
          { label: "Online Consultations", href: "/services/specialty-units/online-consultations" },
        ],
      },
    ],
  },

  {
    label: "News & Media",
    href: "/news-and-media",
    caption: "#donate #fundraise #partner",
    subLinks: [
      {
        header: "Testimonials",
        href: "/testimonials",
        subMenu: [{ label: "Hear from our patients", href: "/testimonials" }],
      },
      {
        header: "News/ Press Release",
        href: "/news-and-media",
        subMenu: [{ label: "Latest News and Press Releases", href: "/news-and-media" }],
      },
    ],
  },

  {
    label: "Patient Support",
    href: "#",
    caption: "#",
    subLinks: [
      {
        header: "Contact Us",
        href: "/patient-support/contact-us",
        subMenu: [{ label: "Contact Information", href: "/patient-support/contact-us" }],
      },
      {
        header: "Patient Feedback",
        href: "/patient-support/feedback",
        subMenu: [{ label: "Share your experience with us", href: "/patient-support/feedback" }],
      },
      {
        header: "Frequently Asked Questions",
        href: "/patient-support/faq",
        subMenu: [{ label: "View our FAQ", href: "/patient-support/faq" }],
      },
    ],
  },
];

export const FooterLinks = {
  link1: [
    { name: "Surgical Services", url: "/services/surgical-services" },
    { name: "Internal Medicine", url: "/services/internal-medicine" },
    { name: "Women & Child Health", url: "/services/women-and-child-health" },
    { name: "Specialty Units", url: "/services/specialty-units" },
  ],

  link2: [
    { name: "Cardiothoracic Surgery", url: "/services/surgical-services/cardiothoracic-and-vascular-surgery" },
    { name: "Cardiology", url: "/services/internal-medicine/cardiology-specialist-care" },
    { name: "Dialysis Unit", url: "/services/specialty-units/dialysis" },
    { name: "Physiotherapy", url: "/services/specialty-units/physiotherapy" },
    { name: "Wellness Services", url: "/services/specialty-units/wellness" },
    { name: "ICU & Emergency", url: "/services/specialty-units/ICU-and-emergency-medicine" },
    { name: "Online Consultations", url: "/services/specialty-units/online-consultations" },
  ],

  company: [
    { name: "About us", url: "/who-we-are/about-us" },
    { name: "Meet the Team", url: "/who-we-are/meet-the-team" },
    // { name: "Careers", url: "/who-we-are/join-our-team" },
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms & Conditions", url: "/terms-of-use" },
    { name: "Sitemap", url:"/sitemap.html"},
  ],

  contact: [
    {
      name: `Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
      url: "https://maps.google.com",
      iconPath: "/assets/icons/location.svg",
    },
    {
      name: "care@gracespringhospitals.com",
      url: "mailto:care@gracespringhospitals.com",
      iconPath: "/assets/icons/email.svg",
    },
    {
      name: "admin@gracespringhospitals.com",
      url: "mailto:admin@gracespringhospitals.com",
      iconPath: "/assets/icons/email.svg",
    },
    {
      name: "+234 705-648-2776",
      url: "tel:+2347056482776",
      iconPath: "/assets/icons/phone.svg",
    },
    {
      name: "www.gracespringhospitals.com",
      url: "https://www.gracespringhospitals.com",
      iconPath: "/assets/icons/global.svg",
    },
  ],

  social: [
    { name: "Youtube", url: "https://www.youtube.com/@GracespringHospitals", iconPath: "/assets/icons/youtube.svg" },
    { name: "Facebook", url: "#", iconPath: "/assets/icons/facebook.svg" },
    { name: "Twitter", url: "https://x.com/GSH_Hospitals", iconPath: "/assets/icons/twitter.svg" },
    { name: "Instagram", url: "https://www.instagram.com/gracespringhospitals/", iconPath: "/assets/icons/instagram.svg" },
    { name: "Linkedin", url: "#", iconPath: "/assets/icons/linkedin.svg" },
  ],
};

// "use client";

// export const links = [
//   {
//     label: "About Us",
//     href: "#",
//     caption: "#",
//     subLinks: [
//       {
//         header: "About us",
//         href: "/who-we-are/about-us",
//         subMenu: [{ label: "Find out more about who we are", href: "/who-we-are/about-us" }],
//         // navImage: [{ src: "/assets/images/menus/about.jpg" }] 
//       },
//       {
//         header: "Our people",
//         href: "/who-we-are/our-people",
//         subMenu: [{ label: "Meet our Patrons and Leadership", href: "/who-we-are/our-people" }],
//         // navImage: [{ src: "/assets/images/menus/people.png" }] 
//       }
//     ],
//   },

//   {
//     label: "Services",
//     href: "#",
//     caption: "#healthcare #excellence #surgery",
//     subLinks: [
//       {
//         header: "Surgical Services",
//         href: "/services/surgery",
//         subMenu: [
//           { label: "Cardiothoracic and Vascular Surgery", href: "/services/surgical-services/cardiothoracic-and-vascular-surgery" },
//           { label: "Urology Surgery", href: "/services/surgical-services/urology-surgery" },
//           { label: "General Surgery", href: "/services/surgical-services/general-surgery" },
//           { label: "Paediatric Surgery", href: "/services/surgical-services/paediatric-surgery" },
//           { label: "Neurosurgery", href: "/services/surgical-services/neurosurgery" },
//           { label: "Orthopaedics Surgery", href: "/services/surgical-services/orthopaedics-surgery" },
//           { label: "Plastic Surgery", href: "/services/surgical-services/plastic-surgery" },
//         ],
//       },
//       {
//         header: "Internal Medicine",
//         href: "/services/medicine",
//         subMenu: [
//           { label: "Cardiology Specialist Care", href: "/services/medicine/cardiology" },
//           { label: "Pulmonology Specialist Care", href: "/services/medicine/pulmonology" },
//           { label: "Gastroenterology Specialist Care", href: "/services/medicine/gastroenterology" },
//           { label: "Nephrology Specialist Care", href: "/services/medicine/nephrology" },
//           { label: "Endocrinology Specialist Care", href: "/services/medicine/endocrinology" },
//           { label: "Rheumatology Specialist Care", href: "/services/medicine/rheumatology" },
//           { label: "Neurology Specialist Care", href: "/services/medicine/neurology" },
//           { label: "Oncology Specialist Care", href: "/services/medicine/oncology" },
//           { label: "Haematology Specialist Care", href: "/services/medicine/haematology" },
//         ],
//       },
//       {
//         header: "Women & Child Health",
//         href: "/services/women-children",
//         subMenu: [
//           { label: "Obstetrics & Gynaecological Services", href: "/services/obgyn" },
//           { label: "Fertility Treatment", href: "/services/fertility" },
//           { label: "General Paediatrics", href: "/services/paediatrics" },
//         ],
//       },
//       {
//         header: "Specialty Units",
//         href: "/services/specialty",
//         subMenu: [
//           { label: "ICU & Emergency Medicine", href: "/services/icu-emergency" },
//           { label: "Dialysis", href: "/services/dialysis"},
//           { label: "Chemotherapy", href: "/services/chemotherapy"},
//           { label: "Diagnostic Services", href: "/services/diagnostics"},
//           { label: "Dental Care", href: "/services/dental-care" },
//           { label: "Ophthalmology Care", href: "/services/ophthalmology"},
//           { label: "Physiotherapy", href: "/services/physio"},
//           { label: "Wellness", href: "/services/wellness"},
//           { label: "Online Consultations", href: "/services/online-consult"},
//         ],
//       },
//     ],
//   },

//   {
//     label: "News & Media",
//     href: "/news-and-media",
//     caption: "#donate #fundraise #partner",
//     subLinks: [
//       {
//         header: "Testimonials",
//         href: "/#",
//         subMenu: [{ label: "Hear from our patients", href: "/testimonials" }],
//         // navImage: [{ src: "/assets/images/menus/doctor.png" }] 
//       },
//       // {
//       //   header: "Blogs & Newsletter",
//       //   href: "/#",
//       //   subMenu: [{ label: "Meet our Patrons and Leadership", href: "/who-we-are/our-people" }],
//       //   navImage: [{ src: "/assets/images/menus/blogger.png" }] 
//       // },
//       {
//         header: "News/ Press Release",
//         href: "/#",
//         subMenu: [{ label: "Latest News and Press Releases", href: "/news-and-media" }],
//         // navImage: [{ src: "/assets/images/menus/newspaper.png" }] 
//       },
//     ],
//   },

//   {
//     label: "Patient Support",
//     href: "#",
//     caption: "#",
//     subLinks: [
//       {
//         header: "Contact Us",
//         href: "/#",
//         subMenu: [{ label: "Contact Information", href: "/patient-support/contact-us" }],
//         // navImage: [{ src: "/assets/images/menus/customer-support.png" }] 
//       },
//       {
//         header: "Patient Feedback",
//         href: "/#",
//         subMenu: [{ label: "Share your experience with us", href: "/patient-support/feedback" }],
//         // navImage: [{ src: "/assets/images/menus/doctor.png" }] 
//       },
//       {
//         header: "Frequently Asked Questions",
//         href: "/#",
//         subMenu: [{ label: "View our FAQ", href: "/patient-support/faq" }],
//         // navImage: [{ src: "/assets/images/menus/peer.png" }] 
//       },
//     ],
//   },
// ];

// export const FooterLinks = {
//   link1: [
//     { name: "Surgical Services", url: "/services/surgery" },
//     { name: "Internal Medicine", url: "/services/internal-medicine" },
//     { name: "Women & Child Health", url: "/services/women-children" },
//     { name: "Specialty Units", url: "/services/specialty" },
//     { name: "Diagnostic Services", url: "/services/diagnostics" },
//   ],

//   link2: [
//     { name: "Cardiothoracic Surgery", url: "/services/surgery/cardiothoracic" },
//     { name: "Cardiology", url: "/services/medicine/cardiology" },
//     { name: "Dialysis Unit", url: "/services/dialysis" },
//     { name: "Physiotherapy", url: "/services/physio" },
//     { name: "Wellness Services", url: "/services/wellness" },
//     { name: "ICU & Emergency", url: "/services/icu-emergency" },
//     { name: "Online Consultations", url: "/services/online-consult" },


//   ],

//   company: [
//     { name: "About us", url: "/who-we-are/about-us" },
//     { name: "Our People", url: "/who-we-are/our-people" },
//     { name: "Careers", url: "/who-we-are/join-our-team" },
//     { name: "Privacy Policy", url: "/privacy-policy" },
//     { name: "Terms & Conditions", url: "/terms-of-use" },
//   ],

//   contact: [
//     {
//       name: `Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata estate, Sangotedo, Eti-Osa, Lekki - Lagos.`,
//       url: "https://maps.google.com",
//       iconPath: "/assets/icons/location.svg",
//     },
//     {
//       name: "care@gracespringhospitals.com",
//       url: "mailto:care@gracespringhospitals.com",
//       iconPath: "/assets/icons/email.svg",
//     },
    
//     {
//       name: "admin@gracespringhospitals.com",
//       url: "mailto:admin@gracespringhospitals.com",
//       iconPath: "/assets/icons/email.svg",
//     },

//     {
//       name: "+234 705-648-2776",
//       url: "tel:+2347056482776",
//       iconPath: "/assets/icons/phone.svg",
//     },
    
//     {
//       name: "www.gracespringhospitals.com",
//       url: "https://www.gracespringhospitals.com",
//       iconPath: "/#",
//     },
//   ],

//   social: [
//     { name: "Youtube", url: "#", iconPath: "/assets/icons/youtube.svg" },
//     { name: "Facebook", url: "#", iconPath: "/assets/icons/facebook.svg" },
//     { name: "Twitter", url: "#", iconPath: "/assets/icons/twitter.svg" },
//     { name: "Instagram", url: "#", iconPath: "/assets/icons/instagram.svg" },
//     { name: "Linkedin", url: "#", iconPath: "/assets/icons/linkedin.svg" },
//   ],
// };
