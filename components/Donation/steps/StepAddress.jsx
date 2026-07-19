"use client";

import { useState, useEffect } from "react";
import axiosInstance from "../../../lib/axios";

export default function StepAddress({
  data,
  onChange,
  onNext,
  onBack,
  reference,
}) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  /* ---------------- FETCH COUNTRIES ---------------- */
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .map((c) => ({ name: c.name.common, code: c.cca2 }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(sorted);
      })
      .catch((err) => console.error("Country fetch error:", err));
  }, []);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const e = {};
    if (!data.street?.trim()) e.street = "Street address is required";
    if (!data.city?.trim()) e.city = "City is required";
    if (!data.state?.trim()) e.state = "State is required";
    if (!data.zip?.trim()) e.zip = "Zip code is required";
    if (!data.country?.trim()) e.country = "Country is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- CONTINUE ---------------- */
  const handleContinue = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {

      await axiosInstance.patch("/donations/pending/update", {
        reference,
        address: data,
      });

      

      onNext();
    } catch (err) {
      console.error(err);
      alert("Unable to save address. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="w-fit mx-auto">
      <h3 className="text-primary text-center font-bold tracking-wide">
        Address
      </h3>



       <form className="flex flex-col space-y-4 w-full px-2">
         <div>
           <label className="text-black">Street Address</label>
           <input
            name="street"
            // value={formData.street}
            // onChange={handleChange}
            // className="input w-full"
            value={data.street || ""}
            onChange={(e) => onChange({ street: e.target.value })}
            className="p-2 border rounded-md w-full text-black"
            placeholder="Street address"
          />
          {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
        </div>

        <div>
          <label className="text-black">Apartment / Suite</label>
          <input
            name="apartment"
            // value={formData.apartment}
            // onChange={handleChange}
            
            value={data.apartment || ""}
            onChange={(e) => onChange({ apartment: e.target.value })}
            // className="input w-full"
            className="p-2 border rounded-md w-full text-black"
            placeholder="Apartment / Suite"
          />
        </div>

        <div>
          <label className="text-black">Town / City</label>
          <input
            name="city"
            // value={formData.city}
            // onChange={handleChange}

            
            value={data.city || ""}
            onChange={(e) => onChange({ city: e.target.value })}

            // className="input w-full"
            className="p-2 border rounded-md w-full text-black"
            placeholder="Town / City"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>

        <div>
          <label className="text-black">Country</label>
          <select
            name="country"
            // value={formData.country}
            // onChange={handleChange}

            
            value={data.country || ""}
            onChange={(e) => onChange({ country: e.target.value })}
            // className="input w-full"
            className="p-2 border rounded-md w-full text-black"
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c.code} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>

        <div>
          <label className="text-black">State</label>
          {/* <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="input w-full"
            disabled={loading || states.length === 0}
          >
            <option value="">{loading ? "Loading..." : "Select state"}</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select> */}
            <input
              name="state"
              // value={formData.state}
              // onChange={handleChange}

              
              value={data.state || ""}
              onChange={(e) => onChange({ state: e.target.value })}
              // className="input w-full"
              className="p-2 border rounded-md w-full text-black"
              placeholder="State"
            />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>

        <div>
          <label className="text-black">Zip Code</label>
          <input
            name="zip"
            // value={formData.zip}
            // onChange={handleChange}

            
            value={data.zip || ""}
            onChange={(e) => onChange({ zip: e.target.value })}

            className="input w-full"
            placeholder="Zip code"
          />
          {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
        </div>


        
        {/* CONTINUE */}
        <button
          onClick={handleContinue}
          className="w-full bg-primary text-white p-2 rounded-md hover:bg-black"
          disabled={loading}
        >
          Continue
        </button>
        
      </form>



    </div>
  );
}

















// "use client";

// import { useState, useEffect } from "react";
// import axiosInstance from "../../../lib/axios";
// // export default function StepAddress({ onNext, onChange }) {
// export default function StepAddress({ data, onChange, onNext, onBack }) {
//   const [countries, setCountries] = useState([]);
//   // const [states, setStates] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});


//   const [formData, setFormData] = useState({
//     // street: "",
//     // apartment: "",
//     // city: "",
//     // state: "",
//     // zip: "",
//     country: "",
//   });

//   /* ---------------- FETCH COUNTRIES ---------------- */
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
//       .then((res) => res.json())
//       .then((data) => {
//         const sorted = data
//           .map((c) => ({ name: c.name.common, code: c.cca2 }))
//           .sort((a, b) => a.name.localeCompare(b.name));
//         setCountries(sorted);

//         // default country
//         const defaultCountry = sorted.find((c) => c.name === "Nigeria");
//         if (defaultCountry) setFormData((p) => ({ ...p, country: defaultCountry.name }));
//       })
//       .catch((err) => console.error("Country fetch error:", err));
//   }, []);

//   /* ---------------- FETCH STATES ---------------- */
//   // useEffect(() => {
//   //   if (!formData.country) return;
//   //   setLoading(true);

//   //   // Example API: using countriesnow.space (or replace with your own)
//   //   fetch("https://countriesnow.space/api/v0.1/countries/states", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify({ country: formData.country }),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       if (data?.data?.states) {
//   //         setStates(data.data.states.map((s) => s.name));
//   //       } else {
//   //         setStates([]);
//   //       }
//   //     })
//   //     .catch((err) => console.error("State fetch error:", err))
//   //     .finally(() => setLoading(false));
//   // }, [formData.country]);

//   /* ---------------- HANDLE CHANGE ---------------- */
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((p) => ({ ...p, [name]: value }));
//   // };

//   /* ---------------- VALIDATION ---------------- */
//   const validate = () => {
//     const e = {};
//     if (!data.street.trim()) e.street = "Street address is required";
//     if (!data.city.trim()) e.city = "City is required";
//     if (!data.state.trim()) e.state = "State is required";
//     if (!data.zip.trim()) e.zip = "Zip code is required";
//     if (!data.country.trim()) e.country = "Country is required";

//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   /* ---------------- CONTINUE ---------------- */
//   // const handleContinue = (e) => {
//   //   e.preventDefault();
//   //   if (!validate()) return;

//   //   onChange(formData);
//   //   onNext();
//   // };


//     /* ---------------- CONTINUE ---------------- */
//   const handleContinue = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     const payload = {
//       ...data,
//     };
//     setLoading(true);

//     try {

//       const res = await axiosInstance.post("/donations/pending/create", {
//         address: payload
//       });

//       // pass data to parent step manager
//       onChange(payload);
//       setReference(res.data.reference);
//       onNext();

//     } 
    
//     catch (error) {
//       console.error("Error creating pending donation:", error);
//       alert("There was an error processing your request. Please try again.");
//     } 
    
//     finally {
//       setLoading(false);
//     }

//   };


//   return (
//     <div className="w-fit mx-auto">
//       <h3 className="text-primary text-center font-bold tracking-wide">
//         Address
//       </h3>

//       <form className="flex flex-col space-y-4 w-full px-2">
//         <div>
//           <label className="text-black">Street Address</label>
//           <input
//             name="street"
//             // value={formData.street}
//             // onChange={handleChange}
//             // className="input w-full"
//             value={data.street || ""}
//             onChange={(e) => onChange({ street: e.target.value })}
//             className="p-2 border rounded-md w-full text-black"
//             placeholder="Street address"
//           />
//           {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
//         </div>

//         <div>
//           <label className="text-black">Apartment / Suite</label>
//           <input
//             name="apartment"
//             // value={formData.apartment}
//             // onChange={handleChange}
            
//             value={data.apartment || ""}
//             onChange={(e) => onChange({ apartment: e.target.value })}
//             // className="input w-full"
//             className="p-2 border rounded-md w-full text-black"
//             placeholder="Apartment / Suite"
//           />
//         </div>

//         <div>
//           <label className="text-black">Town / City</label>
//           <input
//             name="city"
//             // value={formData.city}
//             // onChange={handleChange}

            
//             value={data.city || ""}
//             onChange={(e) => onChange({ city: e.target.value })}

//             // className="input w-full"
//             className="p-2 border rounded-md w-full text-black"
//             placeholder="Town / City"
//           />
//           {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
//         </div>

//         <div>
//           <label className="text-black">Country</label>
//           <select
//             name="country"
//             // value={formData.country}
//             // onChange={handleChange}

            
//             value={data.country || ""}
//             onChange={(e) => onChange({ country: e.target.value })}
//             // className="input w-full"
//             className="p-2 border rounded-md w-full text-black"
//           >
//             <option value="">Select country</option>
//             {countries.map((c) => (
//               <option key={c.code} value={c.name}>{c.name}</option>
//             ))}
//           </select>
//           {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
//         </div>

//         <div>
//           <label className="text-black">State</label>
//           {/* <select
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             className="input w-full"
//             disabled={loading || states.length === 0}
//           >
//             <option value="">{loading ? "Loading..." : "Select state"}</option>
//             {states.map((s) => (
//               <option key={s} value={s}>{s}</option>
//             ))}
//           </select> */}
//             <input
//               name="state"
//               // value={formData.state}
//               // onChange={handleChange}

              
//               value={data.state || ""}
//               onChange={(e) => onChange({ state: e.target.value })}
//               // className="input w-full"
//               className="p-2 border rounded-md w-full text-black"
//               placeholder="State"
//             />
//           {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
//         </div>

//         <div>
//           <label className="text-black">Zip Code</label>
//           <input
//             name="zip"
//             // value={formData.zip}
//             // onChange={handleChange}

            
//             value={data.zip || ""}
//             onChange={(e) => onChange({ zip: e.target.value })}

//             className="input w-full"
//             placeholder="Zip code"
//           />
//           {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
//         </div>

//         {/* <button
//           type="submit"
//           onClick={handleContinue}
//           className="btn-primary mt-2"
//         >
//           Continue
//         </button> */}

        
//         {/* CONTINUE */}
//         <button
//           onClick={handleContinue}
//           className="w-full bg-primary text-white p-2 rounded-md hover:bg-black"
//           disabled={loading}
//         >
//           Continue
//         </button>
        
//       </form>
//     </div>
//   );
// }

