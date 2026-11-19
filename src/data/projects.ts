import { certificateSizes, media, type Media } from "./media";

// Selected work, curated from info/Portfolio. Edit copy here, not in the layouts.

export type Category = "Brand & social" | "Strategy & research" | "Product & packaging";

export const categories: Category[] = ["Brand & social", "Strategy & research", "Product & packaging"];

export type Project = {
  slug: keyof typeof media;
  title: string;
  client: string;
  context: string;
  year: string;
  category: Category;
  summary: string;
  deliverables: string[];
  highlight?: string;
  featured?: boolean;
  images: Media[];
};

export const projects: Project[] = [
  {
    slug: "ultima-social",
    title: "Arabic content for a global broker",
    client: "Ultima Markets",
    context: "Marketing Manager",
    year: "2024 - 2026",
    category: "Brand & social",
    summary:
      "Localized educational, promotional and technical content for Arabic-speaking traders across GCC and MENA: weekly carousels on trading concepts, market-moving events like FOMC, sponsorship news and award campaigns.",
    deliverables: ["Weekly content plans", "LinkedIn & Instagram carousels", "Arabic localization", "Campaign visuals"],
    featured: true,
    images: media["ultima-social"],
  },
  {
    slug: "ouva",
    title: "Building the Ouva Delivery brand",
    client: "Ouva Delivery",
    context: "Freelance · Brand & community",
    year: "2022",
    category: "Brand & social",
    summary:
      "A full identity for a Tunisian on-demand delivery platform covering food, groceries, pharmacy and DIY: logo, print collateral, bilingual client flyers, a partner-restaurant post series and website visuals.",
    deliverables: ["Logo & identity", "Business cards & flyers", "Social media series", "Website visuals"],
    featured: true,
    images: media.ouva,
  },
  {
    slug: "tresemme",
    title: "TRESemmé “New Era”",
    client: "Unilever Uniway",
    context: "International competition · HIPYs team",
    year: "2023",
    category: "Product & packaging",
    summary:
      "A repositioning proposal for TRESemmé: the Botanique+ range built around green caviar, refill packaging, a Gen-Z persona, a TikTok-first content strategy and a full pricing and route-to-market plan.",
    deliverables: ["Brand proposition", "Product & packaging concept", "Communication plan", "Pricing model"],
    highlight: "Uniway International finalist, Egypt 2023",
    featured: true,
    images: media.tresemme,
  },
  {
    slug: "ultima-strategy",
    title: "Market analysis & GCC benchmark",
    client: "Ultima Markets",
    context: "Marketing Manager",
    year: "2024 - 2025",
    category: "Strategy & research",
    summary:
      "The research behind the regional expansion: a global market and channel analysis, then a country-by-country competitive benchmark of brokers across the GCC, Egypt and Levant, with SWOTs and recommendations.",
    deliverables: ["Market overview", "Competitor SWOTs", "Channel strategy", "Short & long-term plans"],
    featured: true,
    images: media["ultima-strategy"],
  },
  {
    slug: "dove",
    title: "Dove in Tunisia",
    client: "Unilever Uniway",
    context: "Case study · HIPYs team",
    year: "2023",
    category: "Strategy & research",
    summary:
      "A market study of 200 women and a plan for Dove in Tunisia, including DWELP: a three-year women empowerment and leadership program for undergraduate students, with supply-chain and impact roadmaps.",
    deliverables: ["Consumer survey (n=200)", "Marketing mix analysis", "DWEF & DWELP identities", "Impact roadmap"],
    images: media.dove,
  },
  {
    slug: "palmacare",
    title: "PalmaCare skincare",
    client: "PalmaCare",
    context: "Startup project",
    year: "",
    category: "Product & packaging",
    summary:
      "A natural skincare brand made from date kernels: pitch deck with market sizing and a financial model, plus the labels, stickers and posters for the first product line.",
    deliverables: ["Pitch deck", "Market sizing", "Labels & packaging", "Posters"],
    images: media.palmacare,
  },
  {
    slug: "sno",
    title: "SNO goes international",
    client: "SNO",
    context: "International marketing · Tunis Business School",
    year: "",
    category: "Strategy & research",
    summary:
      "An export plan for a Tunisian eco-friendly cleaning brand: market scoring of France, Switzerland and the Netherlands, then product, pricing, distribution and communication strategies for the Dutch launch.",
    deliverables: ["Market selection", "Export pricing", "Distribution strategy", "Launch timeline"],
    images: media.sno,
  },
  {
    slug: "artfin",
    title: "Artfin consumer behaviour study",
    client: "Artfin",
    context: "Consumer behaviour · Tunis Business School",
    year: "",
    category: "Strategy & research",
    summary:
      "How a Tunisian fragrance brand is perceived: sensory systems, attention and Gestalt analysis of the logo, a perceptual map, survey findings and recommendations.",
    deliverables: ["Perception analysis", "Perceptual map", "Survey findings", "Recommendations"],
    images: media.artfin,
  },
  {
    slug: "klink",
    title: "Klink artist booking platform",
    client: "Klink",
    context: "Freelance · Community manager",
    year: "2020",
    category: "Brand & social",
    summary:
      "Social content for Tunisia's first artistic booking platform: talent calls, brand values, market facts and advice for artists.",
    deliverables: ["Social media content", "Talent campaigns", "Flyers"],
    images: media.klink,
  },
  {
    slug: "moona",
    title: "Moona Insurance",
    client: "Hult Prize",
    context: "Social entrepreneurship",
    year: "2020",
    category: "Brand & social",
    summary:
      "Food waste as a currency: households trade their food waste for organic fruit and vegetables. Identity and brochure for the idea that won first prize.",
    deliverables: ["Logo", "Brochure"],
    highlight: "1st prize at the Hult Prize, Dec 2020",
    images: media.moona,
  },
  {
    slug: "moonwake",
    title: "MoonWake Camp",
    client: "Tunivisions Club TBS",
    context: "HR & Project Manager",
    year: "2020",
    category: "Brand & social",
    summary: "Identity and event cover for a three-day camp in Hammamet, organized with the Tunivisions club.",
    deliverables: ["Event identity", "Social covers"],
    images: media.moonwake,
  },
];

export type Certificate = {
  slug: keyof typeof certificateSizes;
  title: string;
  issuer: string;
  date: string;
  verify?: string;
};

export const certificates: Certificate[] = [
  {
    slug: "seo-strategies",
    title: "SEO Strategies",
    issuer: "Great Learning Academy",
    date: "Dec 2024",
    verify: "https://www.mygreatlearning.com/certificate/IHUGAFJH",
  },
  {
    slug: "chatgpt-seo",
    title: "ChatGPT for SEO and Content",
    issuer: "Great Learning Academy",
    date: "Dec 2024",
    verify: "https://www.mygreatlearning.com/certificate/EQGHZYIA",
  },
  {
    slug: "sem",
    title: "Search Engine Marketing",
    issuer: "Great Learning Academy",
    date: "Nov 2024",
    verify: "https://www.mygreatlearning.com/certificate/WMFBCKSL",
  },
  {
    slug: "open-startup",
    title: "Open Startup Pre-Incubation Program",
    issuer: "Columbia Engineering",
    date: "Nov 2021",
  },
  { slug: "python", title: "Introduction to Programming using Python", issuer: "Microsoft Technology Associate", date: "Jun 2019" },
  { slug: "powerpoint", title: "Office PowerPoint 2016", issuer: "Microsoft Office Specialist", date: "Jun 2019" },
  { slug: "word", title: "Office Word 2016", issuer: "Microsoft Office Specialist", date: "Jun 2019" },
];

export const certificateImage = (slug: Certificate["slug"]) => ({
  src: `/certificates/${slug}.webp`,
  pdf: `/certificates/${slug}.pdf`,
  ...certificateSizes[slug],
});

// Trainings listed on the CV without a certificate file.
export const trainings = [
  "Project Management & Agile Methodologies",
  "Leadership & Communication",
  "Time Management",
  "DELF B2 (French)",
];
