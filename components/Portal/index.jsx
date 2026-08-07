'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, ChevronDown, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE_URL_HIS } from '../../lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default function PatientPortal() {
  const router = useRouter();
  
  // Form State
  const [hospital, setHospital] = useState('Gracespring Hospitals Limited');
  const [uhid, setUhid] = useState('');
  const [password, setPassword] = useState('');
  
  // UI State
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleReset = () => {
    setUhid('');
    setPassword('');
    setHospital('Gracespring Hospitals Limited');
    setErrorMessage('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!uhid || !password) {
      setErrorMessage('Please enter both your MRN and password.');
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace '/auth/patient/login' with your actual HIS endpoint
      const response = await fetch(`${API_BASE_URL_HIS}/auth/patient/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          uhid,
          password,
          hospital,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid MRN or password. Please try again.');
      }

      // Handle successful login (e.g., store token in localStorage or cookies)
      localStorage.setItem('patient_token', data.token);
      
      // Redirect to the patient dashboard
      router.push('/patient-dashboard'); 
      
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred connecting to the server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/services/WomenChildHealth/women-and-child-healthfertility-treatment.png')" }} 
    >
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-[#2A157c]  shadow-2xl w-full max-w-[420px] p-8 md:p-10 mx-4"
      >
        {/* LOGO AREA */}
        <div className="text-center mb-6 py-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
             
                
                <div className="bg-[#2A157c]  flex-shrink-0 z-50">
                  <Link href="https://gracespringhospitals.com/">
                    <Image
                      src="/assets/logo/siteLogo-nobg.png"
                      width={180}
                      height={60}
                      alt="Gracespring Hospitals"
                      className="w-32 sm:w-40 xl:w-48 h-auto object-contain"
                      priority
                    />
                  </Link>
                </div>

            </div>
            {/* <h1 className="text-[#1E3A8A] text-xl font-bold tracking-wide">
              Gracespring Hospitals
            </h1> */}
          </div>
          <p className="text-gray-600 text-sm font-medium">
            <span className="font-bold">Patient</span> Portal
          </p>
        </div>

        {/* Error Display */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          
          {/* HOSPITAL DROPDOWN */}
          <div className="relative">
            <select 
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full border border-gray-300 text-gray-600 text-sm p-3 appearance-none outline-none focus:border-[#4A90E2]"
            >
              <option value="Gracespring Hospitals Limited">Patient Portal</option>
              <option value="Gracespring Hospitals Limited">Appointment Portal</option>
              <option value="Gracespring Hospitals Limited">Telemedicine</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          {/* UHID / MRN */}
          <div className="relative">
            <input
              type="text"
              value={uhid}
              onChange={(e) => setUhid(e.target.value)}
              placeholder="Enter your MRN:<Registration No.>"
              className="w-full border border-gray-300 text-sm p-3 pr-10 outline-none focus:border-[#4A90E2] placeholder:text-gray-400"
              disabled={isLoading}
            />
            <Mail
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>

          {/* PASSWORD / MOBILE */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your registered Mobile No/Password"
              className="w-full border border-gray-300 text-sm p-3 pr-10 outline-none focus:border-[#4A90E2] placeholder:text-gray-400"
              disabled={isLoading}
            />
            <Lock
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold"
              size={18}
            />
          </div>

          {/* LOGIN / RESET BUTTONS */}
          <div className="flex gap-4 pt-2">

            {/* <Link
              href="/patient-dashboard"
              disabled={isLoading}
              className="flex-1 flex justify-center items-center bg-[#4A90E2] hover:bg-[#357ABD] text-white text-sm font-medium py-2.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : 'Login'}
            </Link> */}

             <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex justify-center items-center bg-[#4A90E2] hover:bg-[#357ABD] text-white text-sm font-medium py-2.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : 'Login'}
            </button> 
            <button
              type="button"
              onClick={handleReset}
              disabled={isLoading}
              className="flex-1 bg-[#E74C3C] hover:bg-[#C0392B] text-white text-sm font-medium py-2.5 transition-colors disabled:opacity-70"
            >
              Reset
            </button>
          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              className="bg-[#F39C12] hover:bg-[#D68910] text-white text-sm font-medium py-2 px-6 transition-colors"
            >
              Forgot Password
            </button>
          </div>

          {/* HOW TO USE */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              className="bg-[#1F4E79] hover:bg-[#153654] text-white text-sm font-medium py-2 px-6 transition-colors"
            >
              How to use patient portal
            </button>
          </div>

        </form>
      </motion.div>
    </section>
  );
}