import { redirect } from "next/navigation";
import { getSquareBookingHref } from "@/data/business";

export default function BookPage() {
  redirect(getSquareBookingHref());
}
