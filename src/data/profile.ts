import { Handshake, Megaphone, Presentation, SearchCheck, type LucideIcon } from "lucide-react";

// All content comes from Wiem's CVs (marketing + project manager, 2026) — edit here, not in the components.

export const profile = {
  name: "Wiem Almahjoubi",
  firstName: "Wiem",
  role: "Marketing & Project Manager",
  focus: "Partnerships & Market Expansion",
  tagline: "Turning market insight into partnerships and growth.",
  about:
    "Marketing and project management professional driving growth through market research, partnerships, localized content and expansion strategies. I spot market opportunities, coordinate the teams behind them and turn insights into measurable results.",
  current: "Ultima Markets",
  status: "Open to new opportunities",
  markets: "GCC & MENA markets",
  email: "wiem.almahjoubi@gmail.com",
  linkedin: "https://www.linkedin.com/in/wiem-almahjoubi/",
  cv: "/wiem-almahjoubi-cv.pdf",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Excellent" },
    { name: "French", level: "Professional" },
  ],
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Recognition", href: "#recognition" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export type Stat = { value: number; suffix?: string; label: string };

// The four number tiles in the hero. The project count is added from projects.ts.
export const stats: Stat[] = [
  { value: 500, label: "attendees in a single workshop" },
  { value: 6, suffix: "+", label: "years building brands & communities" },
  { value: 3, label: "incubation programs secured" },
];

export type Role = {
  period: string;
  title: string;
  org: string;
  summary?: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    period: "Dec 2024 — Jan 2026",
    title: "Marketing Manager · Digital Marketing Specialist",
    org: "Ultima Markets",
    summary: "Partnerships & market expansion in the Forex trading industry.",
    points: [
      "Market, customer and competitor research across GCC and MENA to identify opportunities, needs and trends.",
      "Evaluate and profile strategic partners — introducing brokers, affiliates, trading academies and influencers — through commercial and digital assessments.",
      "Write partnership recommendation reports with SWOT analyses, communication-gap assessments and benchmarking.",
      "Led the expansion strategy into the Arab world, GCC and MENA, with localized go-to-market, social and partnership campaigns.",
      "Owned the social content strategy and weekly plans — technical, promotional and educational Arabic content — tracking metrics to grow reach.",
      "Coordinated remote translation, content, influencer and creative teams across regions, with tasks planned and tracked in Lark.",
    ],
    tags: ["GCC & MENA", "Partnerships", "Go-to-market", "Localization"],
  },
  {
    period: "Feb 2024 — Jun 2024",
    title: "Business Developer (Intern)",
    org: "CodeCooperation",
    points: [
      "Shaped and structured a new startup initiative through market research and face-to-face user interviews.",
      "Developed the marketing, sales and go-to-market strategies.",
      "Built the pitch deck and pitched the project to investors and partners.",
      "Managed the project workflow with Agile Scrum and Jira.",
    ],
    tags: ["User research", "GTM strategy", "Scrum"],
  },
  {
    period: "Aug 2021 — Mar 2024",
    title: "Soft & Hard Skills Trainer",
    org: "Freelance",
    points: [
      "Worked with training centers, university clubs and foundations.",
      "Delivered courses, presentations and workshops to groups of up to 500 attendees.",
      "Trained on leadership, project management, communication and critical thinking.",
    ],
    tags: ["Public speaking", "Leadership", "Training"],
  },
  {
    period: "Sep 2020 — Jun 2022",
    title: "Co-founder · Head of Strategic Marketing",
    org: "Westic",
    summary: "A collaborative platform connecting shippers and road-freight carriers to cut lost time and empty returns.",
    points: [
      "Led market research and competitor analysis to identify strategic opportunities.",
      "Managed a cross-functional team across marketing, operations and partnerships.",
      "Represented the company with investors, incubators and strategic stakeholders.",
      "Secured pre-incubation and incubation programs: BIAT Labs, OST and BetaCube.",
    ],
    tags: ["Startup", "Fundraising", "Team leadership"],
  },
  {
    period: "Sep 2020 — Jun 2021",
    title: "International Relations Manager",
    org: "Tunivisions Foundation",
    points: [
      "Led the international relations team to secure two major national projects with international funding.",
      "Built a data-driven international expansion strategy from market analysis.",
      "Analyzed global trends and opportunities to guide marketing initiatives.",
    ],
    tags: ["International funding", "Expansion strategy"],
  },
  {
    period: "Aug 2020 — Present",
    title: "Community Manager & Graphic Designer",
    org: "Freelance · Ouva · Klink",
    points: [
      "Created brand style guides, content and social media strategies.",
      "Grew social audiences and increased user engagement.",
      "Tracked KPIs, reported results and recommended new strategies.",
    ],
    tags: ["Social media", "Brand design", "KPIs"],
  },
];

export type Pillar = { title: string; icon: LucideIcon; items: string[] };

export const expertise: Pillar[] = [
  {
    title: "Market research & expansion",
    icon: SearchCheck,
    items: ["Market & customer research", "Competitor benchmarking", "GCC & MENA go-to-market", "Strategic planning & execution"],
  },
  {
    title: "Partnerships",
    icon: Handshake,
    items: ["Influencer & affiliate evaluation", "Partner profiling & due diligence", "SWOT & recommendation reports", "Stakeholder communication"],
  },
  {
    title: "Digital & social",
    icon: Megaphone,
    items: ["Social media performance analysis", "Instagram & TikTok algorithms", "Brand style guides & content", "Arabic content localization"],
  },
  {
    title: "Leadership & delivery",
    icon: Presentation,
    items: ["Team leadership & coordination", "Project management (Agile Scrum)", "Reporting & dashboarding", "Training groups of up to 500"],
  },
];

export const industries = ["Financial Services", "Forex & Trading", "Fintech", "Digital Financial Products"];

export const tools = [
  "Lark",
  "Slack",
  "Trello",
  "Jira",
  "Meta Business Suite",
  "Adobe Creative Suite",
  "Canva",
  "CapCut",
  "Microsoft Office",
  "Google Workspace",
  "Excel dashboards",
  "Power BI",
];

export type LeadershipRole = { period: string; title: string; org: string; points: string[] };

// Student leadership & event organization (project manager CV).
export const leadership: LeadershipRole[] = [
  {
    period: "2019 — 2020",
    title: "General Secretary & Marketing Manager",
    org: "LIONS Club, Tunis Business School",
    points: ["Represented the club at national conferences", "Liaised with the international executive board", "Ran social media and visual materials"],
  },
  {
    period: "2018 — 2020",
    title: "HR & Project Manager",
    org: "Tunivisions, Tunis Business School",
    points: ["Led HR and internal communication", "Organized “Fall Camp”, MoonWake Camp and the “Mediavision” conference", "Coordinated speakers, agendas and logistics"],
  },
  {
    period: "2018 — 2019",
    title: "Project Manager",
    org: "Atlas Future Leaders, TBS Chapter",
    points: ["Organized the “White Edge 2.0” bootcamp, “MamaAfrica” conference and a job fair", "Coordinated partners, schedules and on-site execution"],
  },
];

export type Award = { competition: string; period: string; blurb: string; highlights: string[] };

export const awards: Award[] = [
  {
    competition: "Unilever Uniway International Competition",
    period: "2023",
    blurb: "A creative business competition for students across Arab countries.",
    highlights: ["Finalist — Egypt, May 2023", "1st prize, national semi-final — Mar 2023", "Nominated for the semi-final — Feb 2023"],
  },
  {
    competition: "Hult Prize",
    period: "2019 — 2021",
    blurb: "The global year-long social entrepreneurship competition for university students.",
    highlights: [
      "Digital Accelerator, Class of 2021",
      "1st prize, Tunis Impact Summit — Mar 2021",
      "1st prize, “Moona Insurance” — Dec 2020",
      "Top 6 finalist — Dec 2019",
    ],
  },
  {
    competition: "JCI TBS Startup Peak",
    period: "2022",
    blurb: "A student competition fostering entrepreneurship and innovation around the SDGs.",
    highlights: ["Finalist — Tunisia 2022"],
  },
];

export const education = {
  degree: "BSc in Business Administration",
  school: "Tunis Business School",
  major: "Major in Business Analytics · Minor in International Business Economics",
  thesis:
    "Thesis: “AI in Education — a data-driven approach to developing a machine-learning model for topic classification in Alexis’s lifecycle.”",
};
