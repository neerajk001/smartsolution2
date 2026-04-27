"use client";

import UnifiedLeadForm from "./UnifiedLeadForm";

interface InsuranceFormProps {
  type: string;
  onSubmit: (data: any) => void;
  onClose: () => void;
}

export default function InsuranceForm({ type: _type, onSubmit, onClose }: InsuranceFormProps) {
  return <UnifiedLeadForm onClose={onClose} onSubmit={onSubmit} />;
}
