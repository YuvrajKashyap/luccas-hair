export type NavLink = {
  label: string;
  href: string;
};

export type BusinessHour = {
  label: string;
  days: Array<
    "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
  >;
  opens?: string;
  closes?: string;
};

export type Service = {
  id: string;
  name: string;
  category: string;
  summary: string;
  price: string;
  duration: string;
  status: "placeholder" | "confirmed";
};

export type ProductTeaser = {
  id: string;
  name: string;
  summary: string;
  status: "coming-soon" | "placeholder";
};

export type FaqPolicyItem = {
  question: string;
  answer: string;
  status: "verified" | "contact";
  defaultOpen?: boolean;
};

export type FaqPolicyCategory = {
  id: string;
  label: string;
  icon: "calendar" | "x-circle" | "credit-card" | "scissors" | "shield";
  defaultOpen?: boolean;
  items: FaqPolicyItem[];
};
