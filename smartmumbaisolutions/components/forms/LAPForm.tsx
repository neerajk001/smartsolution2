"use client";

import { LAPFields } from "@/lib/formTypes";
import UnifiedLeadForm from "./UnifiedLeadForm";

interface LAPFormProps {
  onSubmit: (data: LAPFields) => void;
  onClose: () => void;
}

export default function LAPForm({ onSubmit, onClose }: LAPFormProps) {
  return <UnifiedLeadForm onClose={onClose} onSubmit={(data) => onSubmit(data as LAPFields)} />;
}
