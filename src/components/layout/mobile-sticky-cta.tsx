import { contactLinks, getBookingHref } from "@/data/business";
import { buttonClassName } from "@/components/ui/button";
import { TrackableLink } from "@/components/ui/trackable-link";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <TrackableLink
          href={getBookingHref()}
          eventName="booking_click"
          metadata={{ placement: "mobile_sticky_cta" }}
          className={buttonClassName({ className: "w-full" })}
          ariaLabel="Book an appointment"
        >
          Book
        </TrackableLink>
        <TrackableLink
          href={contactLinks.text}
          eventName="text_click"
          metadata={{ placement: "mobile_sticky_cta" }}
          className={buttonClassName({ variant: "secondary", className: "px-4" })}
          ariaLabel="Text Tony"
        >
          Text
        </TrackableLink>
      </div>
    </div>
  );
}
