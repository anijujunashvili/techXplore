export type Loan = {
  name: string;
  total_due: string;
  due_date: string;
  monthly_payment: string;
  id: number;
};

export type Bills = {
  name: string;
  id: number;
  // account_number: string;
  total_due: number;
  // address: string;
  due_date: string;
};

export type Request = {
  bills: number;
  personal_number: number;
};
