"use client";

import { useState } from "react";
import Image from "next/image";
import DonationAccordion from "../DonationAccordion";
import axiosInstance from "../../../lib/axios";
import { ChevronDown } from "lucide-react";


// export default function StepPayment({ data, onNext }) {
export default function StepPayment({ 
  data,
  reference
 }) {
  const { donation, basic, address } = data;
  const [selectedMethod, setSelectedMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [openNgnAccount, setOpenNgnAccount] = useState(false);
  const [openEuroAccount, setOpenEuroAccount] = useState(false);
  const [openUsdAccount, setOpenUsdAccount] = useState(false);
  const [openGbpAccount, setOpenGbpAccount] = useState(false);

  const paymentMethods = [
    
    {
      id: "manual",
      label: "Direct Bank Transfer",
      logo: "/assets/icons/Zenith-Bank-logo.png", // add any bank icon
    },
    
    {
      id: "paystack",
      label: "Paystack",
      logo: "/assets/icons/paystack-nobg.png", // add your logo path
    },
    {
      id: "flutterwave",
      label: "Flutterwave",
      logo: "/assets/icons/flutterwave-nobg.png", // add your logo path
    },
    // { id: "stripe", label: "Stripe", logo: "/images/payments/stripe.png" }
  ];

  const manualAccount = {

    ngn:{

      bankName: "Zenith Bank(NGN)",
      accountName: "Gracespring Health Foundation",
      accountNumber: "1228328123",
      referenceNote: reference,
      
    },

    usd: {

      bankName: "Zenith Bank(USD)",
      accountName: "Gracespring Health Foundation",
      accountNumber: "5075747805",
      referenceNote: reference,
      
    },
    

    eur: {

      bankName: "Zenith Bank(EUR)",
      accountName: "Gracespring Health Foundation",
      accountNumber: "5081450717",
      referenceNote: reference,
      
    },
    

    gbp: {

      bankName: "Zenith Bank(GBP)",
      accountName: "Gracespring Health Foundation",
      accountNumber: "5061733472",
      referenceNote: reference,
      
    },
    
};


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  // const handleSelectGateway = async (gateway) => {
  //   setSelectedMethod(gateway);
  //   setLoading(true);

  //   try {
  //     const res = await axiosInstance.post("/donations/donate", {
  //       reference,
  //       gateway: gateway.toLowerCase(), // paystack | flutterwave
  //     });

  //     const paymentUrl = res.data?.data?.payment_url;

  //     if (!paymentUrl) {
  //       throw new Error("No payment URL returned");
  //     }

  //     //  Redirect immediately
  //     window.location.href = paymentUrl;

  //   } catch (err) {
  //     console.error(err);
  //     alert("Unable to initiate payment. Please try again.");
  //     setLoading(false);
  //   }
  // };


  const handleSelectGateway = async (gateway) => {
    setSelectedMethod(gateway);

    if (gateway === "manual") return; // stop redirect

    else if (gateway == "paystack" || gateway == "flutterwave") {
      return alert("Payment gateway currently not available. Please choose Zenith Bank Direct Transfer.");
    }

    setLoading(true);

    try {
      const res = await axiosInstance.post("/donations/donate", {
        reference,
        gateway: gateway.toLowerCase(),
      });

      const paymentUrl = res.data?.data?.payment_url;

      if (!paymentUrl) throw new Error("No payment URL returned");

      window.location.href = paymentUrl;
    } 
    
    catch (err) {
      console.error(err);
      alert("Unable to initiate payment. Please try again.");
      setLoading(false);
    }
  };




  // const handlePayment = () => {
  //   if (!selectedMethod) return alert("Please select a payment method");

  //   setLoading(true);

  //   // 🔑 Simulate payment API call
  //   setTimeout(() => {
  //     setLoading(false);
  //     alert(`Payment processed via ${selectedMethod}`);
  //     onNext(); // move to next step
  //   }, 1500);
  // };


  const handlePayment = async () => {
    if (!selectedMethod) return alert("Please select a payment method");

    setLoading(true);

    try {
        const payload = {
            donation,
            basic,
            address,
            gateway: selectedMethod.toLowerCase() // paystack/flutterwave
        };

        const response = await axiosInstance.post("/donations/initiate", payload);

        const { data: result } = response;

        if (result.status === "success") {
            alert(`Donation initiated! Reference: ${result.data.reference}`);
            console.log("Donation initiation successful:", result);
            // You can now proceed to the next step or handle the payment redirection
            // redirect to payment URL if you want to integrate Paystack/Flutterwave
            // window.location.href = result.data.payment_url;
        } 
        
        else {
            alert(result.message || "Something went wrong");
            console.log("Donation initiation failed:", result);
        }
    } 
    
    catch (err) {
        console.error(err);
        alert("Error sending donation data to backend");
    } 
    
    finally {
        setLoading(false);
    }
};

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">

      <h3 className="text-primary text-center font-bold tracking-wide">
        Payment Method   
      </h3>

      <div
        className=" flex flex-col-reverse"
      >

        {/* Payment Summary */}
        {/* <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"> */}
        <div>
          <h3 className="text-primary text-center font-bold tracking-wide mb-4">
            Review your donation
          </h3>
          {/* Trust copy */}
          <p className="text-xs text-gray-500 text-center mt-4">
            (Please review your information carefully.)
          </p>

          <div className="space-y-3">
            {/* 1. Donation Amount */}
            <DonationAccordion title="Donation Amount">
              <p>
                <strong>Amount:</strong> ₦{donation?.amount?.toLocaleString()}
              </p>
              <p>
                <strong>Frequency:</strong>{" "}
                {donation?.frequency === "monthly" ? "Monthly" : "One-time"}
              </p>
              {donation?.honouree && (
                <p>
                  <strong>Dedicated to:</strong> {donation.honouree}
                </p>
              )}
            </DonationAccordion>

            {/* 2. Basic Information */}
            <DonationAccordion title="Basic Information">
              <p>
                <strong>Name:</strong>{" "}
                {basic?.title} {basic?.firstName} {basic?.lastName}
              </p>
              <p>
                <strong>Email:</strong> {basic?.email}
              </p>
              <p>
                <strong>Phone:</strong> {basic?.countryCode}
                {basic?.phone}
              </p>
              <p>
                <strong>Donor Type:</strong>{" "}
                {basic?.donateAsOrganisation ? "Organisation" : "Individual"}
              </p>
            </DonationAccordion>

            {/* 3. Address */}
            <DonationAccordion title="Address">
              <p>{address?.street}</p>
              {address?.apartment && <p>{address.apartment}</p>}
              <p>
                {address?.city}, {address?.state}
              </p>
              <p>
                {address?.country} {address?.zip}
              </p>
            </DonationAccordion>
          </div>


        </div>

        <div>
              {/* Payment Options */}
              <div className="flex flex-wrap gap-3 mb-6">





                {/* Manual Payment Panel */}
                {selectedMethod === "manual" && (
                  <div className="mt-4 border rounded-lg p-4 bg-gray-50 space-y-3">

                    <h4 className="font-semibold text-primary">
                      Bank Transfer Instructions
                    </h4>

                    <p className="text-sm text-gray-600">
                      Kindly make a transfer using the details below and include your
                      <strong> Reference</strong> in the narration.
                    </p>


                    <div className="border rounded-lg overflow-hidden bg-white">
                      {/* Header */}
                      <button
                        type="button"
                        onClick={() => setOpenUsdAccount(!openUsdAccount)}
                        className="w-full flex items-center justify-between py-3 text-left font-medium text-sm hover:bg-gray-50 transition"
                      >
                        <span>USD Account</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openUsdAccount ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Body */}
                      {openUsdAccount && (
                                                
                        <div className="grid gap-2 text-sm">

                          <div className="flex justify-between items-center">
                            <span><strong>Bank:</strong> {manualAccount.usd.bankName}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Account Name:</strong> {manualAccount.usd.accountName}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.usd.accountName)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Account Number:</strong> {manualAccount.usd.accountNumber}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.usd.accountNumber)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Reference:</strong> {manualAccount.usd.referenceNote}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.usd.referenceNote)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                        </div>

                      )}
                    </div>


                    <div className="border rounded-lg overflow-hidden bg-white">
                      {/* Header */}
                      <button
                        type="button"
                        onClick={() => setOpenEuroAccount(!openEuroAccount)}
                        className="w-full flex items-center justify-between py-3 text-left font-medium text-sm hover:bg-gray-50 transition"
                      >
                        <span>Euros Account</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openEuroAccount ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Body */}
                      {openEuroAccount && (
                        
                        <div className="grid gap-2 text-sm">

                          <div className="flex justify-between items-center">
                            <span><strong>Bank:</strong> {manualAccount.eur.bankName}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Account Name:</strong> {manualAccount.eur.accountName}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.eur.accountName)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Account Number:</strong> {manualAccount.eur.accountNumber}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.eur.accountNumber)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Reference:</strong> {manualAccount.eur.referenceNote}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.eur.referenceNote)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                        </div>

                      )}
                    </div>

                    <div className="border rounded-lg overflow-hidden bg-white">
                      {/* Header */}
                      <button
                        type="button"
                        onClick={() => setOpenNgnAccount(!openNgnAccount)}
                        className="w-full flex items-center justify-between py-3 text-left font-medium text-sm hover:bg-gray-50 transition"
                      >
                        <span>Naira Account</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openNgnAccount ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Body */}
                      {openNgnAccount && (
                        
                      <div className="grid gap-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span><strong>Bank:</strong> {manualAccount.ngn.bankName}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span><strong>Account Name:</strong> {manualAccount.ngn.accountName}</span>
                          <button
                            onClick={() => copyToClipboard(manualAccount.ngn.accountName)}
                            className="text-xs text-primary underline"
                          >
                            Copy
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <span><strong>Account Number:</strong> {manualAccount.ngn.accountNumber}</span>
                          <button
                            onClick={() => copyToClipboard(manualAccount.ngn.accountNumber)}
                            className="text-xs text-primary underline"
                          >
                            Copy
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <span><strong>Reference:</strong> {manualAccount.ngn.referenceNote}</span>
                          <button
                            onClick={() => copyToClipboard(manualAccount.ngn.referenceNote)}
                            className="text-xs text-primary underline"
                          >
                            Copy
                          </button>
                        </div>

                      </div>
                      )}
                    </div>

                    <div className="border rounded-lg overflow-hidden bg-white">
                      {/* Header */}
                      <button
                        type="button"
                        onClick={() => setOpenGbpAccount(!openGbpAccount)}
                        className="w-full flex items-center justify-between py-3 text-left font-medium text-sm hover:bg-gray-50 transition"
                      >
                        <span>GBP Account</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openGbpAccount ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Body */}
                      {openGbpAccount && (
                        
                        <div className="grid gap-2 text-sm">

                          <div className="flex justify-between items-center">
                            <span><strong>Bank:</strong> {manualAccount.gbp.bankName}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Account Name:</strong> {manualAccount.gbp.accountName}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.gbp.accountName)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Account Number:</strong> {manualAccount.gbp.accountNumber}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.gbp.accountNumber)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                          <div className="flex justify-between items-center">
                            <span><strong>Reference:</strong> {manualAccount.gbp.referenceNote}</span>
                            <button
                              onClick={() => copyToClipboard(manualAccount.gbp.referenceNote)}
                              className="text-xs text-primary underline"
                            >
                              Copy
                            </button>
                          </div>

                        </div>

                      )}
                    </div>
                                      
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-gray-700">
                      ⚠️ Your donation will be confirmed after payment verification.
                      Please keep your transfer receipt.
                    </div>

                  </div>
                )}

                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    disabled={loading}
                    onClick={() => handleSelectGateway(method.id)}
                    // className="w-full p-3 rounded-md border flex items-center justify-center gap-3"
                    className={`w-full p-3 rounded-md border flex items-center justify-center gap-3 transition
                      ${selectedMethod === method.label
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-black border-gray-300 hover:border-primary"}
                    `}
                  >
                    <Image src={method.logo} width={20} height={20} alt={method.label} />
                    <span>{method.label}</span>
                  </button>
                ))}


              </div>

              {/* Action */}
              {/* <button
                onClick={handlePayment}
                disabled={!selectedMethod || loading}
                className={`w-full p-3 rounded-md text-white font-medium transition
                  ${!selectedMethod || loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-black"}
                `}
              >
                {loading ? "Processing..." : `Pay with ${selectedMethod || "…"}`}
              </button> */}
        </div>

      </div>


      <p className="text-sm text-gray-500 mt-4 text-center">
        Your payment is secure and encrypted. We do not store your card details.
      </p>
    </div>
  );
}

















