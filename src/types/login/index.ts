export type loginType = {
  username: string;
  password: string;
};

export type Loan = {
  id: number;
  name: string;
  due_date: string;
  total_due: number;
  monthly_payment: number;
};

export type Utilities = {
  id: number;
  name: string;
  total_due: number;
  due_date: number;
};

export type UserInfo = {
  first_name: string;
  last_name: string;
  personal_number: string;
  // id:number;
  balance: string;
  loans: Loan[];
  utilities: Utilities[];
};
