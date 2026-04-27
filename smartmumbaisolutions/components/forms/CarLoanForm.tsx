"use client";

import { CarLoanFields } from "@/lib/formTypes";
import UnifiedLeadForm from "./UnifiedLeadForm";

interface CarLoanFormProps {
  onSubmit: (data: CarLoanFields) => void;
  onClose: () => void;
}

export default function CarLoanForm({ onSubmit, onClose }: CarLoanFormProps) {
  return <UnifiedLeadForm onClose={onClose} onSubmit={(data) => onSubmit(data as CarLoanFields)} />;
}
