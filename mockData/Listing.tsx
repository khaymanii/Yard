export interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "Modern Apartment in Lekki",
    location: "Lekki, Lagos, Nigeria",
    price: "₦1,500,000",
    bedrooms: 2,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Cozy Loft in Brooklyn",
    location: "Brooklyn, New York, USA",
    price: "$2,500",
    bedrooms: 1,
    bathrooms: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1689609950069-2961f80b1e70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Luxury Condo in Tokyo",
    location: "Shibuya, Tokyo, Japan",
    price: "¥350,000",
    bedrooms: 2,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Beachfront Villa in Bali",
    location: "Seminyak, Bali, Indonesia",
    price: "$1,200 / month",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Apartment with Eiffel View",
    location: "Paris, France",
    price: "€1,800 / month",
    bedrooms: 2,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Modern Studio in Sydney",
    location: "Sydney, Australia",
    price: "AUD 2,200 / month",
    bedrooms: 1,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWV8ZW58MHx8MHx8fDA%3D",
  },
];
