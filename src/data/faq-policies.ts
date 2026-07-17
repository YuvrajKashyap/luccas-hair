import type { FaqPolicyCategory, FaqPolicyItem } from "@/types";

export const faqPolicySections: FaqPolicyCategory[] = [
  {
    id: "appointments",
    label: "Appointments",
    icon: "calendar",
    defaultOpen: true,
    items: [
      {
        question: "How do I book an appointment?",
        answer:
          "Use any Book Appointment button to open Tony Lucca's Square booking page. Square handles available times, service selection, and appointment details.",
        status: "verified",
        defaultOpen: true,
      },
      {
        question: "Do I need to create an account to book?",
        answer:
          "You do not need an account on Lucca's Hair. Square may ask for the contact details needed to manage your appointment.",
        status: "verified",
      },
      {
        question: "Can I reschedule my appointment?",
        answer:
          "Use the options in your Square appointment details, or contact Tony directly if you need help changing your time.",
        status: "contact",
      },
      {
        question: "What if I'm running late?",
        answer:
          "Please text or call Tony as soon as you can. No separate late-arrival policy is published on this site.",
        status: "contact",
      },
    ],
  },
  {
    id: "cancellation-policy",
    label: "Cancellation Policy",
    icon: "x-circle",
    items: [
      {
        question: "What is the cancellation policy?",
        answer:
          "Please use your Square appointment details or contact Tony if you need to cancel or move an appointment. No separate cancellation fee is published on this site.",
        status: "contact",
      },
      {
        question: "Is there a no-show fee?",
        answer:
          "No no-show fee is published on this site. Contact Tony directly if you cannot make your appointment.",
        status: "contact",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    icon: "credit-card",
    items: [
      {
        question: "How do I pay?",
        answer:
          "Square handles appointment scheduling. Contact Tony directly if you need to confirm payment options before your visit.",
        status: "contact",
      },
      {
        question: "Are prices final?",
        answer:
          "The confirmed current service is Cuts at $20 for 20 minutes. Placeholder services and starting-at prices are not final until Tony confirms them.",
        status: "verified",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    icon: "scissors",
    items: [
      {
        question: "What services are confirmed?",
        answer:
          "The confirmed current Square service is Cuts, listed at $20 for 20 minutes.",
        status: "verified",
      },
      {
        question: "Where can I see service details?",
        answer:
          "Visit the Services page for the current verified Square listing. The site does not publish unconfirmed services as a final menu.",
        status: "verified",
      },
    ],
  },
  {
    id: "store-policies",
    label: "Store Policies",
    icon: "shield",
    items: [
      {
        question: "Can I buy products online?",
        answer:
          "No products or checkout are live on this site. The Products page is a coming-soon notice only.",
        status: "verified",
      },
      {
        question: "Can I ask Tony about products?",
        answer:
          "Yes. Use the text option or ask during your appointment for product recommendations.",
        status: "contact",
      },
    ],
  },
];

export const faqItems: FaqPolicyItem[] = faqPolicySections.flatMap(
  (section) => section.items,
);
