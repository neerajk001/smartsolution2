"use client";

import { EducationLoanFields } from "@/lib/formTypes";
import UnifiedLeadForm from "./UnifiedLeadForm";

interface EducationLoanFormProps {
  onSubmit: (data: EducationLoanFields) => void;
  onClose: () => void;
}

export default function EducationLoanForm({ onSubmit, onClose }: EducationLoanFormProps) {
  return <UnifiedLeadForm onClose={onClose} onSubmit={(data) => onSubmit(data as EducationLoanFields)} />;
}
