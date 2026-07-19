
"use client";

import { useState } from "react";
import Image from "next/image";
import StepBasicInfo from "./steps/StepBasicInfo";
import StepAddress from "./steps/StepAddress";
import StepPayment from "./steps/StepPayment";

export default function DonationSteps({ donation }) {
  const [step, setStep] = useState(0);
//   const [reference, setReference] = useState(null);


//   const [formData, setFormData] = useState({
//     donation: donation || {},
//     basic: {
//         title: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         countryCode: "+234",
//         donateAsOrganisation: false,
//     },
//     address: {
//         street: "",
//         apartment: "",
//         city: "",
//         state: "",
//         zip: "",
//         country: "",
//     }
//   });

//   const [formData, setFormData] = useState({
//     donation: {},
//     basic: {},
//     address: {}
//     });



  const [formData, setFormData] = useState({
    donation: donation,   // ✅ INJECT FROM CTA
    basic: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "+234",
      donateAsOrganisation: false,
    },
    address: {
      street: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    }
  });

  
    const [reference, setReference] = useState(null);



    const updateFormData = (section, values) => {
        setFormData(prev => ({
        ...prev,
        [section]: {
            ...prev[section],
            ...values
        }
        }));
    };

  const next = () => setStep((s) => s + 1);

  
  // const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  return (
    <>

    <div
        className="lg:flex gap-2"
    >

        <div
            className="lg:w-2/3 bg-white border lg:rounded-2xl relative"
        >

            <div
                className=""
            >
                <Image
                    src="/assets/images/hero/care-01.png"
                    alt="Donation "
                    width={1000}
                    height={1000}
                    className="lg:rounded-t-2xl w-full lg:h-[50vh]"
                />


                <Image
                    src="/assets/images/about/our-path-nobg.png"
                    alt="Donation "
                    width={1000}
                    height={1000}
                    className="w-full"
                />

                
            </div>
            
            <div
                className=" px-6"
            >
                <div
                    className="hidden lg:block flex mb-4"
                >
                    <Image
                        src="/logo-nobg.png"
                        alt="Donation "
                        width={1000}
                        height={1000}
                        className="w-[23%]"
                    />
                </div>

                <div>
                    <h2 className="font-bold my-2">Your support is life-saving</h2>
                </div>

                <div
                    className="my-2 text-justify text-sm"
                >
                    1 in 100 of us in the Nigeria will be diagnosed with Cogential Heart Disease. Together, we’re funding groundbreaking research at The Gracespring Health Foundation to develop better ways to treat people with Cogential Heart Disease everywhere. 
                </div>
                
                <div>
                    <b>Donate now and help make a difference today</b>
                </div>

            </div>
                
            <div
                className="hidden"
            >
                Get in touch·Privacy policy·Transaction fees                    
            </div>

        </div>
        
        <div
            className="lg:w-1/3 bg-white border lg:rounded-2xl p-2 relative"
        >
            <>
            {/* BACK BUTTON */}
            {step > 0 && (
            <button
                onClick={back}
                className="absolute top-4 left-4 text-sm font-medium"
            >
                ← Back
            </button>
            )}

            {step === 0 && (
            <StepBasicInfo
                data={formData.basic}
                donation={formData.donation}
                reference={reference}
                setReference={setReference}
                onChange={(values) => updateFormData("basic", values)}
                onNext={() => setStep(1)}
                onBack={() => setStep(0)}
            />
            )}

            {step === 1 && (
                <StepAddress
                data={formData.address}
                reference={reference}
                setReference={setReference}
                onChange={(values) => updateFormData("address", values)}
                onNext={() => setStep(2)}
                onBack={() => setStep(1)}
                />
            )}

            {step === 2 && (
                <StepPayment
                data={formData}
                reference={reference}
                setReference={setReference}
                onBack={() => setStep(1)}
                />
            )}
            </>

        </div>

    </div>
    </>
  );
}
