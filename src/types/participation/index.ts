export type Loan = {
  title: string;
  amount: string;
  duration: number;
  paid: string;
  date: string;
  monthly: string;
};

export type Bills = {
  title: string;
  account_number: string;
  amount: string;
  address: string;
  date: string;
};

export type Request = {
  bills: number;
  personal_number: number;
};
