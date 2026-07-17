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
        status: "confirmed",
        defaultOpen: true,
      },
      {
        question: "Do I need to create an account to book?",
        answer:
          "You do not need an account on Lucca's Hair. Square may ask for the contact details needed to manage your appointment.",
        status: "confirmed",
      },
      {
        question: "Can I reschedule my appointment?",
        answer:
          "Use your Square appointment details when available, or contact Tony directly if you need help changing your time.",
        status: "tbd",
      },
      {
        question: "Do you accept walk-ins?",
        answer:
          "Appointments are recommended. Same-day availability may be limited, so booking through Square is the cleanest path.",
        status: "tbd",
      },
      {
        question: "What if I'm running late?",
        answer:
          "Please text or call Tony as soon as you can. Final late-arrival rules are still TBD and will be updated once confirmed.",
        status: "tbd",
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
          "The final cancellation and rescheduling policy is TBD. Please contact Tony if you need to cancel or move an appointment.",
        status: "tbd",
      },
      {
        question: "Is there a no-show fee?",
        answer:
          "No-show rules are TBD. This page will stay editable until Tony confirms the final policy language.",
        status: "tbd",
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
          "Payment details are handled through Tony and Square. Final payment policy language is TBD.",
        status: "tbd",
      },
      {
        question: "Are prices final?",
        answer:
          "The confirmed current service is Cuts at $20 for 20 minutes. Placeholder services and starting-at prices are not final until Tony confirms them.",
        status: "confirmed",
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
        status: "confirmed",
      },
      {
        question: "Where can I see service details?",
        answer:
          "Visit the Services page for the current menu. Anything marked as placeholder or TBD should not be treated as final.",
        status: "confirmed",
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
          "Products are planned for the future, but live checkout is not available yet. Product names, pricing, inventory, fulfillment, and return rules are TBD.",
        status: "tbd",
      },
      {
        question: "Can I ask Tony about products?",
        answer:
          "Yes. Use the text option or ask during your appointment for product recommendations.",
        status: "confirmed",
      },
    ],
  },
];

export const faqItems: FaqPolicyItem[] = faqPolicySections.flatMap(
  (section) => section.items,
);
