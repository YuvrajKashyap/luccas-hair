import type { BusinessHour } from "@/types";

export const businessInfo = {
  name: "Lucca's Hair",
  publicPerson: "Tony Lucca",
  specialty: "Hair stylist and men's grooming specialist",
  locationLabel: "Inside Salon Boutique",
  streetAddress: "5701 E SH-121 Access Rd",
  suite: "Suite TBD",
  city: "The Colony",
  region: "TX",
  postalCode: "TBD",
  country: "US",
  phone: "972-207-9215",
  email: "tlucca65@yahoo.com",
  bookingPlatform: "Square",
  bookingUrl: process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL || null,
} as const;

export const businessHours: BusinessHour[] = [
  { days: "Tuesday to Saturday", hours: "10 AM to 5 PM" },
  { days: "Sunday and Monday", hours: "Closed" },
];

export const contactLinks = {
  call: `tel:+1${businessInfo.phone.replace(/\D/g, "")}`,
  text: `sms:+1${businessInfo.phone.replace(/\D/g, "")}`,
  email: `mailto:${businessInfo.email}`,
  directions:
    "https://www.google.com/maps/search/?api=1&query=5701%20E%20SH-121%20Access%20Rd%2C%20The%20Colony%2C%20TX",
} as const;

export function getDisplayAddress(): string {
  return `${businessInfo.locationLabel}, ${businessInfo.streetAddress}, ${businessInfo.suite}, ${businessInfo.city}, ${businessInfo.region}`;
}

export function getBookingHref(): string {
  return businessInfo.bookingUrl ?? "/book#square-booking";
}
