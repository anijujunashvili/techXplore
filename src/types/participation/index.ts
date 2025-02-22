export type Loan = {
  name: string;
  total_due: string;
  due_date: string;
  amount_paid: string;
  total_months: number;
  monthly_payment: string;
  id: number;
  progress: number;
  months_remaining: number;
};

export type Bills = {
  name: string;
  id: number;
  subscriber_number: string;
  address: string;
  total_due: number;
  due_date: string;
};

export type Request = {
  bills: number;
  personal_number: number;
};

export type LoanDetails = {
  monthly_payment: number;
  name: string;
};

export type Sender = {
  first_name: string;
  id: number;
  last_name: string;
  personal_number: string;
};

export type UtilityDetails = {
  total_due: number;
  name: string;
};

export type RequestType = {
  id: number;
  share_percentage: number;
  status: string;
  utility_details: UtilityDetails;
  loan_details: LoanDetails;
  sender: Sender;
};
