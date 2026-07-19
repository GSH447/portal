'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { API_BASE_URL_HIS } from '../../lib/api';
import { Calendar, Mail, MessageSquare, MapPin, PhoneCall, ShieldCheck, Clock } from 'lucide-react';

export default function AppointmentBooking() {
  const [specializations, setSpecializations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [schedules, setSchedules] = useState([]);

  // Channels & Form State
  const [bookingChannel, setBookingChannel] = useState('IN_CLINIC'); // Options: IN_CLINIC, VIDEO, HOME_VISIT
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [reason, setReason] = useState('');

  const [loading, setLoading] = useState(false);

  const channels = [
    { id: 'IN_CLINIC', label: 'In-Clinic', icon: '🏢' },
    { id: 'VIDEO', label: 'Video Call', icon: '📹' },
    { id: 'HOME_VISIT', label: 'Home Visit', icon: '🏠' },
  ];

  /* -------------------------------- */
  /* SAFE ARRAY EXTRACTOR */
  /* -------------------------------- */
  const extractArray = (response, key = null) => {
    if (Array.isArray(response)) return response;
    if (key && Array.isArray(response[key])) return response[key];
    if (Array.isArray(response.data)) return response.data;
    return [];
  };

  /* -------------------------------- */
  /* FETCH SPECIALIZATIONS */
  /* -------------------------------- */
  useEffect(() => {
    fetch(`${API_BASE_URL_HIS}specializations`)
      .then((res) => res.json())
      .then((data) => {
        const arrayData = extractArray(data, 'specializations');
        setSpecializations(arrayData);
      })
      .catch((error) => {
        console.error(error);
        setSpecializations([]);
      });
  }, []);

  /* -------------------------------- */
  /* FETCH DOCTORS */
  /* -------------------------------- */
  useEffect(() => {
    fetch(`${API_BASE_URL_HIS}/doctors`)
      .then((res) => res.json())
      .then((data) => {
        const doctorsArray = extractArray(data, 'doctors');
        setDoctors(doctorsArray);
        setFilteredDoctors(doctorsArray);
      })
      .catch((error) => {
        console.error(error);
        setDoctors([]);
        setFilteredDoctors([]);
      });
  }, []);

  /* -------------------------------- */
  /* FILTER DOCTORS */
  /* -------------------------------- */
  useEffect(() => {
    if (!selectedSpecialization) {
      setFilteredDoctors(doctors);
      return;
    }

    const filtered = doctors.filter((doctor) => {
      return (
        String(
          doctor.specialization_id ||
          doctor.specialization ||
          doctor.specialty_id
        ) === String(selectedSpecialization)
      );
    });

    setFilteredDoctors(filtered);
  }, [selectedSpecialization, doctors]);

  /* -------------------------------- */
  /* FETCH SCHEDULES OR USE DEFAULTS */
  /* -------------------------------- */
  useEffect(() => {
    // If no doctor is selected, provide general clinic triage slots
    if (!selectedDoctor) {
      setSchedules([
        { time: '08:00 AM' }, { time: '09:00 AM' }, { time: '10:00 AM' },
        { time: '11:00 AM' }, { time: '12:00 PM' }, { time: '01:00 PM' },
        { time: '02:00 PM' }, { time: '03:00 PM' }, { time: '04:00 PM' }
      ]);
      return;
    }

    // Fetch specific doctor schedules if a doctor is selected
    fetch(`${API_BASE_URL_HIS}doctors/list/schedules?id=${selectedDoctor}`)
      .then((res) => res.json())
      .then((data) => {
        const schedulesArray = extractArray(data, 'schedules');
        setSchedules(schedulesArray);
      })
      .catch((error) => {
        console.error(error);
        setSchedules([]);
      });
  }, [selectedDoctor]);

  /* -------------------------------- */
  /* BOOK APPOINTMENT */
  /* -------------------------------- */
  const handleBookAppointment = async () => {
    // Basic Validation: Doctor and Specialization are no longer required
    if (
      !selectedDate ||
      !selectedTime ||
      !patientName ||
      !patientPhone
    ) {
      alert('Please complete your name, phone number, preferred date, and time.');
      return;
    }

    try {
      setLoading(true);

      const payload = {
        patient_name: patientName,
        patient_phone: patientPhone,
        doctor_id: selectedDoctor || null, // Optional
        specialization_id: selectedSpecialization || null, // Optional
        appointment_date: selectedDate,
        appointment_time: selectedTime,
        reason_for_visit: reason || 'General Walk-In / Triage Request',
        booking_type: 'GUEST_BOOKING', // Clarified booking type for guests
        booking_channel: bookingChannel,
        duration: 30,
      };

      console.log('BOOKING PAYLOAD:', payload);

      const response = await fetch(`${API_BASE_URL_HIS}appointments/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success || data.status || response.ok) {
        alert('Appointment request submitted successfully. Our team will contact you shortly.');
        setPatientName('');
        setPatientPhone('');
        setReason('');
        setSelectedDate('');
        setSelectedDoctor('');
        setSelectedTime('');
        setSelectedSpecialization('');
        setBookingChannel('IN_CLINIC');
      } else {
        alert(data.message || 'Booking failed');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try contacting us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 xl:py-24 bg-gradient-to-tr from-slate-50 via-white to-sky-50/50 min-h-screen text-slate-800">
      <div className="max-w-[1600px] mx-auto px-6 xl:px-16">
        
        {/* SECTION HEADER AREA */}
        <div className="mb-12 max-w-3xl">
          <span className="text-[#5CB338] font-bold text-xs uppercase tracking-widest bg-[#5CB338]/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Centralized Access Control
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Appointment Booking Gateway
          </h2>
          <p className="text-slate-500 mt-3 text-base md:text-lg">
            Choose your preferred medium below. Register directly into our clinical database portal or route through secure messaging and rapid response lines.
          </p>
        </div>

        {/* 12-COLUMN RESPONSIBLE LAYOUT DESK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* LEFT INTERACTIVE MODULE: PATIENT REGISTRY PORTAL FORM (Columns 1 to 7) */}
          <div className="lg:col-span-7">
            <div className="max-w-5xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="bg-white rounded-[2rem] shadow-2xl p-8 lg:p-12"
              >
                {/* HEADER */}
                <div className="mb-10">
                  <h2 className="text-3xl lg:text-5xl font-black text-[#1E1E1E]">
                    Book Appointment
                  </h2>
                  <p className="text-gray-500 mt-3">
                    Reserve a consultation slot directly from our clinical registry.
                  </p>
                </div>

                {/* CHANNELS SELECTOR ROW */}
                <div className="mb-10">
                  <label className="font-semibold text-sm mb-3 block text-gray-700">
                    Select Your Preferred Consultation Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {channels.map((channel) => {
                      const isSelected = bookingChannel === channel.id;
                      return (
                        <button
                          key={channel.id}
                          type="button"
                          onClick={() => setBookingChannel(channel.id)}
                          className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                            isSelected
                              ? 'border-[#2A157C] bg-[#2A157C]/5 text-[#2A157C] font-bold shadow-md'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600 bg-white'
                          }`}
                        >
                          <span className="text-xl">{channel.icon}</span>
                          <span className="text-base">{channel.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* FORM GRID */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* SPECIALIZATION */}
                  <div>
                    <label className="font-semibold text-sm mb-2 block">
                      Specialization (Optional)
                    </label>
                    <select
                      value={selectedSpecialization}
                      onChange={(e) => {
                        setSelectedSpecialization(e.target.value);
                        setSelectedDoctor(''); // Reset doctor if specialty changes
                      }}
                      className="w-full border rounded-2xl p-4 bg-white"
                    >
                      <option value="">Any Specialization</option>
                      {Array.isArray(specializations) &&
                        specializations.map((item, index) => (
                          <option key={item.id || index} value={item.id}>
                            {item.name || item.specialization_name || item.title}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* DOCTORS */}
                  <div>
                    <label className="font-semibold text-sm mb-2 block">
                      Consulting Doctor (Optional)
                    </label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full border rounded-2xl p-4 bg-white"
                    >
                      <option value="">No Preference (Next Available)</option>
                      {Array.isArray(filteredDoctors) &&
                        filteredDoctors.map((doctor, index) => (
                          <option key={doctor.id || index} value={doctor.id}>
                            {doctor.name || doctor.full_name || doctor.doctor_name}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* DATE */}
                  <div>
                    <label className="font-semibold text-sm mb-2 block">
                      Appointment Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full border rounded-2xl p-4"
                    />
                  </div>

                  {/* TIME SLOT */}
                  <div>
                    <label className="font-semibold text-sm mb-2 block">
                      Preferred Time Slot <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full border rounded-2xl p-4 bg-white"
                    >
                      <option value="">Select Time Slot</option>
                      {Array.isArray(schedules) &&
                        schedules.map((slot, index) => {
                          const val = slot.time || slot.slot || slot.start_time;
                          return (
                            <option key={index} value={val}>
                              {val}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  {/* PATIENT NAME */}
                  <div>
                    <label className="font-semibold text-sm mb-2 block">
                      Patient Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Enter patient name"
                      className="w-full border rounded-2xl p-4"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="font-semibold text-sm mb-2 block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={patientPhone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 15);
                        setPatientPhone(value);
                      }}
                      placeholder="080..."
                      className="w-full border rounded-2xl p-4"
                    />
                  </div>
                </div>

                {/* REASON */}
                <div className="mt-6">
                  <label className="font-semibold text-sm mb-2 block">
                    Reason for Visit
                  </label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={5}
                    placeholder="Brief summary of symptoms or needs..."
                    className="w-full border rounded-2xl p-4"
                  />
                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookAppointment}
                  disabled={loading}
                  className="mt-8 w-full bg-[#2A157C] hover:bg-[#3b239d] text-white font-bold py-4 rounded-2xl disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Processing...' : 'Confirm Appointment'}
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* RIGHT FIXED STICKY EXECUTION TRAY: OFF-PORTAL CHANNELS (Columns 8 to 12) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            
            {/* 1. CRITICAL ALERT BANNER CONTAINER */}
            <Link
              href="tel:07056482776"
              className="flex items-center gap-4 bg-red-600 font-bold tracking-wide uppercase py-3 px-6 rounded-2xl shadow-lg hover:bg-red-700 transition-all active:scale-98 w-full h-16 justify-center"
            >
              <div className="relative w-12 h-12 shrink-0">
                <Image 
                  src="/assets/images/emergency/emergencies.gif" 
                  alt="Emergency Alert"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-xs md:text-sm lg:text-base tracking-wider">
                For Emergencies, Call 0705 648 2776
              </span>
            </Link>

            {/* 2. INSTANT WHATSAPP AGENT DISPATCH */}
            <Link
              href="https://wa.me/2347056482776?text=Hello%20Gracespring%20Hospitals%20Desk%2C%20I%20want%20to%20schedule%20an%20appointment." 
              className="flex items-center gap-4 bg-[#25D366] font-bold tracking-wide uppercase py-3 px-6 rounded-2xl shadow-lg hover:bg-[#20ba59] transition-all active:scale-98 w-full h-16 justify-center"
            >
              <div className="relative w-10 h-10 shrink-0">
                <Image 
                  src="/assets/images/emergency/Whatsap-Icon-Animation.gif" 
                  alt="WhatsApp Chat"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-xs md:text-sm lg:text-base tracking-wider">
                WhatsApp - Chat With Us - 0705 648 2776
              </span>
            </Link>

            {/* MULTI-CHANNEL CARD DECK GRID */}
            <div className="p-6 bg-white border border-slate-200/90 rounded-3xl shadow-xl shadow-slate-100/50 space-y-4">
              <h4 className="text-xs font-bold text-slate-400 tracking-widest uppercase border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>Alternative Access Ingestion</span>
                <Clock size={13} className="text-slate-400" />
              </h4>

              {/* SMS AUTOMATION CHANNEL */}
              <a 
                href="sms:07056482776?body=Appointment Request for: [Your Name], Preffered Date: [DD/MM/YYYY]. Reason: [Symptoms]"
                className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 border border-slate-100 group transition-all"
              >
                <div className="p-3 bg-amber-50 rounded-xl text-amber-600 group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-[#5CB338] transition-colors">SMS Text Message</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Text details to <span className="font-semibold text-slate-700">0705 648 2776</span> using our standard automated queue syntax template.
                  </p>
                </div>
              </a>

              {/* SECURE CORPORATE EMAIL INTAKE */}
              <a 
                href="mailto:care@gracespringhospitals.com?subject=Specialist Consultation Slot Request&body=Patient Name:%0D%0AContact Phone:%0D%0APreferred Specialization:%0D%0APreferred Doctor:%0D%0ABrief Medical Summary:"
                className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 border border-slate-100 group transition-all"
              >
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-105 transition-transform shrink-0">
                  <Mail size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-900 group-hover:text-[#5CB338] transition-colors">Official Care Desk Email</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    File structured documentation securely via <span className="font-semibold text-slate-700">care@gracespringhospitals.com</span>.
                  </p>
                </div>
              </a>

              {/* SITE VISIT / WALK-IN MAP CITATION */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 group">
                <div className="p-3 bg-emerald-50 rounded-xl text-[#5CB338] shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-900">Direct Physical Walk-In / Site Visit</p>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata Estate, Sangotedo, Eti-Osa, Lekki, Lagos.
                  </p>
                  <div className="pt-1">
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 inline-block">
                      Triage Sorted 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* HEFAMAA NOTICE FOOTER */}
              <div className="pt-2 flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                <ShieldCheck size={12} className="text-[#6F92E7]" />
                <span>HEFAMAA Accredited Institutional Clinical Workflow</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { API_BASE_URL } from '../../lib/api';
// import { Calendar, Mail, MessageSquare, MapPin, PhoneCall, ShieldCheck, Clock } from 'lucide-react';

// export default function AppointmentBooking() {
// const [specializations, setSpecializations] = useState([]);
//   const [doctors, setDoctors] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [schedules, setSchedules] = useState([]);

//   // Channels & Form State
//   const [bookingChannel, setBookingChannel] = useState('IN_CLINIC'); // Options: IN_CLINIC, VIDEO, HOME_VISIT
//   const [selectedSpecialization, setSelectedSpecialization] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');

//   const [patientName, setPatientName] = useState('');
//   const [patientPhone, setPatientPhone] = useState('');
//   const [reason, setReason] = useState('');

//   const [loading, setLoading] = useState(false);

//   const channels = [
//     { id: 'IN_CLINIC', label: 'In-Clinic', icon: '🏢' },
//     { id: 'VIDEO', label: 'Video Call', icon: '📹' },
//     { id: 'HOME_VISIT', label: 'Home Visit', icon: '🏠' },
//   ];

//   /* -------------------------------- */
//   /* SAFE ARRAY EXTRACTOR */
//   /* -------------------------------- */
//   const extractArray = (response, key = null) => {
//     if (Array.isArray(response)) return response;
//     if (key && Array.isArray(response[key])) return response[key];
//     if (Array.isArray(response.data)) return response.data;
//     return [];
//   };

//   /* -------------------------------- */
//   /* FETCH SPECIALIZATIONS */
//   /* -------------------------------- */
//   useEffect(() => {
//     fetch(`${API_BASE_URL}doctors-specializations`)
//       .then((res) => res.json())
//       .then((data) => {
//         const arrayData = extractArray(data, 'specializations');
//         setSpecializations(arrayData);
//       })
//       .catch((error) => {
//         console.error(error);
//         setSpecializations([]);
//       });
//   }, []);

//   /* -------------------------------- */
//   /* FETCH DOCTORS */
//   /* -------------------------------- */
//   useEffect(() => {
//     fetch(`${API_BASE_URL}/doctors`)
//       .then((res) => res.json())
//       .then((data) => {
//         const doctorsArray = extractArray(data, 'doctors');
//         setDoctors(doctorsArray);
//         setFilteredDoctors(doctorsArray);
//       })
//       .catch((error) => {
//         console.error(error);
//         setDoctors([]);
//         setFilteredDoctors([]);
//       });
//   }, []);

//   /* -------------------------------- */
//   /* FILTER DOCTORS */
//   /* -------------------------------- */
//   useEffect(() => {
//     if (!selectedSpecialization) {
//       setFilteredDoctors(doctors);
//       return;
//     }

//     const filtered = doctors.filter((doctor) => {
//       return (
//         String(
//           doctor.specialization_id ||
//           doctor.specialization ||
//           doctor.specialty_id
//         ) === String(selectedSpecialization)
//       );
//     });

//     setFilteredDoctors(filtered);
//   }, [selectedSpecialization, doctors]);

//   /* -------------------------------- */
//   /* FETCH SCHEDULES */
//   /* -------------------------------- */
//   useEffect(() => {
//     if (!selectedDoctor) return;

//     fetch(`${API_BASE_URL}doctors/list/schedules?id=${selectedDoctor}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const schedulesArray = extractArray(data, 'schedules');
//         setSchedules(schedulesArray);
//       })
//       .catch((error) => {
//         console.error(error);
//         setSchedules([]);
//       });
//   }, [selectedDoctor]);

//   /* -------------------------------- */
//   /* BOOK APPOINTMENT */
//   /* -------------------------------- */
//   const handleBookAppointment = async () => {
//     if (
//       !selectedDoctor ||
//       !selectedDate ||
//       !selectedTime ||
//       !patientName ||
//       !patientPhone
//     ) {
//       alert('Please complete all required fields');
//       return;
//     }

//     try {
//       setLoading(true);

//       const payload = {
//         patient_name: patientName,
//         patient_phone: patientPhone,
//         doctor_id: selectedDoctor,
//         appointment_date: selectedDate,
//         appointment_time: selectedTime,
//         reason_for_visit: reason,
//         booking_type: 'PRE BOOKED',
//         booking_channel: bookingChannel, // Added channel choice here
//         duration: 30,
//       };

//       console.log('BOOKING PAYLOAD:', payload);

//       const response = await fetch(`${API_BASE_URL}appointments/book`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (data.success || data.status || response.ok) {
//         alert('Appointment booked successfully');
//         setPatientName('');
//         setPatientPhone('');
//         setReason('');
//         setSelectedDate('');
//         setSelectedDoctor('');
//         setSelectedTime('');
//         setSelectedSpecialization('');
//         setBookingChannel('IN_CLINIC');
//         setSchedules([]);
//       } else {
//         alert(data.message || 'Booking failed');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

  
//   return (
//     <section className="py-16 xl:py-24 bg-gradient-to-tr from-slate-50 via-white to-sky-50/50 min-h-screen text-slate-800">
//       <div className="max-w-[1600px] mx-auto px-6 xl:px-16">
        
//         {/* SECTION HEADER AREA */}
//         <div className="mb-12 max-w-3xl">
//           <span className="text-[#5CB338] font-bold text-xs uppercase tracking-widest bg-[#5CB338]/10 px-4 py-1.5 rounded-full inline-block mb-4">
//             Centralized Access Control
//           </span>
//           <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
//             Appointment Booking Gateway
//           </h2>
//           <p className="text-slate-500 mt-3 text-base md:text-lg">
//             Choose your preferred medium below. Register directly into our clinical database portal or route through secure messaging and rapid response lines.
//           </p>
//         </div>

//         {/* 12-COLUMN RESPONSIBLE LAYOUT DESK */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
//           {/* LEFT INTERACTIVE MODULE: PATIENT REGISTRY PORTAL FORM (Columns 1 to 7) */}
//           <div className="lg:col-span-7">
            
//        <div className="max-w-5xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           className="bg-white rounded-[2rem] shadow-2xl p-8 lg:p-12"
//         >
//           {/* HEADER */}
//           <div className="mb-10">
//             <h2 className="text-3xl lg:text-5xl font-black text-[#1E1E1E]">
//               Book Appointment
//             </h2>
//             <p className="text-gray-500 mt-3">
//               Reserve a consultation slot directly from our clinical registry.
//             </p>
//           </div>

//           {/* CHANNELS SELECTOR ROW */}
//           <div className="mb-10">
//             <label className="font-semibold text-sm mb-3 block text-gray-700">
//               Select Your Preferred Consultation Method
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {channels.map((channel) => {
//                 const isSelected = bookingChannel === channel.id;
//                 return (
//                   <button
//                     key={channel.id}
//                     type="button"
//                     onClick={() => setBookingChannel(channel.id)}
//                     className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
//                       isSelected
//                         ? 'border-[#2A157C] bg-[#2A157C]/5 text-[#2A157C] font-bold shadow-md'
//                         : 'border-gray-200 hover:border-gray-300 text-gray-600 bg-white'
//                     }`}
//                   >
//                     <span className="text-xl">{channel.icon}</span>
//                     <span className="text-base">{channel.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* FORM GRID */}
//           <div className="grid lg:grid-cols-2 gap-6">
//             {/* SPECIALIZATION */}
//             <div>
//               <label className="font-semibold text-sm mb-2 block">
//                 Specialization
//               </label>
//               <select
//                 value={selectedSpecialization}
//                 onChange={(e) => setSelectedSpecialization(e.target.value)}
//                 className="w-full border rounded-2xl p-4 bg-white"
//               >
//                 <option value="">Select Specialization</option>
//                 {Array.isArray(specializations) &&
//                   specializations.map((item, index) => (
//                     <option key={item.id || index} value={item.id}>
//                       {item.name || item.specialization_name || item.title}
//                     </option>
//                   ))}
//               </select>
//             </div>

//             {/* DOCTORS */}
//             <div>
//               <label className="font-semibold text-sm mb-2 block">
//                 Consulting Doctor
//               </label>
//               <select
//                 value={selectedDoctor}
//                 onChange={(e) => setSelectedDoctor(e.target.value)}
//                 className="w-full border rounded-2xl p-4 bg-white"
//               >
//                 <option value="">Select Doctor</option>
//                 {Array.isArray(filteredDoctors) &&
//                   filteredDoctors.map((doctor, index) => (
//                     <option key={doctor.id || index} value={doctor.id}>
//                       {doctor.name || doctor.full_name || doctor.doctor_name}
//                     </option>
//                   ))}
//               </select>
//             </div>

//             {/* DATE */}
//             <div>
//               <label className="font-semibold text-sm mb-2 block">
//                 Appointment Date
//               </label>
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="w-full border rounded-2xl p-4"
//               />
//             </div>

//             {/* TIME SLOT */}
//             <div>
//               <label className="font-semibold text-sm mb-2 block">
//                 Time Slot
//               </label>
//               <select
//                 value={selectedTime}
//                 onChange={(e) => setSelectedTime(e.target.value)}
//                 className="w-full border rounded-2xl p-4 bg-white"
//               >
//                 <option value="">Select Time Slot</option>
//                 {Array.isArray(schedules) &&
//                   schedules.map((slot, index) => {
//                     const val = slot.time || slot.slot || slot.start_time;
//                     return (
//                       <option key={index} value={val}>
//                         {val}
//                       </option>
//                     );
//                   })}
//               </select>
//             </div>

//             {/* PATIENT NAME */}
//             <div>
//               <label className="font-semibold text-sm mb-2 block">
//                 Patient Name
//               </label>
//               <input
//                 type="text"
//                 value={patientName}
//                 onChange={(e) => setPatientName(e.target.value)}
//                 placeholder="Enter patient name"
//                 className="w-full border rounded-2xl p-4"
//               />
//             </div>

//             {/* PHONE */}
//             <div>
//               <label className="font-semibold text-sm mb-2 block">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 value={patientPhone}
//                 onChange={(e) => {
//                   const value = e.target.value.replace(/\D/g, '').slice(0, 12);
//                   setPatientPhone(value);
//                 }}
//                 placeholder="080..."
//                 className="w-full border rounded-2xl p-4"
//               />
//             </div>
//           </div>

//           {/* REASON */}
//           <div className="mt-6">
//             <label className="font-semibold text-sm mb-2 block">
//               Reason for Visit
//             </label>
//             <textarea
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               rows={5}
//               placeholder="Brief summary..."
//               className="w-full border rounded-2xl p-4"
//             />
//           </div>

//           {/* BUTTON */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={handleBookAppointment}
//             disabled={loading}
//             className="mt-8 w-full bg-[#2A157C] hover:bg-[#3b239d] text-white font-bold py-4 rounded-2xl disabled:opacity-50 transition-colors"
//           >
//             {loading ? 'Processing...' : 'Confirm Appointment'}
//           </motion.button>
//         </motion.div>
//       </div>
            
//           </div>

//           {/* RIGHT FIXED STICKY EXECUTION TRAY: OFF-PORTAL CHANNELS (Columns 8 to 12) */}
//           <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            
//             {/* 1. CRITICAL ALERT BANNER CONTAINER */}
//             <Link
//               href="tel:07056482776"
//               className="flex items-center gap-4 bg-red-600 font-bold tracking-wide uppercase py-3 px-6 rounded-2xl shadow-lg hover:bg-red-700 transition-all active:scale-98 w-full h-16 justify-center"
//             >
//               <div className="relative w-12 h-12 shrink-0">
//                 <Image 
//                   src="/assets/images/emergency/emergencies.gif" 
//                   alt="Emergency Alert"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <span className="text-white text-xs md:text-sm lg:text-base tracking-wider">
//                 For Emergencies, Call 0705 648 2776
//               </span>
//             </Link>

//             {/* 2. INSTANT WHATSAPP AGENT DISPATCH */}
//             <Link
//               href="https://wa.me/2347056482776?text=Hello%20Gracespring%20Hospitals%20Desk%2C%20I%20want%20to%20schedule%20an%20appointment." 
//               className="flex items-center gap-4 bg-[#25D366] font-bold tracking-wide uppercase py-3 px-6 rounded-2xl shadow-lg hover:bg-[#20ba59] transition-all active:scale-98 w-full h-16 justify-center"
//             >
//               <div className="relative w-10 h-10 shrink-0">
//                 <Image 
//                   src="/assets/images/emergency/Whatsap-Icon-Animation.gif" 
//                   alt="WhatsApp Chat"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <span className="text-white text-xs md:text-sm lg:text-base tracking-wider">
//                 WhatsApp - Chat With Us - 0705 648 2776
//               </span>
//             </Link>

//             {/* MULTI-CHANNEL CARD DECK GRID */}
//             <div className="p-6 bg-white border border-slate-200/90 rounded-3xl shadow-xl shadow-slate-100/50 space-y-4">
//               <h4 className="text-xs font-bold text-slate-400 tracking-widest uppercase border-b border-slate-100 pb-3 flex items-center justify-between">
//                 <span>Alternative Access Ingestion</span>
//                 <Clock size={13} className="text-slate-400" />
//               </h4>

//               {/* SMS AUTOMATION CHANNEL */}
//               <a 
//                 href="sms:07056482776?body=Appointment Request for: [Your Name], Preffered Date: [DD/MM/YYYY]. Reason: [Symptoms]"
//                 className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 border border-slate-100 group transition-all"
//               >
//                 <div className="p-3 bg-amber-50 rounded-xl text-amber-600 group-hover:scale-105 transition-transform shrink-0">
//                   <MessageSquare size={18} />
//                 </div>
//                 <div className="space-y-0.5">
//                   <p className="text-xs font-bold text-slate-900 group-hover:text-[#5CB338] transition-colors">SMS Text Message</p>
//                   <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
//                     Text details to <span className="font-semibold text-slate-700">0705 648 2776</span> using our standard automated queue syntax template.
//                   </p>
//                 </div>
//               </a>

//               {/* SECURE CORPORATE EMAIL INTAKE */}
//               <a 
//                 href="mailto:care@gracespringhospitals.com?subject=Specialist Consultation Slot Request&body=Patient Name:%0D%0AContact Phone:%0D%0APreferred Specialization:%0D%0APreferred Doctor:%0D%0ABrief Medical Summary:"
//                 className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 border border-slate-100 group transition-all"
//               >
//                 <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-105 transition-transform shrink-0">
//                   <Mail size={18} />
//                 </div>
//                 <div className="space-y-0.5">
//                   <p className="text-xs font-bold text-slate-900 group-hover:text-[#5CB338] transition-colors">Official Care Desk Email</p>
//                   <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
//                     File structured documentation securely via <span className="font-semibold text-slate-700">care@gracespringhospitals.com</span>.
//                   </p>
//                 </div>
//               </a>

//               {/* SITE VISIT / WALK-IN MAP CITATION */}
//               <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 group">
//                 <div className="p-3 bg-emerald-50 rounded-xl text-[#5CB338] shrink-0">
//                   <MapPin size={18} />
//                 </div>
//                 <div className="space-y-1">
//                   <p className="text-xs font-bold text-slate-900">Direct Physical Walk-In / Site Visit</p>
//                   <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
//                     Gracespring Hospitals, Block 3, Plot 32, Ajayi Apata Estate, Sangotedo, Eti-Osa, Lekki, Lagos.
//                   </p>
//                   <div className="pt-1">
//                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 inline-block">
//                       Triage Sorted 24/7
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* HEFAMAA NOTICE FOOTER */}
//               <div className="pt-2 flex items-center gap-2 text-[10px] text-slate-400 font-medium">
//                 <ShieldCheck size={12} className="text-[#6F92E7]" />
//                 <span>HEFAMAA Accredited Institutional Clinical Workflow</span>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }







