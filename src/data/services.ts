import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "cuts",
    name: "Cuts",
    category: "Men's cuts / grooming",
    summary: "Confirmed current Square service for Tony's core cut appointment.",
    price: "$20",
    duration: "20 minutes",
    status: "confirmed",
  },
  {
    id: "beard-grooming",
    name: "Beard Grooming",
    category: "Men's cuts / grooming",
    summary: "Editable placeholder for beard trim, shaping, or grooming services.",
    price: "TBD",
    duration: "TBD",
    status: "placeholder",
  },
  {
    id: "cut-and-grooming",
    name: "Cut And Grooming Package",
    category: "Men's cuts / grooming",
    summary: "Editable placeholder for a combined haircut and grooming appointment.",
    price: "TBD",
    duration: "TBD",
    status: "placeholder",
  },
  {
    id: "style-refresh",
    name: "Style Refresh",
    category: "Men's cuts / grooming",
    summary: "Editable placeholder for consultation, styling, or maintenance services.",
    price: "TBD",
    duration: "TBD",
    status: "placeholder",
  },
];
