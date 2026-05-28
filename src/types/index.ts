export type NavLink = {
  label: string;
  href: string;
};

export type BusinessHour = {
  days: string;
  hours: string;
};

export type Service = {
  id: string;
  name: string;
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
  status: "confirmed" | "tbd";
};
