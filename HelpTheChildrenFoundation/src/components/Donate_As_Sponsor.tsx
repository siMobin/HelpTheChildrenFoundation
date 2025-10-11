"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

const PAYMENT_METHODS = [
  {
    value: "bkash_recurring",
    label: "bKash",
    img: "/bkash.svg",
  },
];

async function fetchDTMDetails(sponsor_no: string) {
  const url = `http://localhost:8000/api/sponsor/search?sponsor_no=${sponsor_no}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json, text/plain, */*",
    },
    method: "GET",
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Sponsor not found.");
    }
    throw new Error("Failed to fetch sponsor details.");
  }

  const data = await response.json();

  return {
    fullName: data.fullName || data.name || "",
    mobile: data.mobile || "",
    dueAmount: data.panding ?? 0,
    advanceAmount: data.advance ?? 0,
    amount: data.amount ?? 300,
  };
}

function LoaderSpinner() {
  return (
    <svg className="animate-spin h-6 w-6 text-white inline-block ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
  );
}

function DonateAsSponsor() {
  const searchParams = useSearchParams();
  const [sponsor_no, setsponsor_no] = useState("");
  const [dtmDetails, setDtmDetails] = useState<null | {
    fullName: string;
    mobile: string;
    dueAmount: number;
    advanceAmount: number;
    amount?: number;
  }>(null);
  const [fetching, setFetching] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [DEFAULT_MONTHLY_AMOUNT, setDEFAULT_MONTHLY_AMOUNT] = useState(300);
  const [months, setMonths] = useState(1);
  const [otherAmount, setOtherAmount] = useState("");

  const [paymentPurpose, setPaymentPurpose] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bkash_recurring");
  const [monthsError, setMonthsError] = useState<string | null>(null);
  const [otherAmountError, setOtherAmountError] = useState<string | null>(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const monthlyTotal = DEFAULT_MONTHLY_AMOUNT * Number(months);
  const totalAmount = monthlyTotal + (Number(otherAmount) || 0);

  const handleFetchDTM = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setFetchError(null);
    setDtmDetails(null);
    if (!sponsor_no.trim()) {
      setFetchError("Invalid Sponsor ID");
      return;
    }
    setFetching(true);
    try {
      const details = await fetchDTMDetails(sponsor_no.trim());
      setDtmDetails(details);
      setDEFAULT_MONTHLY_AMOUNT(details.amount || 300);
      if (details && details.dueAmount && Number(details.dueAmount) > 0) {
        const calculatedMonths = Math.ceil(Number(details.dueAmount) / (details.amount || DEFAULT_MONTHLY_AMOUNT));
        setMonths(calculatedMonths > 0 ? calculatedMonths : 1);
      }
    } catch (err) {
      console.error("Fetch DTM error:", err);
      setFetchError("Failed to fetch sponsor details.");
    } finally {
      setFetching(false);
    }
  };

  const handleMonthsChange = (delta: number) => {
    setMonths(prev => {
      let next = prev + delta;
      if (next < 0) next = 0;
      return next;
    });
  };

  const handleMonthsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (isNaN(value)) value = 0;
    if (value < 0) value = 0;
    setMonths(value);
  };

  const handleOtherAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherAmount(e.target.value.replace(/[^0-9]/g, ""));
  };

  const handlePaymentPurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentPurpose(e.target.value);
  };

  const validateForm = () => {
    let valid = true;
    setMonthsError(null);
    setOtherAmountError(null);

    if (months === 0) {
      if (!otherAmount || Number(otherAmount) <= 0) {
        setOtherAmountError("Other amount is required.");
        valid = false;
      }
    } else {
      if (months < 1) {
        setMonthsError("Monthly amount is required.");
        valid = false;
      }
    }
    if (totalAmount <= 0) {
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError(null);
    if (!dtmDetails) return;
    if (!validateForm()) return;

    setPaymentLoading(true);

    const formData = new FormData();
    formData.append("amount", totalAmount.toString());
    formData.append("sponsor_no", sponsor_no.trim());
    formData.append("full_name", dtmDetails.fullName || "");
    formData.append("mobile", dtmDetails.mobile || "");
    formData.append("description", paymentPurpose || "Sponsor donation");

    try {
      const response = await fetch("https://app.yfbd.org/api/Payment/pay", {
        method: "POST",
        body: formData,
        headers: {
          accept: "*/*",
        },
      });

      if (!response.ok) {
        setPaymentError("Payment failed.");
        setPaymentLoading(false);
        return;
      }

      const data = await response.json();

      if (data && data.bkashURL) {
        window.location.href = data.bkashURL;
      } else {
        setPaymentError("Payment initiation failed.");
        setPaymentLoading(false);
      }
    } catch (error: any) {
      setPaymentError("Payment failed.");
      console.error("Payment error:", error);
      setPaymentLoading(false);
    }
  };

  useEffect(() => {
    const idParam = searchParams.get("id");
    if (idParam && !dtmDetails) {
      setsponsor_no(idParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const idParam = searchParams.get("id");
    if (idParam && sponsor_no === idParam && !dtmDetails && !fetching) {
      handleFetchDTM();
    }
  }, [sponsor_no, searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="flex items-center justify-center w-full">
        <section className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 p-0" style={{ fontFamily: "UbuntuSans, Bornomala, Bangla314, sans-serif" }}>
          {!dtmDetails && (
            <form autoComplete="off" noValidate className="px-8 pt-8 pb-4 space-y-4" onSubmit={handleFetchDTM}>
              <label className="block text-base font-semibold text-gray-700 mb-1">
                Sponsor ID <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex gap-2">
                <input type="text" value={sponsor_no} onChange={e => setsponsor_no(e.target.value.replace(/[^0-9a-zA-Z]/g, ""))} placeholder="Enter Sponsor ID" className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent text-base" required />
                <Button type="submit" disabled={fetching || !sponsor_no}>
                  {fetching ? (
                    <>
                      <span>Fetching...</span>
                      <LoaderSpinner />
                    </>
                  ) : (
                    "Fetch"
                  )}
                </Button>
              </div>
              {fetchError && <p className="text-red-500 text-sm mt-1">{fetchError}</p>}
              <div className="text-center pt-2">
                <Link href="/recover-dtm" className="text-sm text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors">
                  Forgot Sponsor ID?
                </Link>
              </div>
            </form>
          )}

          {dtmDetails && (
            <form autoComplete="off" noValidate className="px-8 py-8 space-y-6" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-primary">Sponsor Details</div>
                <div className="text-sm text-gray-500">
                  <span>Sponsor ID: </span>
                  <span className="font-semibold text-accent">{sponsor_no || "Not set"}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-base">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Full Name</label>
                  <input type="text" value={dtmDetails.fullName} disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100" />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Mobile</label>
                  <input type="text" value={dtmDetails.mobile} disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100" />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Due Amount</label>
                  <input type="text" value={dtmDetails.dueAmount} disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100" />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Advance Amount</label>
                  <input type="text" value={dtmDetails.advanceAmount} disabled className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100" />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Monthly Amount</label>
                  <div className="flex items-center gap-2">
                    <Button type="button" onClick={() => handleMonthsChange(-1)} className="">
                      -
                    </Button>
                    <input type="number" min={0} value={months} onChange={handleMonthsInputChange} className="w-16 text-center border-t border-b border-accent" />
                    <Button type="button" onClick={() => handleMonthsChange(1)} className="px-3 py-2 border border-accent rounded-r-lg">
                      +
                    </Button>
                  </div>
                  {monthsError && <p className="text-red-500 text-sm">{monthsError}</p>}
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Amount</label>
                  <input type="text" value={monthlyTotal} readOnly disabled className="w-full px-4 py-3 border border-accent" />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Other Amount</label>
                  <input type="number" min={0} value={otherAmount} onChange={handleOtherAmountChange} placeholder="0" className="w-full px-4 py-3 border border-accent rounded-lg " />
                  {otherAmountError && <p className="text-red-500 text-sm">{otherAmountError}</p>}
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Purpose of Payment</label>
                  <input type="text" value={paymentPurpose} onChange={handlePaymentPurposeChange} placeholder="e.g., Zakat, Sadaqah" className="w-full px-4 py-3 border border-accent rounded-lg" />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">Total Amount</label>
                  <input type="text" value={totalAmount} readOnly disabled className="w-full px-4 py-3 border border-accent rounded-lg  font-bold" />
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-2">Payment Method</label>
                <div className="flex gap-4">
                  {PAYMENT_METHODS.map(method => (
                    <label key={method.value} className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer ${paymentMethod === method.value ? " border border-accent" : "bg-white border border-gray-200"}`}>
                      <input type="radio" name="gateway" value={method.value} checked={paymentMethod === method.value} onChange={() => setPaymentMethod(method.value)} />
                      <img src={method.img} alt={method.label} className="h-6" />
                      <span>{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full " disabled={paymentLoading || totalAmount <= 0}>
                {paymentLoading ? (
                  <>
                    <span>Proceeding to Payment...</span>
                    <LoaderSpinner />
                  </>
                ) : (
                  "Proceed to Payment"
                )}
              </Button>
              {paymentError && <p className="text-red-500 text-center mt-2">{paymentError}</p>}
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

export default DonateAsSponsor;
