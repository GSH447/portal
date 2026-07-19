"use client";
import React from "react";
import ContactsUsHero from "./Contacts";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import SubscribeCTA from "../Banner/CTA/subscribe";

export default function ContactPage() {
  return (
    <main className="w-full bg-[#6F92E7] min-h-screen overflow-x-hidden">
      <ContactsUsHero />
      
      {/* 
        Using a flex container on mobile that defaults to flex-col. 
        On desktop (lg), it switches to a 5-column grid.
      */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col lg:grid lg:grid-cols-5 gap-8 items-start pb-20 mt-8">
        
        {/* 
          1. CONTACT INFO:
          - order-1 makes it render first on mobile viewports.
          - lg:order-none clears the ordering rule on desktop so the grid native column assignment takes over.
          - lg:col-span-2 gives it 40% width.
        */}
        <div className="w-full order-1 lg:order-none lg:col-span-2 lg:sticky lg:top-24">
          <ContactInformation />
        </div>

        {/* 
          2. CONTACT FORM:
          - order-2 drops it below the info block on mobile viewports.
          - lg:order-none clears the ordering rule on desktop layouts.
          - lg:col-span-3 gives it 60% width.
        */}
        <div className="w-full order-2 lg:order-none lg:col-span-3">
          <ContactForm />
        </div>
        
      </div>

      {/* <SubscribeCTA /> */}
    </main>
  );
}

// "use client";
// import React from "react";
// import ContactsUsHero from "./Contacts";
// import ContactForm from "./ContactForm";
// import ContactInformation from "./ContactInformation";
// import SubscribeCTA from "../Banner/CTA/subscribe";

// export default function ContactPage() {
//   return (
//     <main className="w-full bg-[#FDF2EB] min-h-screen overflow-x-hidden">
//       <ContactsUsHero />
      
//       {/* Container holding both components side-by-side */}
//       <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pb-20 mt-8">
        
//         {/* Left Hand: Form takes 60% (3 out of 5 columns) */}
//         <div className="lg:col-span-3 w-full">
//           <ContactForm />
//         </div>

//         {/* Right Hand: Information Stacks takes 40% (2 out of 5 columns) */}
//         <div className="lg:col-span-2 w-full sticky top-24">
//           <ContactInformation />
//         </div>
        
//       </div>

//     </main>
//   );
// }


// "use client";
// import React from "react";
// import ContactsUsHero from "./Contacts";
// import ContactForm from "./ContactForm";
// import ContactInformation from "./ContactInformation";
// import SubscribeCTA from "../Banner/CTA/subscribe";

// export default function ContactPage() {
//   return (
//     <main className="w-full bg-[#6F92E7] min-h-screen overflow-x-hidden">
//       <ContactsUsHero />
//       <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 space-y-16 pb-20">
//         <ContactForm />
//         <ContactInformation />
//       </div>
//     </main>
//   );
// }