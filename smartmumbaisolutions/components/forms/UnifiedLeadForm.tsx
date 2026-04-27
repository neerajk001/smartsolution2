"use client";

import { useState } from "react";
import { User, Phone, Briefcase, Banknote } from "lucide-react";

export interface UnifiedLeadFormData {
  fullName: string;
  mobileNumber: string;
  employmentType: "salaried" | "self-employed" | "";
  annualIncome: string;
}

interface UnifiedLeadFormProps {
  onSubmit: (data: UnifiedLeadFormData) => void;
  onClose: () => void;
}

export default function UnifiedLeadForm({ onSubmit, onClose }: UnifiedLeadFormProps) {
  const [formData, setFormData] = useState<UnifiedLeadFormData>({
    fullName: "",
    mobileNumber: "",
    employmentType: "",
    annualIncome: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof UnifiedLeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Customer name is required";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be exactly 10 digits";
    }

    if (!formData.employmentType) {
      newErrors.employmentType = "Employment type is required";
    }

    if (!formData.annualIncome.trim()) {
      newErrors.annualIncome = "Annual income is required";
    } else if (!/^\d+$/.test(formData.annualIncome) || Number(formData.annualIncome) <= 0) {
      newErrors.annualIncome = "Annual income must be a valid amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-2 md:mx-0">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)]">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50" />

        <div className="relative p-6 md:p-8">
          <div className="mb-6 md:mb-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-blue-700 font-semibold">Quick Application</p>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-2">Share Your Basic Details</h3>
            <p className="text-sm text-slate-500 mt-1">Fill in these 4 details and our team will contact you shortly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={`w-full h-12 pl-11 pr-4 rounded-xl border bg-slate-50/80 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                    errors.fullName ? "border-red-400" : "border-slate-200"
                  }`}
                  placeholder="Enter customer name"
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-xs font-medium">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  maxLength={10}
                  className={`w-full h-12 pl-11 pr-4 rounded-xl border bg-slate-50/80 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                    errors.mobileNumber ? "border-red-400" : "border-slate-200"
                  }`}
                  placeholder="Enter 10-digit mobile no"
                />
              </div>
              {errors.mobileNumber && <p className="text-red-500 text-xs font-medium">{errors.mobileNumber}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Employment Type <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <select
                  value={formData.employmentType}
                  onChange={(e) => handleChange("employmentType", e.target.value)}
                  className={`w-full h-12 pl-11 pr-4 rounded-xl border bg-slate-50/80 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-slate-900 appearance-none ${
                    errors.employmentType ? "border-red-400" : "border-slate-200"
                  }`}
                >
                  <option value="">Select employment type</option>
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self-Employed</option>
                </select>
              </div>
              {errors.employmentType && <p className="text-red-500 text-xs font-medium">{errors.employmentType}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Annual Income <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <Banknote className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input
                  type="text"
                  value={formData.annualIncome}
                  onChange={(e) => handleChange("annualIncome", e.target.value.replace(/\D/g, ""))}
                  className={`w-full h-12 pl-11 pr-4 rounded-xl border bg-slate-50/80 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                    errors.annualIncome ? "border-red-400" : "border-slate-200"
                  }`}
                  placeholder="Enter annual income"
                />
              </div>
              {errors.annualIncome && <p className="text-red-500 text-xs font-medium">{errors.annualIncome}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <button
              type="button"
              onClick={onClose}
              className="sm:flex-1 px-6 py-3.5 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="sm:flex-1 px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-lg shadow-blue-600/25"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}