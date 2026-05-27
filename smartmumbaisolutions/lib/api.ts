/**
 * API Configuration for Smart Mumbai Solutions
 * 
 * Architecture:
 * - Frontend calls Next.js API routes at /api/* (same domain, no CORS issues)
 * - API routes proxy requests to Loan Baazaar backend
 * - API routes automatically add X-Application-Source header
 * 
 * Development: http://localhost:3001/api (Next.js API routes)
 * Production: http://localhost:3001/api (Next.js API routes) → https://loanbaazaar.com/api
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined' ? '/api' : 'http://localhost:3001/api');

// Cache configuration
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

// In-memory cache for API responses
const apiCache = new Map<string, CacheEntry<any>>();

// Helper function to get from cache or fetch
function getCachedOrFetch<T>(
  cacheKey: string,
  fetchFn: () => Promise<T>
): Promise<T> {
  const cached = apiCache.get(cacheKey);
  const now = Date.now();

  // Return cached data if still valid
  if (cached && (now - cached.timestamp) < CACHE_TTL) {
    return Promise.resolve(cached.data);
  }

  // Fetch fresh data and cache it
  return fetchFn().then(data => {
    apiCache.set(cacheKey, { data, timestamp: now });
    return data;
  });
}

// API Response Types
interface ApiSuccessResponse {
  success: true;
  applicationId: string;
  message: string;
  data: {
    applicationId: string;
    status: string;
    createdAt: string;
  };
}

interface ApiErrorResponse {
  success: false;
  error?: string;
  errors?: Record<string, string>;
}

type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

// Helper function to convert form sum insured to number
function parseSumInsured(sumInsured: string): number {
  // Convert "₹5L", "₹10L", "₹1Cr" etc. to numbers
  if (!sumInsured) return 0;

  const cleanValue = sumInsured.replace('₹', '').trim();

  if (cleanValue.endsWith('Cr')) {
    return parseFloat(cleanValue.replace('Cr', '')) * 10000000;
  } else if (cleanValue.endsWith('L')) {
    return parseFloat(cleanValue.replace('L', '')) * 100000;
  }

  return parseFloat(cleanValue) || 0;
}

// Map form loan types to API loan types
function mapLoanTypeToSlug(loanType: string): string {
  const mapping: Record<string, string> = {
    'Personal Loan': 'personal-loan',
    'Business Loan': 'business-loan',
    'Home Loan': 'home-loan',
    'Car Loan': 'car-loan',
    'Education Loan': 'education-loan',
  };

  return mapping[loanType] || loanType.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Submit Loan Application
 */
export async function submitLoanApplication(loanType: string, formData: any): Promise<ApiResponse> {
  try {
    const requestBody = {
      loanType: loanType,
      fullName: formData.fullName,
      mobileNumber: formData.mobileNumber,
      employmentType: formData.employmentType,
      annualIncome: formData.annualIncome ? parseFloat(formData.annualIncome) : 0,
    };

    const response = await fetch(`${API_BASE_URL}/applications/loan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit loan application',
        errors: result.errors,
      };
    }

    return result;
  } catch (error) {
    console.error('Error submitting loan application:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}

/**
 * Submit Insurance Application
 */
export async function submitInsuranceApplication(insuranceType: string, formData: any): Promise<ApiResponse> {
  try {
    const requestBody = {
      insuranceType: insuranceType,
      fullName: formData.fullName,
      mobileNumber: formData.mobileNumber,
      employmentType: formData.employmentType,
      annualIncome: formData.annualIncome ? parseFloat(formData.annualIncome) : 0,
    };

    const response = await fetch(`${API_BASE_URL}/applications/insurance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit insurance application',
        errors: result.errors,
      };
    }

    return result;
  } catch (error) {
    console.error('Error submitting insurance application:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}

/**
 * Get Loan Products from backend API
 * @param slug - Optional: Get specific product by slug
 * @returns Loan products array or single product
 */
export interface LoanProduct {
  slug: string;
  title: string;
  maxAmount: string;
  interestRate: string;
}

export interface LoanProductsResponse {
  success: boolean;
  products?: LoanProduct[];
  product?: LoanProduct;
  error?: string;
}

export async function getLoanProducts(slug?: string): Promise<LoanProductsResponse> {
  const cacheKey = `loan-products_${slug || 'all'}`;

  return getCachedOrFetch(cacheKey, async () => {
    try {
      const url = slug
        ? `${API_BASE_URL}/loan-products?slug=${slug}`
        : `${API_BASE_URL}/loan-products`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 300 }, // Revalidate every 5 minutes (matches CACHE_TTL)
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || 'Failed to fetch loan products',
        };
      }

      return data;
    } catch (error: any) {
      // Gracefully handle backend unavailability in development
      if (error?.cause?.code === 'ECONNREFUSED' || error?.message?.includes('fetch failed')) {
        // Backend is offline, this is expected in standalone mode
        // Silently fail - static data will be used instead
      } else {
        console.error('Error fetching loan products:', error);
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error. Please check your connection and try again.',
      };
    }
  });
}


