"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "../../../lib/utils";
import { API_BASE_URL_HIS } from "../../../lib/api";
import {
  Users,
  FlaskConical,
  Pill,
  CreditCard,
  ArrowRight,
  LogOut,
  Loader2,
} from "lucide-react";

const ALL_MODULES = [
  { id: "Appointment", label: "Appointment", path: "/patients/search", color: "blue", description: "Book & search Appointment" },
  { id: "lab", label: "Laboratory", path: "/lab/worklist", color: "purple", description: "Lab test & results" },
  { id: "pharmacy", label: "Pharmacy", path: "/pharmacy/queue", color: "emerald", description: "prescriptions" },
  { id: "billing", label: "Billing", path: "/billing/opd", color: "indigo", description: "Invoices & payments" },
];

const colorMap = {
  blue: { bg: "bg-brand-active", text: "text-brand-primary", border: "border-brand-active" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
  sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
  red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
  slate: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
};

const greetingHour = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
};

const Dashboard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const allowedModules = ALL_MODULES;

  const [user, setUser] = useState(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-NG", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const fetchMe = async () => {
    try {
      const res = await fetch(`${API_BASE_URL_HIS}/auth/patient/me`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Not authenticated");
      }

      const data = await res.json();
      return data?.data ?? data?.user ?? null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const me = await fetchMe();
      if (!isMounted) return;

      if (!me) {
        router.replace("/patient-portal");
        return;
      }

      setUser(me);
      setIsCheckingSession(false);
    })();

    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const revalidate = async () => {
      if (document.visibilityState && document.visibilityState !== "visible") return;
      const me = await fetchMe();
      if (!me) router.replace("/patient-portal");
    };
    document.addEventListener("visibilitychange", revalidate);
    window.addEventListener("pageshow", revalidate);
    return () => {
      document.removeEventListener("visibilitychange", revalidate);
      window.removeEventListener("pageshow", revalidate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch(`${API_BASE_URL_HIS}/auth/patient/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      sessionStorage.clear();
      window.location.replace("/patient-portal");
    }
  };

  if (isCheckingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-[#2A157C]" size={28} />
      </div>
    );
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 flex items-center justify-between py-2 min-h-16 h-auto",
          pathname === "/"
            ? isScrolled
              ? "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12 2xl:px-16"
              : "bg-transparent px-4 sm:px-6 xl:px-12 2xl:px-16"
            : "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12 2xl:px-16"
        )}
      >
        <div className="flex-shrink-0 z-50">
          <Link href="/">
            {/* Used NextImage component here */}

          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-black text-white">{user?.name || "Patient"}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              {user?.mrn ? `MRN: ${user.mrn}` : "Patient"}
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-60"
          >
            {isLoggingOut ? <Loader2 className="animate-spin" size={16} /> : <LogOut size={16} />}
            Log out
          </button>
        </div>
      </header>

      <div className="min-h-[80vh] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16">
        <div className="px-5 mt-24">
          <p className="text-xl font-black text-slate-800">
            {greetingHour()}, {user?.name?.split(" ")[0] || "there"}
          </p>
          <p className="text-sm text-slate-500 font-medium mt-1">{dateStr}</p>
        </div>

        <div className="px-5 mt-8 lg:mt-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-fit m-auto">
            {allowedModules.map((mod) => {
              const c = colorMap[mod.color] || colorMap.slate;
              // const Icon = mod.icon;
              return (
                <button
                  key={mod.path}
                  type="button"
                  onClick={() => router.push(mod.path)}
                  className={`group flex flex-col items-start gap-4 p-6 bg-white border ${c.border} rounded-[24px] shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all text-left`}
                >
                  <div className={`p-3 ${c.bg} ${c.text} rounded-xl`}>
                    {/* <Icon size={22} /> */}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-slate-800 group-hover:text-brand-primary transition-colors">{mod.label}</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">{mod.description}</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-brand-active transition-colors self-end" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="text-center px-10">
        <p className="mx-auto">© {currentYear} Gracespring Hospitals.</p>
        <p className="mx-auto">All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Dashboard;











// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// // Renamed Image import to NextImage to prevent shadowing the browser's native Image constructor
// import NextImage from "next/image";
// import { cn } from "../../../lib/utils";
// import { API_BASE_URL_HIS } from "../../../lib/api";
// import {
//   Users,
//   FlaskConical,
//   Pill,
//   CreditCard,
//   ArrowRight,
//   LogOut,
//   Loader2,
// } from "lucide-react";

// const ALL_MODULES = [
//   { id: "Appointment", label: "Appointment", path: "/patients/search", icon: Users, color: "blue", description: "Book & search Appointment" },
//   { id: "lab", label: "Laboratory", path: "/lab/worklist", icon: FlaskConical, color: "purple", description: "Lab test & results" },
//   { id: "pharmacy", label: "Pharmacy", path: "/pharmacy/queue", icon: Pill, color: "emerald", description: "prescriptions" },
//   { id: "billing", label: "Billing", path: "/billing/opd", icon: CreditCard, color: "indigo", description: "Invoices & payments" },
// ];

// const colorMap = {
//   blue: { bg: "bg-brand-active", text: "text-brand-primary", border: "border-brand-active" },
//   teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100" },
//   purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
//   emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
//   rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
//   sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
//   red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100" },
//   amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
//   indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
//   slate: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
// };

// const greetingHour = () => {
//   const h = new Date().getHours();
//   if (h < 12) return "Good morning";
//   if (h < 17) return "Good afternoon";
//   return "Good evening";
// };

// const Dashboard = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const currentYear = new Date().getFullYear();
//   const allowedModules = ALL_MODULES;

//   const [user, setUser] = useState(null);
//   const [isCheckingSession, setIsCheckingSession] = useState(true);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const now = new Date();
//   const dateStr = now.toLocaleDateString("en-NG", {
//     weekday: "long", year: "numeric", month: "long", day: "numeric",
//   });

//   const fetchMe = async () => {
//     try {
//       const res = await fetch(`${API_BASE_URL_HIS}/auth/patient/me`, {
//         method: "GET",
//         credentials: "include",
//         cache: "no-store",
//       });

//       if (!res.ok) {
//         throw new Error("Not authenticated");
//       }

//       const data = await res.json();
//       return data?.data ?? data?.user ?? null;
//     } catch {
//       return null;
//     }
//   };

//   useEffect(() => {
//     let isMounted = true;

//     (async () => {
//       const me = await fetchMe();
//       if (!isMounted) return;

//       if (!me) {
//         router.replace("/patient-portal");
//         return;
//       }

//       setUser(me);
//       setIsCheckingSession(false);
//     })();

//     const onScroll = () => setIsScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll);

//     return () => {
//       isMounted = false;
//       window.removeEventListener("scroll", onScroll);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     const revalidate = async () => {
//       if (document.visibilityState && document.visibilityState !== "visible") return;
//       const me = await fetchMe();
//       if (!me) router.replace("/patient-portal");
//     };
//     document.addEventListener("visibilitychange", revalidate);
//     window.addEventListener("pageshow", revalidate);
//     return () => {
//       document.removeEventListener("visibilitychange", revalidate);
//       window.removeEventListener("pageshow", revalidate);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleLogout = async () => {
//     setIsLoggingOut(true);
//     try {
//       await fetch(`${API_BASE_URL_HIS}/auth/patient/logout`, {
//         method: "POST",
//         credentials: "include",
//       });
//     } catch (error) {
//       console.error("Logout request failed:", error);
//     } finally {
//       sessionStorage.clear();
//       window.location.replace("/patient-portal");
//     }
//   };

//   if (isCheckingSession) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Loader2 className="animate-spin text-[#2A157C]" size={28} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <header
//         className={cn(
//           "fixed top-0 z-50 w-full transition-all duration-300 flex items-center justify-between py-2 min-h-16 h-auto",
//           pathname === "/"
//             ? isScrolled
//               ? "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12 2xl:px-16"
//               : "bg-transparent px-4 sm:px-6 xl:px-12 2xl:px-16"
//             : "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12 2xl:px-16"
//         )}
//       >
//         <div className="flex-shrink-0 z-50">
//           <Link href="/">
//             {/* Used NextImage component here */}
//             <NextImage
//               src="/assets/logo/siteLogo-nobg.png"
//               width={180}
//               height={60}
//               alt="Gracespring Hospitals"
//               className="w-32 sm:w-40 xl:w-48 h-auto object-contain"
//               priority
//             />
//           </Link>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="text-right">
//             <p className="text-sm font-black text-white">{user?.name || "Patient"}</p>
//             <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
//               {user?.mrn ? `MRN: ${user.mrn}` : "Patient"}
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={handleLogout}
//             disabled={isLoggingOut}
//             className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-60"
//           >
//             {isLoggingOut ? <Loader2 className="animate-spin" size={16} /> : <LogOut size={16} />}
//             Log out
//           </button>
//         </div>
//       </header>

//       <div className="min-h-[80vh] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16">
//         <div className="px-5 mt-24">
//           <p className="text-xl font-black text-slate-800">
//             {greetingHour()}, {user?.name?.split(" ")[0] || "there"}
//           </p>
//           <p className="text-sm text-slate-500 font-medium mt-1">{dateStr}</p>
//         </div>

//         <div className="px-5 mt-8 lg:mt-auto">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-fit m-auto">
//             {allowedModules.map((mod) => {
//               const c = colorMap[mod.color] || colorMap.slate;
//               const Icon = mod.icon;
//               return (
//                 <button
//                   key={mod.path}
//                   type="button"
//                   onClick={() => router.push(mod.path)}
//                   className={`group flex flex-col items-start gap-4 p-6 bg-white border ${c.border} rounded-[24px] shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all text-left`}
//                 >
//                   <div className={`p-3 ${c.bg} ${c.text} rounded-xl`}>
//                     <Icon size={22} />
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-sm font-black text-slate-800 group-hover:text-brand-primary transition-colors">{mod.label}</p>
//                     <p className="text-[10px] text-slate-400 font-medium mt-0.5">{mod.description}</p>
//                   </div>
//                   <ArrowRight size={14} className="text-slate-300 group-hover:text-brand-active transition-colors self-end" />
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <footer className="text-center px-10">
//         <p className="mx-auto">© {currentYear} Gracespring Hospitals.</p>
//         <p className="mx-auto">All Rights Reserved.</p>
//       </footer>
//     </>
//   );
// };

// export default Dashboard;

// "use client"
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { cn } from "../../../lib/utils";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { API_BASE_URL_HIS } from "../../../lib/api";
// import {
//   Users,
//   FlaskConical,
//   Pill,
//   CreditCard,
//   ArrowRight,
//   LogOut,
//   Loader2,
// } from "lucide-react";

// const ALL_MODULES = [
//   { id: "Appointment", label: "Appointment", path: "/patients/search", icon: Users, color: "blue", description: "Book & search Appointment" },
//   { id: "lab", label: "Laboratory", path: "/lab/worklist", icon: FlaskConical, color: "purple", description: "Lab test & results" },
//   { id: "pharmacy", label: "Pharmacy", path: "/pharmacy/queue", icon: Pill, color: "emerald", description: "prescriptions" },
//   { id: "billing", label: "Billing", path: "/billing/opd", icon: CreditCard, color: "indigo", description: "Invoices & payments" },
// ];

// const colorMap = {
//   blue: { bg: "bg-brand-active", text: "text-brand-primary", border: "border-brand-active" },
//   teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100" },
//   purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
//   emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
//   rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
//   sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
//   red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100" },
//   amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
//   indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
//   slate: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
// };

// const greetingHour = () => {
//   const h = new Date().getHours();
//   if (h < 12) return "Good morning";
//   if (h < 17) return "Good afternoon";
//   return "Good evening";
// };

// const Dashboard = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const currentYear = new Date().getFullYear();
//   const allowedModules = ALL_MODULES;

//   // --- Real session state, no localStorage -------------------------
//   // user starts as null (not "User"/"Staff" placeholders) so the UI can
//   // tell the difference between "still loading" and "loaded but empty".
//   const [user, setUser] = useState(null);
//   const [isCheckingSession, setIsCheckingSession] = useState(true);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false); // was undefined before — this caused a crash

//   const now = new Date();
//   const dateStr = now.toLocaleDateString("en-NG", {
//     weekday: "long", year: "numeric", month: "long", day: "numeric",
//   });

//   // --- /auth/patient/me -----------------------------------------------
//   // Runs on mount. This is the ONLY source of truth for who's logged in —
//   // nothing is read from localStorage. If the patient_access_token cookie
//   // is missing or expired, this 401s and we bounce straight to login.
//   const fetchMe = async () => {
//     try {
//       const res = await fetch(`${API_BASE_URL_HIS}/auth/patient/me`, {
//         method: "GET",
//         credentials: "include", // sends the httpOnly cookie
//         cache: "no-store",
//       });

//       if (!res.ok) {
//         throw new Error("Not authenticated");
//       }

//       const data = await res.json();
//       // Backend's JSONResponse::success('Authenticated patient', {...})
//       // shape — adjust the .data access below if your JSONResponse wraps
//       // differently (e.g. straight to top level instead of under "data").
//       return data?.data ?? data?.user ?? null;
//     } catch {
//       return null;
//     }
//   };

//   useEffect(() => {
//     let isMounted = true;

//     (async () => {
//       const me = await fetchMe();
//       if (!isMounted) return;

//       if (!me) {
//         // No valid session — replace (not push) so login isn't stacked
//         // under this dashboard in history.
//         router.replace("/patient-portal");
//         return;
//       }

//       setUser(me);
//       setIsCheckingSession(false);
//     })();

//     const onScroll = () => setIsScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll);

//     return () => {
//       isMounted = false;
//       window.removeEventListener("scroll", onScroll);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Re-validate whenever the tab/page becomes visible again, e.g. the user
//   // hits Back and the browser restores this page from its in-memory
//   // bfcache instead of re-running the mount logic from scratch.
//   useEffect(() => {
//     const revalidate = async () => {
//       if (document.visibilityState && document.visibilityState !== "visible") return;
//       const me = await fetchMe();
//       if (!me) router.replace("/patient-portal");
//     };
//     document.addEventListener("visibilitychange", revalidate);
//     window.addEventListener("pageshow", revalidate);
//     return () => {
//       document.removeEventListener("visibilitychange", revalidate);
//       window.removeEventListener("pageshow", revalidate);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // --- /auth/patient/logout -------------------------------------------
//   const handleLogout = async () => {
//     setIsLoggingOut(true);
//     try {
//       await fetch(`${API_BASE_URL_HIS}/auth/patient/logout`, {
//         method: "POST",
//         credentials: "include",
//       });
//     } catch (error) {
//       console.error("Logout request failed:", error);
//       // Continue anyway — we still want to kick the user out client-side
//       // even if the network call failed, rather than leaving them stuck
//       // looking logged-in.
//     } finally {
//       sessionStorage.clear();
//       // window.location.replace (not router.push):
//       //  1. Replaces the current history entry, so Back can't return to
//       //     this dashboard.
//       //  2. Forces a full reload, flushing all React state in memory.
//       // Combined with the server having cleared the httpOnly cookie in
//       // logout(), there is no valid session left anywhere to fall back to.
//       window.location.replace("/patient-portal");
//     }
//   };

//   if (isCheckingSession) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <Loader2 className="animate-spin text-[#2A157C]" size={28} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <header
//         className={cn(
//           "fixed top-0 z-50 w-full transition-all duration-300 flex items-center justify-between py-2 min-h-16 h-auto",
//           pathname === "/"
//             ? isScrolled
//               ? "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12 2xl:px-16"
//               : "bg-transparent px-4 sm:px-6 xl:px-12 2xl:px-16"
//             : "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12 2xl:px-16"
//         )}
//       >
//         {/* BRANDING / LOGO CONTAINER */}
//         <div className="flex-shrink-0 z-50">
//           <Link href="/">
//             <Image
//               src="/assets/logo/siteLogo-nobg.png"
//               width={180}
//               height={60}
//               alt="Gracespring Hospitals"
//               className="w-32 sm:w-40 xl:w-48 h-auto object-contain"
//               priority
//             />
//           </Link>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="text-right">
//             <p className="text-sm font-black text-white">{user?.name || "Patient"}</p>
//             <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
//               {user?.mrn ? `MRN: ${user.mrn}` : "Patient"}
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={handleLogout}
//             disabled={isLoggingOut}
//             className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-60"
//           >
//             {isLoggingOut ? <Loader2 className="animate-spin" size={16} /> : <LogOut size={16} />}
//             Log out
//           </button>
//         </div>
//       </header>

//       <div className="min-h-[80vh] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 pb-16">

//         {/* Greeting */}
//         <div className="px-5 mt-24">
//           <p className="text-xl font-black text-slate-800">
//             {greetingHour()}, {user?.name?.split(" ")[0] || "there"}
//           </p>
//           <p className="text-sm text-slate-500 font-medium mt-1">{dateStr}</p>
//         </div>

//         {/* Quick Access Modules */}
//         <div className="px-5 mt-8 lg:mt-auto">
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-fit m-auto">
//             {allowedModules.map((mod) => {
//               const c = colorMap[mod.color] || colorMap.slate;
//               const Icon = mod.icon;
//               return (
//                 <button
//                   key={mod.path}
//                   type="button"
//                   onClick={() => router.push(mod.path)}
//                   className={`group flex flex-col items-start gap-4 p-6 bg-white border ${c.border} rounded-[24px] shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all text-left`}
//                 >
//                   <div className={`p-3 ${c.bg} ${c.text} rounded-xl`}>
//                     <Icon size={22} />
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-sm font-black text-slate-800 group-hover:text-brand-primary transition-colors">{mod.label}</p>
//                     <p className="text-[10px] text-slate-400 font-medium mt-0.5">{mod.description}</p>
//                   </div>
//                   <ArrowRight size={14} className="text-slate-300 group-hover:text-brand-active transition-colors self-end" />
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//       </div>

//       {/* Footer tagline */}
//       <footer className="text-center px-10">
//         <p className="mx-auto">© {currentYear} Gracespring Hospitals.</p>
//         <p className="mx-auto">All Rights Reserved.</p>
//       </footer>
//     </>
//   );
// };

// export default Dashboard;
