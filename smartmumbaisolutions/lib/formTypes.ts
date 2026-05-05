// Loan form (current UX): keep loan applications to the 4 basic fields.
export interface CommonLoanFields {
  fullName: string;
  mobileNumber: string;
  employmentType: "salaried" | "self-employed" | "";
  annualIncome: string;
}

// Legacy (multi-step) loan fields.
// Kept only so older multi-step components can still typecheck if referenced.
export interface LegacyCommonLoanFields {
  // Step 1: Personal Details
  fullName: string;
  mobileNumber: string;
  email: string;
  pincode: string;
  dob: string;
  city: string;
  panCard: string;

  // Step 2: Employment Info
  employmentType: "salaried" | "self-employed" | "";
  monthlyIncome: string;
  employerName: string;
  existingEmi: string;
}

// Loan types: all loan categories currently use the same 4-field lead form.
export type PersonalLoanFields = CommonLoanFields;
export type BusinessLoanFields = CommonLoanFields;
export type HomeLoanFields = CommonLoanFields;
export type LAPFields = CommonLoanFields;
export type CarLoanFields = CommonLoanFields;
export type EducationLoanFields = CommonLoanFields;

// Insurance Types
export interface HealthInsuranceFields {
  fullName: string;
  mobileNumber: string;
  dob: string;
  sumInsured: string;
}

export interface TermLifeInsuranceFields {
  fullName: string;
  mobileNumber: string;
  dob: string;
  sumInsured: string;
}

export interface CarInsuranceFields {
  fullName: string;
  mobileNumber: string;
  dob: string;
  pincode: string;
  vehicleNumber: string;
  policyTerm: string;
}

export interface BikeInsuranceFields {
  fullName: string;
  mobileNumber: string;
  dob: string;
  pincode: string;
  vehicleNumber: string;
  policyTerm: string;
}

export interface LoanProtectorFields {
  fullName: string;
  mobileNumber: string;
  age: string;
  loanType: string;
  loanAmount: string;
  tenure: string;
}

export interface EMIProtectorFields {
  fullName: string;
  mobileNumber: string;
  dob: string;
  loanType: string;
  loanAmount: string;
  tenure: string;
}

export type LoanType =
  | "personal-loan"
  | "business-loan"
  | "home-loan"
  | "mortgage-loan"
  | "car-loan"
  | "education-loan";

export type InsuranceType =
  | "health-insurance"
  | "term-life"
  | "car-insurance"
  | "bike-insurance"
  | "loan-protector"
  | "emi-protector";

