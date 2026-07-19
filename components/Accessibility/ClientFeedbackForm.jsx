"use client";

import { useState } from "react";

export default function ClientFeedbackForm() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-[90%] bg-white rounded-2xl shadow-lg overflow-hidden relative">

      {/* Header */}
      <div className="px-6 pt-6">
        <h2 className="text-black font-bold text-2xl">
          Feedback & Suggestion
        </h2>

        <p className="text-sm text-gray-600 mt-2 mb-4">
          Share your experience with Gracespring Hospitals.
          Your feedback helps us improve our care and services.
        </p>
      </div>

      {/* Loading Screen */}
      {loading && (
        <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center">

          {/* Animated Loader */}
          <div className="relative flex items-center justify-center">

            {/* Outer Ring */}
            <div className="w-20 h-20 rounded-full border-[5px] border-[#6F92E7]/20 border-t-[#6F92E7] animate-spin" />

            {/* Middle Ring */}
            <div className="absolute w-14 h-14 rounded-full border-[4px] border-[#5CB338]/20 border-b-[#5CB338] animate-spin [animation-direction:reverse] [animation-duration:1.2s]" />

            {/* Center Pulse */}
            <div className="absolute w-5 h-5 bg-[#5CB338] rounded-full animate-ping opacity-70" />

            <div className="absolute w-3 h-3 bg-[#6F92E7] rounded-full" />
          </div>

          {/* Text */}
          <h3 className="mt-6 font-semibold text-gray-800">
            Preparing Feedback Portal
          </h3>

          <p className="text-sm text-gray-500 mt-2 text-center px-8">
            Please wait while we securely load the form...
          </p>

        </div>
      )}

      {/* JotForm */}
      <iframe
        id="JotFormIFrame-261206743260046"
        title="Gracespring Feedback Form"
        src="https://submit.jotform.com/261206743260046"
        className={`w-full min-h-[90%] border-0 transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        allow="geolocation; microphone; camera; fullscreen"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}



// "use client";

// export default function ClientFeedbackForm() {
//   return (
//     <div className="w-full h-[90%] bg-white rounded-2xl shadow-lg overflow-hidden">

//       <div className="px-6 pt-6">
//         <h2 className="text-black font-bold text-2xl">
//           Feedback & Suggestion
//         </h2>

//         <p className="text-sm text-gray-600 mt-2 mb-4">
//           Share your experience with Gracespring Hospitals. Your feedback helps
//           us improve our care and services.
//         </p>
//       </div>

//       {/* TEMPORARY: JotForm Integration */}
//       <iframe
//         id="JotFormIFrame-261206743260046"
//         title="Gracespring Feedback Form"
//         src="https://submit.jotform.com/261206743260046"
//         className="w-full min-h-[90%] border-0"
//         allow="geolocation; microphone; camera; fullscreen"
//       />
//     </div>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../lib/axios";



// const sentiments = [
//   { key: "love", emoji: "😍", label: "Very happy" },
//   { key: "happy", emoji: "🙂", label: "Satisfied" },
//   { key: "neutral", emoji: "😐", label: "Okay" },
//   { key: "confused", emoji: "😕", label: "Not satisfied" },
//   { key: "angry", emoji: "😡", label: "Very unhappy" },
// ];

// export default function ClientFeedbackForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     type: "feedback",
//     sentiment: "",
//     // emoji: "",
//     message: "",
//   });

//   const [countries, setCountries] = useState([]); //countries variables
//   const [search, setSearch] = useState(""); //search variables
//   const [showDropdown, setShowDropdown] = useState(false); //tel dropdown variables
//   const [selectedCountry, setSelectedCountry] = useState({
//     code: "+234",
//     flag: "",
//     name: "Nigeria",
//   }); //selectedCountry variables

//   const [loading, setLoading] = useState(false);
//     const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");


//     /* ---------------- FETCH COUNTRIES ---------------- */
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all?fields=idd,name,flags")
//       .then((res) => res.json())
//       .then((data) => {
//         const countryData = data
//           .filter((c) => c.idd?.root && c.flags?.png)
//           .map((c) => ({
//             code: c.idd.root + (c.idd.suffixes?.[0] || ""),
//             flag: c.flags.png,
//             name: c.name.common,
//           }));

//         setCountries(countryData);
//         const nigeria = countryData.find((c) => c.code === "+234");
//         if (nigeria) setSelectedCountry(nigeria);
//       })
//       .catch((err) =>
//         console.error("Country fetch error:", err.message)
//       );
//   }, []);

//   /* ---------------- HANDLERS ---------------- */
//   const handleCountryChange = (country) => {
//     setSelectedCountry(country);
//     setShowDropdown(false);
//   };



//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleEmojiSelect = (item) => {
//     setFormData({
//       ...formData,
//       sentiment: item.key,
//       // emoji: item.emoji,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");
//     const payload = {
//       ...formData,
//       // sentiment: item.key,
//       // emoji: item.emoji,
//       countryCode: selectedCountry.code,
//     }

    
//         try {
//             const response = await axiosInstance.post('/feedback',  payload );
//             const result = response.data;
        
//             if (result.status === 'success') {
//               setSuccessMessage(`Submitted successfully!`);
//             } 
//             else {
//               setErrorMessage(result.message || "Submission failed, email admin@gracespringhospitals.com");
//             }
//         } 
      
        
//         catch (err) {
//           const error = err;
        
//           if (error.response && error.response.data) {
//             setErrorMessage(error.response.data.message || "Something went wrong.");
//           } else if (error.message) {
//             setErrorMessage(error.message || "Network error, please try again.");
//           } else {
//             setErrorMessage("An unexpected error occurred.");
//           }
//         }
        
//         finally {
//             setLoading(false);
//         }
//     // try {
//     //   const res = await axiosInstance.post("/feedback", {
//     //     body: JSON.stringify(formData),
//     //   });

//     //   if (!res.ok) throw new Error("Submission failed");

//     //   setSuccess("Thank you for your feedback 💙");
//     //   setFormData({
//     //     name: "",
//     //     email: "",
//     //     phone: "",
//     //     type: "feedback",
//     //     sentiment: "",
//     //     emoji: "",
//     //     message: "",
//     //   });
//     // } catch (err) {
//     //   setError("Unable to send feedback. Please try again.");
//     // } finally {
//     //   setLoading(false);
//     // }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white px-6 rounded-lg shadow-lg">
      
//       <h2 className="text-black font-bold">
//         Feedback & Suggestion
//       </h2>

//       <p className="text-sm text-gray-600 mb-4">
//         Share your experience, your feedback helps us improve our services.
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Name */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Your name"
//           className="w-full border p-2 rounded"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Your email"
//           className="w-full border p-2 rounded"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

        
//         <div>
//           <div className="flex items-center border rounded-md p-2 space-x-2">
//             <div className="relative">
//               <button
//                 type="button"
//                 className="flex items-center space-x-2 p-2 focus:outline-none"
//                 // onClick={() => {
//                 //   /* Optional: Add a modal/dropdown to select the country */
//                 // }}

//               onClick={() => setShowDropdown(!showDropdown)}
//               >
//                 <img
//                   src={selectedCountry.flag || '/logo.svg'}
//                   alt="Flag"
//                   className="w-6 h-4 rounded-md"
//                 />
                
//                 <span className="text-[small] lg:text-[15px]">{selectedCountry.code}</span>
//               </button>

//               {showDropdown && (
//               <div className="absolute top-12 left-0 bg-white border shadow-md max-h-60 overflow-y-auto w-44 z-10">
//                 <input
//                   type="text"
//                   placeholder="Search country..."
//                   className="w-full p-2 border-b lg:text-[15px]"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//             {countries
//                   .filter((c) =>
//                     c.name.toLowerCase().includes(search.toLowerCase())
//                   )
//                   .map((country) => (
//                     <div
//                       key={`${country.code}-${country.name}`}
//                       className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
//                       onClick={() => handleCountryChange(country)}
//                     >
//                       <img
//                         src={country.flag}
//                         alt={country.name}
//                         className="w-6 h-4 mr-2"
//                       />
//                       <span>{country.name} ({country.code})</span>
//                     </div>
//                   ))}
//               </div>
//             )}
//               </div>

//               <input
//                 type="tel"
//                 placeholder="8143516481"
//                 className="flex-1 p-2 focus:ring focus:outline-none lg:text-[15px]"
//                 name="phone"
//                 onChange={handleChange}
//                 required
//               />
//           </div>
//         </div>

//         {/* Type */}
//         <select
//           name="type"
//           value={formData.type}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         >
//           <option value="feedback">Feedback</option>
//           <option value="complaint">Complaint</option>
//           <option value="suggestion">Suggestion</option>
//         </select>

//         {/* Emoji sentiment */}
//         <div>
//           <p className="text-sm mb-2">How do you feel?</p>
     
//           <div className="flex justify-between items-start">
//             {sentiments.map((item) => {
//               const isActive = formData.sentiment === item.key;

//               return (
//                 <div
//                   key={item.key}
//                   className="flex flex-col items-center w-full"
//                 >
//                   <button
//                     type="button"
//                     onClick={() => handleEmojiSelect(item)}
//                     className={`
//                       text-2xl
//                       transition-all
//                       duration-200
//                       ${isActive ? "scale-125" : "opacity-50 hover:opacity-100"}
//                     `}
//                     aria-label={item.label}
//                   >
//                     {item.emoji}
//                   </button>

//                   {/* Active label */}
//                   {isActive && (
//                     <span className="mt-1 text-xs font-semibold text-primary text-center">
//                       {item.label}
//                     </span>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
        
//         </div>

//         {/* Message */}
//         <textarea
//           name="message"
//           placeholder="Tell us more..."
//           className="w-full border p-2 rounded h-24 resize-none"
//           value={formData.message}
//           onChange={handleChange}
//           // required
//         />

//         {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
//         {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}

//         <button
//           type="submit"
//           disabled={loading || !formData.sentiment}
//           className="w-full bg-primary text-white py-2 rounded hover:bg-black transition"
//         >
//           {loading ? "Sending..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }
