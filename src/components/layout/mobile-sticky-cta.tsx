import { getBookingHref } from "@/data/business";
import { buttonClassName } from "@/components/ui/button";
import { TrackableLink } from "@/components/ui/trackable-link";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <TrackableLink
        href={getBookingHref()}
        eventName="booking_click"
        metadata={{ placement: "mobile_sticky_cta" }}
        className={buttonClassName({ className: "w-full" })}
      >
        Book Appointment
      </TrackableLink>
    </div>
  );
}
