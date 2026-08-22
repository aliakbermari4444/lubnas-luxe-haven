import heroSalon from "@/assets/hero-salon.jpg";
import bridalMakeup from "@/assets/bridal-makeup.jpg";
import walimaMakeup from "@/assets/walima-makeup.jpg";
import haircut from "@/assets/haircut.jpg";
import mehndi from "@/assets/mehndi.jpg";
import facial from "@/assets/facial.jpg";
import makeup from "@/assets/makeup.jpg";
import handsFeet from "@/assets/hands-feet.jpg";
import laser from "@/assets/laser.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import hairTreatment from "@/assets/hair-treatment.jpg";
import hydraFacial from "@/assets/hydra-facial.jpg";

export const images = {
  heroSalon,
  bridalMakeup,
  walimaMakeup,
  haircut,
  mehndi,
  facial,
  makeup,
  handsFeet,
  laser,
  salonInterior,
  hairTreatment,
  hydraFacial,
};

export const salon = {
  name: "Lubna's Beauty Salon",
  city: "Mirpurkhas",
  address: "Mirpurkhas, Sindh, Pakistan",
  phone: "03288251926",
  phoneHref: "tel:03288251926",
  hours: "Open daily · 10:00 AM – 9:00 PM",
};

export const social = [
  { label: "Instagram", handle: "@lubnasoffical", url: "https://www.instagram.com/lubnasoffical/" },
  { label: "TikTok", handle: "@lubnas.beauty.sal", url: "https://www.tiktok.com/@lubnas.beauty.sal" },
  {
    label: "Facebook",
    handle: "Lubna's Beauty Salon",
    url: "https://www.facebook.com/profile.php?id=61565570350177",
  },
] as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export type ServiceCategory =
  | "Hair"
  | "Grooming"
  | "Skin Care"
  | "Makeup"
  | "Bridal"
  | "Advanced";

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  /** Placeholder price in PKR — edit these values to publish real pricing. */
  price: number;
  image: string;
};

/**
 * EDIT PRICES HERE. All prices below are placeholders (PKR) and are labelled
 * as such everywhere they appear on the website.
 */
export const services: Service[] = [
  // HAIR
  {
    id: "makeover-style",
    name: "Makeover Style",
    category: "Hair",
    description: "A complete hair and look makeover designed around your features.",
    price: 5000,
    image: haircut,
  },
  {
    id: "haircut",
    name: "Haircut",
    category: "Hair",
    description: "Professional haircut and styling tailored to your look.",
    price: 2000,
    image: haircut,
  },
  {
    id: "hair-treatment",
    name: "Hair Treatment",
    category: "Hair",
    description: "Nourishing treatments for smoother, stronger and healthier hair.",
    price: 4000,
    image: hairTreatment,
  },
  {
    id: "hair-extensions",
    name: "Hair Extensions",
    category: "Hair",
    description: "Added length and volume, blended for a natural finish.",
    price: 8000,
    image: hairTreatment,
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    category: "Hair",
    description: "Blow-dry, curls and event styling for any occasion.",
    price: 2500,
    image: hairTreatment,
  },
  {
    id: "hair-fashion",
    name: "Hair Fashion",
    category: "Hair",
    description: "Fashion colouring and trend-led cuts by our senior stylists.",
    price: 6000,
    image: haircut,
  },
  // GROOMING
  {
    id: "threading-wax",
    name: "Threading / Wax",
    category: "Grooming",
    description: "Precise threading and gentle waxing for clean, defined features.",
    price: 800,
    image: handsFeet,
  },
  {
    id: "mehndi",
    name: "Mehndi",
    category: "Grooming",
    description: "Traditional and modern mehndi artistry for brides and guests.",
    price: 3500,
    image: mehndi,
  },
  {
    id: "waxing-hygienic",
    name: "Waxing — Hygienic & Disposable",
    category: "Grooming",
    description: "Full-body waxing with single-use, fully disposable materials.",
    price: 2500,
    image: handsFeet,
  },
  {
    id: "hands-feet-care",
    name: "Hands & Feet Care",
    category: "Grooming",
    description: "Manicure and pedicure care for soft, well-groomed hands and feet.",
    price: 2200,
    image: handsFeet,
  },
  {
    id: "body-care",
    name: "Body Care",
    category: "Grooming",
    description: "Body polishing and relaxing care rituals for glowing skin.",
    price: 4500,
    image: facial,
  },
  {
    id: "bleach",
    name: "Bleach",
    category: "Grooming",
    description: "Gentle bleach service for an even, brightened skin tone.",
    price: 1200,
    image: facial,
  },
  // SKIN CARE
  {
    id: "rose-oxygen-facial",
    name: "Rose Oxygen Facial",
    category: "Skin Care",
    description: "Oxygenating rose facial that refreshes dull, tired skin.",
    price: 4500,
    image: facial,
  },
  {
    id: "hydra-cellular-facial",
    name: "Hydra Cellular Facial",
    category: "Skin Care",
    description: "Deep hydra cleansing and hydration for a clear, dewy finish.",
    price: 6000,
    image: hydraFacial,
  },
  {
    id: "guinot-treatments",
    name: "Guinot Treatments",
    category: "Skin Care",
    description: "Professional salon facial treatments for targeted skin concerns.",
    price: 7000,
    image: hydraFacial,
  },
  {
    id: "special-treatments",
    name: "Special Treatments",
    category: "Skin Care",
    description: "Customised skin programmes built after a personal consultation.",
    price: 5500,
    image: facial,
  },
  {
    id: "classic-skincare",
    name: "Classic Skincare",
    category: "Skin Care",
    description: "Timeless cleanse, exfoliate and massage facial routine.",
    price: 3000,
    image: facial,
  },
  // MAKEUP
  {
    id: "signature-makeup",
    name: "Signature Makeup",
    category: "Makeup",
    description: "Our signature polished look, balanced for photos and daylight.",
    price: 6000,
    image: makeup,
  },
  {
    id: "semi-permanent-makeup",
    name: "Semi Permanent Makeup Treatment",
    category: "Makeup",
    description: "Long-lasting brow and feature definition, applied with care.",
    price: 12000,
    image: makeup,
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    category: "Makeup",
    description: "Glamorous evening makeup for weddings, dinners and events.",
    price: 3000,
    image: makeup,
  },
  {
    id: "engagement-makeup",
    name: "Engagement Makeup",
    category: "Makeup",
    description: "Soft, radiant engagement look with lasting camera-ready finish.",
    price: 8000,
    image: walimaMakeup,
  },
  // BRIDAL
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    category: "Bridal",
    description: "Complete bridal look with hair, draping and finishing touches.",
    price: 10000,
    image: bridalMakeup,
  },
  {
    id: "walima-makeup",
    name: "Walima Makeup",
    category: "Bridal",
    description: "Elegant walima styling in soft, luminous pastel tones.",
    price: 9000,
    image: walimaMakeup,
  },
  {
    id: "mayoun-makeup",
    name: "Mayoun Makeup",
    category: "Bridal",
    description: "Fresh, festive mayoun look with traditional styling details.",
    price: 7000,
    image: mehndi,
  },
  {
    id: "royal-bridal-queen-package-1",
    name: "Royal Bridal Queen Package-1",
    category: "Bridal",
    description: "Our most complete bridal journey across all wedding events.",
    price: 45000,
    image: bridalMakeup,
  },
  {
    id: "bridal-queen-package-2",
    name: "Bridal Queen Package-2",
    category: "Bridal",
    description: "Bridal day plus one event, with pre-bridal skin preparation.",
    price: 32000,
    image: walimaMakeup,
  },
  {
    id: "bridal-package-3",
    name: "Bridal Package-3",
    category: "Bridal",
    description: "Essential bridal package for an intimate wedding day.",
    price: 22000,
    image: bridalMakeup,
  },
  // ADVANCED
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal Treatment",
    category: "Advanced",
    description: "Advanced laser sessions for smooth, long-lasting results.",
    price: 9000,
    image: laser,
  },
];

export const serviceCategories: { name: ServiceCategory; blurb: string; image: string }[] = [
  { name: "Hair", blurb: "Cuts, colour, treatments and styling.", image: haircut },
  { name: "Skin Care", blurb: "Facials and targeted skin programmes.", image: hydraFacial },
  { name: "Makeup", blurb: "Signature, party and engagement looks.", image: makeup },
  { name: "Bridal", blurb: "Bridal, walima and mayoun artistry.", image: bridalMakeup },
  { name: "Grooming", blurb: "Threading, waxing, mehndi and body care.", image: handsFeet },
  { name: "Advanced", blurb: "Laser and advanced beauty treatments.", image: laser },
];

export type BridalPackage = {
  id: string;
  name: string;
  price: number;
  description: string;
  includes: string[];
  image: string;
};

/** EDIT PACKAGE PRICES HERE — all values are placeholders (PKR). */
export const bridalPackages: BridalPackage[] = [
  {
    id: "royal-bridal-queen-package-1",
    name: "Royal Bridal Queen Package-1",
    price: 45000,
    description: "The full wedding journey, from pre-bridal preparation to your final event.",
    includes: [
      "Bridal makeup & hair",
      "Walima makeup & hair",
      "Mayoun makeup",
      "Pre-bridal facial course",
      "Bridal mehndi",
      "Hands & feet care",
    ],
    image: bridalMakeup,
  },
  {
    id: "bridal-queen-package-2",
    name: "Bridal Queen Package-2",
    price: 32000,
    description: "Bridal day plus one additional event, with skin preparation included.",
    includes: [
      "Bridal makeup & hair",
      "One event makeup (walima or mayoun)",
      "Pre-bridal facial",
      "Mehndi (hands)",
      "Threading & waxing",
    ],
    image: walimaMakeup,
  },
  {
    id: "bridal-package-3",
    name: "Bridal Package-3",
    price: 22000,
    description: "A refined essentials package for an intimate wedding day.",
    includes: [
      "Bridal makeup & hair",
      "Dupatta setting & draping",
      "Classic facial",
      "Threading",
    ],
    image: bridalMakeup,
  },
];

/** Demo testimonials — replace the text and names with real client feedback. */
export const testimonials = [
  {
    name: "Ayesha K.",
    service: "Bridal Makeup",
    quote:
      "My bridal look lasted the entire function and still looked fresh in the photos. The team was calm, kind and so professional.",
  },
  {
    name: "Hina S.",
    service: "Hydra Cellular Facial",
    quote:
      "My skin felt clean and hydrated for days afterwards. They explained every step before starting, which I really appreciated.",
  },
  {
    name: "Sana A.",
    service: "Haircut & Styling",
    quote:
      "First salon in Mirpurkhas where the cut actually matched what I asked for. The styling advice was genuinely useful.",
  },
  {
    name: "Mehwish R.",
    service: "Mehndi",
    quote:
      "The mehndi detailing on my hands was beautiful and the colour came out deep and even. Everyone at the wedding asked me where I had it done.",
  },
  {
    name: "Fatima N.",
    service: "Party Makeup",
    quote:
      "Soft, elegant and exactly the tone I wanted for a family dinner — nothing heavy or overdone.",
  },
  {
    name: "Zainab M.",
    service: "Walima Makeup",
    quote:
      "They understood the pastel look I had in mind straight away. The hygiene and the tools were spotless.",
  },
];

export type GalleryCategory = "Bridal" | "Makeup" | "Hair" | "Skin Care" | "Mehndi" | "Salon";

export const gallery: { src: string; alt: string; category: GalleryCategory }[] = [
  { src: bridalMakeup, alt: "Pakistani bride with traditional bridal makeup and gold jewellery", category: "Bridal" },
  { src: walimaMakeup, alt: "Walima look with soft pastel makeup and pearl jewellery", category: "Bridal" },
  { src: makeup, alt: "Party makeup application with glamorous eye detail", category: "Makeup" },
  { src: heroSalon, alt: "Editorial soft glam makeup portrait in warm golden light", category: "Makeup" },
  { src: haircut, alt: "Professional haircut in progress at the salon", category: "Hair" },
  { src: hairTreatment, alt: "Glossy long hair after a nourishing salon hair treatment", category: "Hair" },
  { src: hydraFacial, alt: "Hydra facial treatment for hydrated, glowing skin", category: "Skin Care" },
  { src: facial, alt: "Facial treatment products and towels in the skincare room", category: "Skin Care" },
  { src: mehndi, alt: "Detailed bridal mehndi design on hands", category: "Mehndi" },
  { src: handsFeet, alt: "Manicured hands after hands and feet care", category: "Skin Care" },
  { src: salonInterior, alt: "Interior of the salon with black and gold styling stations", category: "Salon" },
  { src: laser, alt: "Advanced laser treatment room at the salon", category: "Salon" },
];

export const formatPrice = (price: number) => `PKR ${price.toLocaleString("en-US")}`;
