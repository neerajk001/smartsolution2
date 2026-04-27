"use client";

import { HomeLoanFields } from "@/lib/formTypes";
import UnifiedLeadForm from "./UnifiedLeadForm";

interface HomeLoanFormProps {
  onSubmit: (data: HomeLoanFields) => void;
  onClose: () => void;
}

export default function HomeLoanForm({ onSubmit, onClose }: HomeLoanFormProps) {
  return <UnifiedLeadForm onClose={onClose} onSubmit={(data) => onSubmit(data as HomeLoanFields)} />;
}
