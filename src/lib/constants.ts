import type {
  TrustGapCard,
  ComparisonRow,
  ProcessStep,
  IndustryTab,
  Testimonial,
} from "./types";

export const SITE = {
  name: "WebDealer",
  tagline: "The 24/7 human-powered sales floor for high-ticket brands.",
  bookingUrl: "/book",
  heroHeadline: "Stop Losing 60% of Your Leads to an 'Away' Message.",
  heroSubheadline:
    "The 24/7 human-powered sales floor for high-ticket brands.",
} as const;

export const TRUST_GAP_CARDS: TrustGapCard[] = [
  {
    icon: "BotOff",
    title: "The Bot Bounce",
    stat: "68%",
    description:
      "of consumers abandon a chat when they realise they're talking to a bot. Your first impression is costing you deals.",
  },
  {
    icon: "Moon",
    title: "The 11 PM Black Hole",
    stat: "47%",
    description:
      "of high-intent enquiries arrive outside business hours. No human on the other end means no appointment booked.",
  },
  {
    icon: "AlertTriangle",
    title: "Hallucination Liability",
    stat: "$2.4M",
    description:
      "average settlement when an AI chatbot gives incorrect information on pricing or availability in a regulated industry.",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Response Time",
    humanAgent: "< 30 seconds, 24/7",
    aiChatbot: "Instant but scripted",
  },
  {
    feature: "After-Hours Booking",
    humanAgent: true,
    aiChatbot: false,
  },
  {
    feature: "Data Accuracy",
    humanAgent: "Verified by human",
    aiChatbot: "Prone to hallucination",
  },
  {
    feature: "Complex Enquiries",
    humanAgent: "Handled with nuance",
    aiChatbot: "Escalated or dropped",
  },
  {
    feature: "Tone & Empathy",
    humanAgent: "Brand-trained agents",
    aiChatbot: "Robotic templating",
  },
  {
    feature: "CRM Integration",
    humanAgent: "Live push, clean data",
    aiChatbot: "Often broken or partial",
  },
  {
    feature: "Compliance & Liability",
    humanAgent: "Human accountability",
    aiChatbot: "Legal grey area",
  },
];

export const ROI_DEFAULTS = {
  visitors: 10000,
  conversionRate: 2,
  dealValue: 5000,
} as const;

export const ROI_MULTIPLIER = 2.5;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "The 24/7 Safety Net",
    subtitle: "Engagement",
    description:
      "A trained human agent greets every visitor within 30 seconds — day or night. No bots, no scripts, no 'we'll get back to you.'",
    details: [
      "Instant human response on your website chat",
      "Brand-specific greeting and tone of voice",
      "Seamless handoff feels native to your site",
    ],
  },
  {
    number: "02",
    title: "The Playbook Qualification",
    subtitle: "Filtering",
    description:
      "Our agents follow your custom playbook to qualify leads, filter tyre-kickers, and capture the data that actually matters.",
    details: [
      "Custom qualification criteria per industry",
      "Trade-in values, finance intent, timeline captured",
      "Tire-kickers filtered before they waste your team's time",
    ],
  },
  {
    number: "03",
    title: "The Live Transfer & CRM Push",
    subtitle: "Action",
    description:
      "Qualified leads are either transferred live to your sales team or pushed directly into your CRM with all data attached.",
    details: [
      "Live warm transfer during business hours",
      "After-hours: appointment booked + CRM push",
      "Clean, verified data — no hallucinated fields",
    ],
  },
];

export const INDUSTRY_TABS: IndustryTab[] = [
  {
    id: "automotive",
    label: "Automotive",
    headline: "Turn 'Is This Still Available?' Into Booked Test Drives",
    description:
      "Dealerships lose thousands of leads to automated responses and after-hours silence. Our agents handle trade-in queries, finance questions, and test drive bookings — 24/7.",
    painPoints: [
      "60% of website leads go unresponded after hours",
      "'Is this still available?' spam overwhelms your BDC",
      "AI bots can't handle trade-in or finance complexity",
    ],
    solutions: [
      "Human agents trained on your inventory and pricing",
      "Trade-in value capture and finance pre-qualification",
      "Direct test drive booking into your DMS/CRM",
    ],
    clientName: "Mercedes-Benz Toronto",
  },
  {
    id: "b2b",
    label: "B2B Services",
    headline: "Convert Complex Specs Into Qualified Opportunities",
    description:
      "B2B leads need nuanced conversations about specs, turnaround times, and custom quotes. Bots can't handle the complexity — humans can.",
    painPoints: [
      "Complex quote requests abandoned on web forms",
      "After-hours RFQs from different time zones go cold",
      "AI chatbots give inaccurate specs or pricing",
    ],
    solutions: [
      "Agents trained on your service catalogue and pricing tiers",
      "Custom quote capture with all spec details",
      "24/7 coverage for international time zones",
    ],
    clientName: "Big Blue Printing",
  },
  {
    id: "professional",
    label: "Professional Services",
    headline: "Book High-Value Consultations Around the Clock",
    description:
      "Law firms, financial advisors, and consultancies need trust-first conversations. Our agents provide the white-glove intake your brand demands.",
    painPoints: [
      "High-value prospects expect immediate, professional response",
      "Intake forms create friction and drop-off",
      "Compliance requirements make AI responses risky",
    ],
    solutions: [
      "Professional intake with empathy and discretion",
      "Conflict check and qualification before booking",
      "GDPR-compliant data handling and consent capture",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We went from missing 40% of our after-hours leads to booking appointments while we sleep. The ROI was obvious within the first month.",
    author: "James Chen",
    role: "General Manager",
    company: "Mercedes-Benz Toronto",
  },
  {
    quote:
      "Our old chatbot was losing us complex print jobs because it couldn't handle spec questions. WebDealer's human agents understand our products.",
    author: "Sarah Mitchell",
    role: "Director of Sales",
    company: "Big Blue Printing",
  },
  {
    quote:
      "The difference is night and day. Real humans, real conversations, real appointments. Our conversion rate doubled in 90 days.",
    author: "David Park",
    role: "VP of Business Development",
    company: "Meridian Financial Group",
  },
];

export const FOUNDER_LETTER = {
  heading: "The Anti-Bot Manifesto",
  paragraphs: [
    "I built WebDealer because I watched an entire industry race to replace human connection with chatbots — and I watched the leads bleed out.",
    "The AI chatbot gold rush promised efficiency. What it delivered was a race to the bottom: scripted responses, hallucinated information, and a customer experience that feels like talking to a vending machine.",
    "High-ticket buyers don't want efficiency. They want certainty. They want someone who understands that a $80,000 vehicle purchase isn't the same as ordering a pizza. They want a human who can read between the lines, handle complexity, and build the kind of trust that closes deals.",
    "That's what we do. We're not anti-technology — we use it to route, track, and optimise. But we're fiercely anti-replacement. The moment you swap a human conversation for a chatbot script, you've told your prospect they're not worth the real thing.",
    "Welcome to the Human Premium.",
  ],
  author: "Surkhail",
  title: "Founder, WebDealer Solution",
} as const;
