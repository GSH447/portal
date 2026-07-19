"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "../../lib/axios";

export default function ContactForm() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+234",
    flag: "",
    name: "Nigeria",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  /* ---------------- FETCH COUNTRIES ---------------- */
useEffect(() => {
  const fetchCountries = async () => {
    try {
      // v5 endpoint: note the base URL change to api.restcountries.com
      const response = await fetch("https://api.restcountries.com/countries/v5", {
        headers: {
          'Authorization': 'Bearer rc_live_demo' // Use your own API key for production
        }
      });
      
      const data = await response.json();
      
      // Handle response structure (v5 returns objects, often requiring data access)
      // If the API returns a paginated list, it might be in data.items or data
      const countriesList = Array.isArray(data) ? data : (data.items || []);

      const countryData = countriesList
        .filter((c) => c.idd?.root) // Validate IDD structure
        .map((c) => ({
          // v5 data structure: access names and idd appropriately
          code: c.idd?.root + (c.idd?.suffixes?.[0] || ""),
          flag: c.flags?.png || "",
          name: c.name?.common || "Unknown",
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      setCountries(countryData);
      
      const nigeria = countryData.find((c) => c.code === "+234");
      if (nigeria) setSelectedCountry(nigeria);

    } catch (err) {
      console.error("Country fetch error:", err);
    }
  };

  fetchCountries();
}, []);

  // useEffect(() => {
  //   // 1. Fetching full fields to ensure the object structure is standard
  //   fetch("https://restcountries.com/v3.1/all?fields=idd,name,flags")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // 2. Defensive check: Is data an array?
  //       if (!Array.isArray(data)) {
  //         console.error("API returned an object, expected an array:", data);
  //         return;
  //       }

  //       const countryData = data
  //         .filter((c) => c.idd?.root && c.flags?.png)
  //         .map((c) => ({
  //           code: c.idd.root + (c.idd.suffixes?.[0] || ""),
  //           flag: c.flags.png,
  //           name: c.name.common,
  //         }))
  //         .sort((a, b) => a.name.localeCompare(b.name));

  //       setCountries(countryData);

  //       const nigeria = countryData.find((c) => c.code === "+234");
  //       if (nigeria) setSelectedCountry(nigeria);
  //     })
  //     .catch((err) => console.error("Country fetch error:", err));
  // }, []);

  // useEffect(() => {
  //   fetch("https://api.restcountries.com/countries/v5/all?response_fields=name.common,idd")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const countryData = data
  //         .filter((c) => c.idd?.root && c.flags?.png)
  //         .map((c) => {
  //           // Join root and first suffix safely
  //           const dialCode = c.idd.root + (c.idd.suffixes?.[0] || "");
  //           return {
  //             code: dialCode,
  //             flag: c.flags.png,
  //             name: c.name.common,
  //           };
  //         })
  //         .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  //       setCountries(countryData);

  //       // Find Nigeria properly
  //       const nigeria = countryData.find((c) => c.code === "+234");
  //       if (nigeria) {
  //         setSelectedCountry(nigeria);
  //       }
  //     })
  //     .catch((err) => console.error("Country fetch error:", err));
  // }, []);

  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all?fields=idd,name,flags")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const countryData = data
  //         .filter((c) => c.idd?.root && c.flags?.png)
  //         .map((c) => ({
  //           code: c.idd.root + (c.idd.suffixes?.[0] || ""),
  //           flag: c.flags.png,
  //           name: c.name.common,
  //         }));

  //       setCountries(countryData);
  //       const nigeria = countryData.find((c) => c.code === "+234");
  //       if (nigeria) setSelectedCountry(nigeria);
  //     })
  //     .catch((err) => console.error("Country fetch error:", err.message));
  // }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  /* ---------------- VALIDATION ---------------- */

  const validateForm = () => {
      const e = {};
      if (!formData.firstName.trim()) e.firstName = "First name is required";
      if (!formData.lastName.trim()) e.lastName = "Last name is required";
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = "Invalid email address";
      // Ensure phone is numeric only
      if (!/^\d{7,15}$/.test(formData.phone)) e.phone = "Valid phone number (7-15 digits) is required";
      if (!formData.message.trim()) e.message = "Message content cannot be blank";
      if (!isChecked) e.privacy = "You must agree to the privacy policy";

      setErrors(e);
      return Object.keys(e).length === 0;
  };


  // const validateForm = () => {
  //   const e = {};
  //   if (!formData.firstName.trim()) e.firstName = "First name is required";
  //   if (!formData.lastName.trim()) e.lastName = "Last name is required";
  //   if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = "Invalid email address";
  //   if (!formData.phone || formData.phone.length < 7) e.phone = "Valid phone number required";
  //   if (!formData.message.trim()) e.message = "Message content cannot be blank";

  //   setErrors(e);
  //   return Object.keys(e).length === 0;
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the input is the 'phone' field, remove any character that is not a digit
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      // For all other fields, behave normally
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear errors when the user starts typing
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    
    if (!validateForm()) return;

    setLoading(true);
  
  // Create a combined phone number: +2348082550192
  const fullPhoneNumber = `${selectedCountry.code}${formData.phone}`.replace('++', '+');

    setLoading(true);
    const payload = {
      ...formData,
      phone: fullPhoneNumber,
      countryCode: selectedCountry.code,
    };

    try {
      const response = await axiosInstance.post('/contact', payload);
      if (response.data?.status === 'success') {
        setSuccessMessage(`Thank you! Your message has been sent successfully.`);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setErrorMessage(response.data?.message || "Submission failed, please mail contact@gracespringhospitals.com");
      }
    } catch (err) {
      if (err.response?.data) {
        setErrorMessage(err.response.data.message || "Something went wrong.");
      } else {
        setErrorMessage(err.message || "Network error, please check your connectivity.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="w-full max-w-2xl mx-auto p-4 md:p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] tracking-tight">
          Send us a message
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Fill out the form below and our medical administration team will reach out to you shortly.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Elizabeth"
              value={formData.firstName}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Okon"
              value={formData.lastName}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <div className={`flex items-center border rounded-lg p-1 bg-white focus-within:ring-2 focus-within:ring-primary transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}>
            <div className="relative">
              <button
                type="button"
                className="flex items-center space-x-1 p-2 hover:bg-gray-50 rounded-md transition"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {selectedCountry.flag && (
                  <img src={selectedCountry.flag} alt="Flag" className="w-5 h-3.5 object-cover rounded-sm" />
                )}
                <span className="text-sm font-semibold text-gray-700">{selectedCountry.code}</span>
              </button>

              {showDropdown && (
                <div className="absolute top-12 left-0 bg-white border border-gray-200 shadow-xl max-h-60 overflow-y-auto w-56 rounded-lg z-30 p-1">
                  <input
                    type="text"
                    placeholder="Search country..."
                    className="w-full p-2 text-sm border-b border-gray-100 focus:outline-none mb-1 sticky top-0 bg-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {countries
                    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
                    .map((country) => (
                      <div
                        key={`${country.code}-${country.name}`}
                        className="flex items-center p-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer transition"
                        onClick={() => handleCountryChange(country)}
                      >
                        <img src={country.flag} alt={country.name} className="w-5 h-3.5 object-cover mr-2 rounded-sm" />
                        <span className="truncate text-gray-700">{country.name} ({country.code})</span>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <input
              type="tel"
              name="phone"
              maxLength={12}
              placeholder="8082550192"
              value={formData.phone}
              className="flex-1 p-2 text-sm text-gray-800 focus:outline-none bg-transparent"
              onChange={handleChange}
              required
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Please write your inquiry here..."
            value={formData.message}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none h-32 resize-none transition-all text-sm text-gray-800"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <input
            type="checkbox"
            id="privacy"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="privacy" className="text-xs md:text-sm text-gray-600 leading-tight">
            I accept and agree to the{" "}
            <Link className="text-primary hover:underline font-bold" target="_blank" href="/privacy-policy">
              Privacy Policy
            </Link>
            . We will use the information you provide to safely process and manage your healthcare request.
          </label>
        </div>
        {errors.privacy && <p className="text-xs text-red-500 mt-1">{errors.privacy}</p>}

        {errorMessage && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg font-medium">{errorMessage}</div>}
        {successMessage && <div className="p-3 bg-green-50 text-green-600 text-sm rounded-lg font-medium">{successMessage}</div>}

        <button
          type="submit"
          className="w-full h-[48px] bg-primary text-white font-bold rounded-lg shadow-md hover:bg-black active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200"
          disabled={!isChecked || loading}
        >
          {loading ? "Sending message..." : "Send message"}
        </button>
      </form>
    </div>
  );
}