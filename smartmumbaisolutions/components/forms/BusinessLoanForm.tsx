"use client";

import { BusinessLoanFields } from "@/lib/formTypes";
import UnifiedLeadForm from "./UnifiedLeadForm";

interface BusinessLoanFormProps {
  onSubmit: (data: BusinessLoanFields) => void;
  onClose: () => void;
}

export default function BusinessLoanForm({ onSubmit, onClose }: BusinessLoanFormProps) {
  return <UnifiedLeadForm onClose={onClose} onSubmit={(data) => onSubmit(data as BusinessLoanFields)} />;
}
