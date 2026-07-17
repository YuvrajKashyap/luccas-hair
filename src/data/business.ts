import type { BusinessHour } from "@/types";

export const squareBookingUrl = "https://square.site/book/DT4HT5QD699RJ/lucca";
export const instagramUrl = "https://www.instagram.com/luccahairco/";

export const businessInfo = {
  name: "Lucca's Hair",
  publicPerson: "Tony Lucca",
  specialty: "Hair stylist and men's grooming specialist",
  locationLabel: "Inside Salon Boutique",
  streetAddress: "5701 E SH-121 Access Rd",
  suite: null,
  city: "The Colony",
  region: "TX",
  postalCode: null,
  country: "US",
  phone: "972-207-9215",
  email: "tlucca65@yahoo.com",
  instagramHandle: "@luccahairco",
  bookingPlatform: "Square",
  bookingUrl: process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || squareBookingUrl,
} as const;

export const businessHours: BusinessHour[] = [
  {
    label: "Tuesday and Wednesday",
    days: ["Tuesday", "Wednesday"],
    opens: "10:00",
    closes: "17:00",
  },
  { label: "Thursday", days: ["Thursday"], opens: "10:00", closes: "17:30" },
  { label: "Friday", days: ["Friday"], opens: "10:00", closes: "17:00" },
  { label: "Saturday", days: ["Saturday"], opens: "09:00", closes: "16:30" },
  { label: "Sunday and Monday", days: ["Sunday", "Monday"] },
];

export const contactLinks = {
  call: `tel:+1${businessInfo.phone.replace(/\D/g, "")}`,
  text: `sms:+1${businessInfo.phone.replace(/\D/g, "")}`,
  email: `mailto:${businessInfo.email}`,
  instagram: instagramUrl,
  directions:
    "https://www.google.com/maps/search/?api=1&query=5701%20E%20SH-121%20Access%20Rd%2C%20The%20Colony%2C%20TX",
} as const;

export function getDisplayAddress(): string {
  return [
    businessInfo.locationLabel,
    businessInfo.streetAddress,
    businessInfo.suite,
    `${businessInfo.city}, ${businessInfo.region}`,
  ]
    .filter(Boolean)
    .join(", ");
}

export function getSquareBookingHref(): string {
  return businessInfo.bookingUrl;
}

export function getBookingHref(): string {
  return getSquareBookingHref();
}
