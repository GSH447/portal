"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { cn } from "../../../lib/utils";
import { API_BASE_URL_HIS } from "../../../lib/api";
import {
  FlaskConical,
  LogOut,
  Loader2,
  Search,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// interface ParameterResult {
//   id: number;
//   parameter_name: string;
//   result_value: string;
//   unit: string | null;
//   value_type: string;
//   ref_low: number | null;
//   ref_high: number | null;
//   flagged: "NORMAL" | "H" | "L" | "HH" | "LL" | "*" | "D" | "A";
//   result_comment: string | null;
// }

// interface LabReport {
//   reference_no: string;
//   test_name: string;
//   sample_collected_at: string;
//   released_at: string;
//   parameters: ParameterResult[];
// }

const Lab = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const [user, setUser] = useState(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Results State
  const [labReports, setLabReports] = useState([]);
  const [isLoadingResults, setIsLoadingResults] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedReport, setExpandedReport] = useState(null);

  const fetchMe = async () => {
    try {
      const res = await fetch(`${API_BASE_URL_HIS}/auth/patient/me`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Not authenticated");
      const data = await res.json();
      return data?.data ?? data?.user ?? null;
    } catch {
      return null;
    }
  };

  const fetchReleasedLabResults = async (search = "") => {
    setIsLoadingResults(true);
    try {
      const queryParam = search ? `?search=${encodeURIComponent(search)}` : "";
      const res = await fetch(`${API_BASE_URL_HIS}/lab/patient/results${queryParam}`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (res.ok) {
        const json = await res.json();
        const data = json?.data ?? json?.results ?? [];
        setLabReports(data);
        // Expand the first report by default if available
        if (data.length > 0 && !expandedReport) {
          setExpandedReport(data[0].reference_no);
        }
      }
    } catch (err) {
      console.error("Failed to fetch lab results:", err);
    } finally {
      setIsLoadingResults(false);
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
      fetchReleasedLabResults();
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

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch(`${API_BASE_URL_HIS}/auth/patient/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      sessionStorage.clear();
      window.location.replace("/patient-portal");
    }
  };

  const toggleReportExpand = (refNo) => {
    setExpandedReport((prev) => (prev === refNo ? null : refNo));
  };

  const renderFlagBadge = (flag) => {
    switch (flag) {
      case "H":
      case "HH":
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800">High</span>;
      case "L":
      case "LL":
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-800">Low</span>;
      case "*":
      case "A":
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-800">Abnormal</span>;
      default:
        return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700">Normal</span>;
    }
  };

  if (isCheckingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-[#2A157C]" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 flex items-center justify-between py-2 min-h-16 h-auto",
          isScrolled ? "bg-[#2A157c] shadow-md px-4 sm:px-6 xl:px-12" : "bg-[#2A157c] px-4 sm:px-6 xl:px-12"
        )}
      >
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/logo/siteLogo-nobg.png"
              width={180}
              height={60}
              alt="Gracespring Hospitals"
              className="w-32 sm:w-40 h-auto object-contain"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-white">{user?.name || "Patient"}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
              {user?.mrn ? `MRN: ${user.mrn}` : "Patient Portal"}
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-bold text-red-600 transition hover:bg-red-100 disabled:opacity-60"
          >
            {isLoggingOut ? <Loader2 className="animate-spin" size={14} /> : <LogOut size={14} />}
            Log out
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-24 pb-16">
        {/* Title Banner */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <FlaskConical size={26} />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-800">My Laboratory Results</h1>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                View verified and official released lab test reports.
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search test name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                fetchReleasedLabResults(e.target.value);
              }}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A157c]/20 focus:border-[#2A157c]"
            />
          </div>
        </div>

        {/* Results List */}
        {isLoadingResults ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-slate-200/80">
            <Loader2 className="animate-spin text-[#2A157C] mb-2" size={32} />
            <p className="text-xs text-slate-500 font-medium">Fetching released lab reports...</p>
          </div>
        ) : labReports.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-slate-200/80 text-center px-4">
            <FileText className="text-slate-300 mb-3" size={48} />
            <h3 className="text-sm font-bold text-slate-700">No Released Results Available</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Any pending test results will appear here as soon as they are reviewed and officially released by the laboratory team.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {labReports.map((report) => {
              const isExpanded = expandedReport === report.reference_no;
              return (
                <div
                  key={report.reference_no}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                >
                  {/* Header Row */}
                  <div
                    onClick={() => toggleReportExpand(report.reference_no)}
                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-slate-800">{report.test_name}</h2>
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1">
                          <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                            Ref: {report.reference_no}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            Released: {new Date(report.released_at).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full">
                        Released
                      </span>
                      {isExpanded ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
                    </div>
                  </div>

                  {/* Expanded Parameters Table */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50/50 p-5">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[10px]">
                              <th className="pb-2 pl-2">Test Parameter</th>
                              <th className="pb-2">Result Value</th>
                              <th className="pb-2">Reference Range</th>
                              <th className="pb-2 text-right pr-2">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200/60">
                            {report.parameters.map((param) => (
                              <tr key={param.id} className="hover:bg-white/60">
                                <td className="py-3 pl-2 font-medium text-slate-800">{param.parameter_name}</td>
                                <td className="py-3 font-bold text-slate-900">
                                  {param.result_value} <span className="text-[11px] font-normal text-slate-500">{param.unit || ""}</span>
                                </td>
                                <td className="py-3 text-slate-500">
                                  {param.ref_low !== null && param.ref_high !== null
                                    ? `${param.ref_low} - ${param.ref_high} ${param.unit || ""}`
                                    : "N/A"}
                                </td>
                                <td className="py-3 text-right pr-2">{renderFlagBadge(param.flagged)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Comments if present */}
                      {report.parameters.some((p) => p.result_comment) && (
                        <div className="mt-4 p-3 bg-white border border-slate-200 rounded-xl">
                          <p className="text-[11px] font-bold text-slate-700">Pathologist Comments:</p>
                          {report.parameters.map(
                            (p) =>
                              p.result_comment && (
                                <p key={p.id} className="text-xs text-slate-600 mt-0.5">
                                  <span className="font-semibold">{p.parameter_name}:</span> {p.result_comment}
                                </p>
                              )
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-4 text-center text-xs text-slate-500">
        <p>© {currentYear} Gracespring Hospitals. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Lab;








// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

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

// const Lab = () => {
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

// export default Lab;

