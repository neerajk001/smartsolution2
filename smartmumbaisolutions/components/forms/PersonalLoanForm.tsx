"use client";

import { PersonalLoanFields } from "@/lib/formTypes";
import UnifiedLeadForm from "./UnifiedLeadForm";

interface PersonalLoanFormProps {
  onSubmit: (data: PersonalLoanFields) => void;
  onClose: () => void;
}

export default function PersonalLoanForm({ onSubmit, onClose }: PersonalLoanFormProps) {
  return <UnifiedLeadForm onClose={onClose} onSubmit={(data) => onSubmit(data as PersonalLoanFields)} />;
}
