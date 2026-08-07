"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { cn } from "../../../lib/utils";
import { API_BASE_URL_HIS } from "../../../lib/api";
import {
  CreditCard,
  LogOut,
  Loader2,
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  FileText,
  Calendar,
  ChevronDown,
  ChevronUp,
  Wallet,
  Receipt,
  ArrowUpRight,
} from "lucide-react";

const Billing = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const [user, setUser] = useState(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Billing State
  const [records, setRecords] = useState([]);
  const [summary, setSummary] = useState(null);
  const [isLoadingResults, setIsLoadingResults] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("ALL");
  const [expandedRecordId, setExpandedRecordId] = useState(null);

  // Record Details Cache (for line items)
  const [detailsCache, setDetailsCache] = useState({});
  const [loadingDetailsId, setLoadingDetailsId] = useState(null);

  // Currency Formatter Helper
  const formatMoney = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(amount || 0);
  };

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

  const fetchBillingHistory = async (search = "", type = filterType) => {
    setIsLoadingResults(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (type && type !== "ALL") params.append("type", type);

      const queryStr = params.toString() ? `?${params.toString()}` : "";
      const res = await fetch(`${API_BASE_URL_HIS}/billing/invoices${queryStr}`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      // Redirect if session expired / unauthorized
      if (res.status === 401) {
        router.replace("/patient-portal");
        return;
      }

      if (res.ok) {
        const json = await res.json();
        const historyData = json?.data?.history ?? json?.history ?? [];
        const summaryData = json?.data?.summary ?? json?.summary ?? null;

        setRecords(historyData);
        setSummary(summaryData);

        // Expand first record by default if available
        if (historyData.length > 0 && !expandedRecordId) {
          const first = historyData[0];
          setExpandedRecordId(first.id);
          fetchRecordDetails(first.id, first.type);
        }
      }
    } catch (err) {
      console.error("Failed to fetch billing history:", err);
    } finally {
      setIsLoadingResults(false);
    }
  };

  const fetchRecordDetails = async (id, type) => {
    const cacheKey = `${type}_${id}`;
    if (detailsCache[cacheKey]) return; // Already loaded

    setLoadingDetailsId(id);
    try {
      const res = await fetch(`${API_BASE_URL_HIS}/billing/invoices/show?id=${id}&type=${type}`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (res.status === 401) {
        router.replace("/patient-portal");
        return;
      }

      if (res.ok) {
        const json = await res.json();
        const lineItems = json?.data?.line_items ?? [];
        setDetailsCache((prev) => ({ ...prev, [cacheKey]: lineItems }));
      }
    } catch (err) {
      console.error("Failed to fetch record details:", err);
    } finally {
      setLoadingDetailsId(null);
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
      fetchBillingHistory();
    })();

    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", onScroll);
    };
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

  const toggleRecordExpand = (record) => {
    if (expandedRecordId === record.id) {
      setExpandedRecordId(null);
    } else {
      setExpandedRecordId(record.id);
      fetchRecordDetails(record.id, record.type);
    }
  };

  const renderStatusBadge = (status, type) => {
    if (type === "ADVANCE") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
          Deposit
        </span>
      );
    }

    switch (status) {
      case "PAID":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
            <CheckCircle2 size={12} /> Paid
          </span>
        );
      case "PARTIAL":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
            <Clock size={12} /> Partial
          </span>
        );
      case "CANCELLED":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
            Cancelled
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
            <AlertCircle size={12} /> Unpaid
          </span>
        );
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
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <CreditCard size={26} />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-800">My Billing & Receipts</h1>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Review your statements, advance deposits, and outstanding invoices.
              </p>
            </div>
          </div>

          {/* Controls: Filter & Search */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {/* Filter Selector */}
            <div className="relative w-full sm:w-auto">
              <select
                value={filterType}
                onChange={(e) => {
                  const val = e.target.value;
                  setFilterType(val);
                  fetchBillingHistory(searchQuery, val);
                }}
                className="w-full sm:w-auto px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A157c]/20 text-slate-700"
              >
                <option value="ALL">All Records</option>
                <option value="INVOICE">Invoices Only</option>
                <option value="ADVANCE">Deposits / Advance</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search reference or doctor..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  fetchBillingHistory(e.target.value, filterType);
                }}
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A157c]/20 focus:border-[#2A157c]"
              />
            </div>
          </div>
        </div>

        {/* Financial Summary Cards */}
        {summary && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Net Due</span>
              <p className="text-lg font-black text-red-600 mt-1">{formatMoney(summary.amount_to_pay)}</p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Outstanding</span>
              <p className="text-lg font-black text-slate-800 mt-1">{formatMoney(summary.total_outstanding)}</p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Deposit Balance</span>
              <p className="text-lg font-black text-emerald-600 mt-1">{formatMoney(summary.deposit_balance)}</p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Unpaid Invoices</span>
              <p className="text-lg font-black text-indigo-900 mt-1">{summary.unpaid_invoices} Invoices</p>
            </div>
          </div>
        )}

        {/* Billing History List */}
        {isLoadingResults ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-slate-200/80">
            <Loader2 className="animate-spin text-[#2A157C] mb-2" size={32} />
            <p className="text-xs text-slate-500 font-medium">Fetching billing records...</p>
          </div>
        ) : records.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-slate-200/80 text-center px-4">
            <FileText className="text-slate-300 mb-3" size={48} />
            <h3 className="text-sm font-bold text-slate-700">No Billing Records Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              There are no statements or payment receipts available matching your search criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {records.map((record) => {
              const isExpanded = expandedRecordId === record.id;
              const cacheKey = `${record.type}_${record.id}`;
              const lineItems = detailsCache[cacheKey] || [];
              const isLoadingItems = loadingDetailsId === record.id;

              return (
                <div
                  key={`${record.type}_${record.id}`}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                >
                  {/* Header Row */}
                  <div
                    onClick={() => toggleRecordExpand(record)}
                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={cn(
                          "p-2.5 rounded-lg",
                          record.type === "ADVANCE" ? "bg-blue-50 text-blue-600" : "bg-indigo-50 text-indigo-600"
                        )}
                      >
                        {record.type === "ADVANCE" ? <Wallet size={20} /> : <Receipt size={20} />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-sm font-bold text-slate-800">{record.reference}</h2>
                          <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded font-mono bg-slate-100 text-slate-600">
                            {record.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {new Date(record.date).toLocaleDateString("en-NG", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          {record.doctor_name && <span>• {record.doctor_name}</span>}
                          {record.encounter && (
                            <span>
                              • {record.encounter.type} ({record.encounter.number})
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold text-slate-800">{formatMoney(record.financials.amount)}</p>
                        {record.financials.outstanding > 0 && (
                          <p className="text-[10px] font-semibold text-red-600">
                            Due: {formatMoney(record.financials.outstanding)}
                          </p>
                        )}
                      </div>

                      <div className="hidden sm:block">{renderStatusBadge(record.status, record.type)}</div>

                      {isExpanded ? (
                        <ChevronUp size={18} className="text-slate-400" />
                      ) : (
                        <ChevronDown size={18} className="text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Breakdown Section */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50/50 p-5">
                      <div className="sm:hidden flex items-center justify-between pb-4 mb-4 border-b border-slate-200/60">
                        <div>
                          <p className="text-xs text-slate-500">Total Amount</p>
                          <p className="text-sm font-bold text-slate-800">
                            {formatMoney(record.financials.amount)}
                          </p>
                        </div>
                        <div>{renderStatusBadge(record.status, record.type)}</div>
                      </div>

                      <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                        Statement Itemization
                      </h4>

                      {isLoadingItems ? (
                        <div className="flex items-center gap-2 py-4 text-xs text-slate-500">
                          <Loader2 className="animate-spin text-indigo-600" size={16} /> Loading itemized details...
                        </div>
                      ) : lineItems.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead>
                              <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[10px]">
                                <th className="pb-2 pl-2">Description</th>
                                <th className="pb-2 text-center">Qty</th>
                                <th className="pb-2 text-right">Unit Price</th>
                                <th className="pb-2 text-right pr-2">Total</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200/60">
                              {lineItems.map((item, idx) => (
                                <tr key={idx} className="hover:bg-white/60">
                                  <td className="py-2.5 pl-2 font-medium text-slate-800">{item.description}</td>
                                  <td className="py-2.5 text-center text-slate-600">{item.quantity}</td>
                                  <td className="py-2.5 text-right text-slate-600">{formatMoney(item.unit_price)}</td>
                                  <td className="py-2.5 text-right pr-2 font-bold text-slate-900">
                                    {formatMoney(item.line_total)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-500 italic py-2">
                          {record.type === "ADVANCE"
                            ? "Advance deposit credited to patient wallet."
                            : "No specific itemized breakdown recorded."}
                        </p>
                      )}

                      {/* Financial Totals & Action */}
                      <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-6 text-xs text-slate-600">
                          <div>
                            <span className="text-slate-400">Total:</span>{" "}
                            <span className="font-bold text-slate-800">{formatMoney(record.financials.amount)}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Paid:</span>{" "}
                            <span className="font-bold text-emerald-700">{formatMoney(record.financials.paid)}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Outstanding:</span>{" "}
                            <span className="font-bold text-red-600">
                              {formatMoney(record.financials.outstanding)}
                            </span>
                          </div>
                        </div>

                        {record.financials.can_pay_now && (
                          <button
                            type="button"
                            onClick={() => alert(`Initiating payment for ${record.reference}`)}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition shadow-sm"
                          >
                            Pay Outstanding Balance <ArrowUpRight size={14} />
                          </button>
                        )}
                      </div>
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

export default Billing;