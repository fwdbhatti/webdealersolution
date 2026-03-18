import type { Testimonial } from "./types";

export const SITE = {
  name: "WebDealer Solutions",
  tagline:
    "The empathy, care, and 24/7 human connection that AI bots can't deliver.",
  bookingUrl: "/book",
} as const;

export const HERO = {
  headline: "High-Ticket Leads Require a Human Handshake.",
  subheadline:
    "We don't sell software. We provide the empathy, care, and 24/7 human connection that generic AI bots simply can't deliver. Protect your brand's trust and convert more showroom visits with real professionals.",
  cta: "Talk to a Lead Expert",
} as const;

export const IMPACT_STATS = [
  { value: 26, label: "Elite Enterprise Clients" },
  { value: 48, label: "Trained Human Professionals" },
  { value: 286773, label: "Qualified Leads Generated Since 2015" },
] as const;

export const TRUST_TAX = {
  headline: 'The "Trust Tax" of AI Chatbots.',
  body: "In a rush to automate, businesses are handing their most valuable leads to guessing machines. When a customer is spending $50,000, they want to know a real person is holding their data. We upgrade your technology to capture the lead, but we keep the empathy intact to close the deal.",
} as const;

export const PILLARS = [
  {
    icon: "Shield",
    title: "The High-Stakes Psychological Barrier",
    body: "If someone is buying a $50 pair of shoes, a bot is fine. If they are giving away their phone number and credit score for a $50,000 vehicle, they need human reassurance. We provide that security.",
  },
  {
    icon: "AlertTriangle",
    title: "Eliminating AI 'Hallucinations'",
    body: "In lead gen, accuracy is everything. An AI agent might accidentally promise a 'guaranteed' trade-in price just to keep the conversation going, killing the deal. Our human agents know exactly where your legal and operational lines are drawn.",
  },
  {
    icon: "Eye",
    title: "Beating the 'Uncanny Valley'",
    body: "Customers have bot-radar. The moment a user asks, 'Are you a real person?' and gets a canned response, your conversion rate tanks. AI creates high-volume, low-quality spam. We deliver 3x to 5x higher conversion to an actual showroom visit.",
  },
  {
    icon: "Heart",
    title: "Empathy is the Closing Tool",
    body: "Lead generation isn't data entry; it's persuasion. A bot says, 'I recorded your interest.' Our human agents say, 'That F-150 is our most popular truck — let me grab your number and have my manager hold the keys so no one else buys it before you arrive.' Empathy closes.",
  },
] as const;

export const ONBOARDING_STEPS = [
  {
    number: "01",
    title: "The Discovery Deep-Dive",
    description:
      "We don't use generic scripts. We sit down with your sales managers to understand your specific inventory, your ideal buyer profile, and your exact brand voice.",
  },
  {
    number: "02",
    title: "The Custom Playbook",
    description:
      "We build a proprietary \"Engagement Playbook\" exclusively for your website. You review and approve every qualification question, trade-in prompt, and transition phrase.",
  },
  {
    number: "03",
    title: "Certification & Launch",
    description:
      "Our agents aren't let loose on your site until they pass a certification on your specific playbook. From Day 1, they sound exactly like your best salesperson.",
  },
] as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "After switching to WebDealer, the complaints about our frustrating website bot vanished. For the first time, our sales team is waking up to calendar invites from people who are actually excited to talk to us.",
    author: "James Chen",
    role: "General Manager",
    company: "Mercedes-Benz Toronto",
  },
  {
    quote:
      "We tried three different AI chatbots before WebDealer. The difference is human empathy — our close rate on web leads tripled because people felt heard, not processed.",
    author: "Sarah Mitchell",
    role: "Director of Sales",
    company: "Big Blue Printing",
  },
  {
    quote:
      "In financial services, trust is everything. We can't afford a bot making promises we can't keep. WebDealer's agents understand compliance and still convert at a rate that makes our team smile.",
    author: "David Park",
    role: "VP of Business Development",
    company: "Meridian Financial Group",
  },
];

export const LEGACY = {
  headline: "15 Years of Human-Led Lead Generation",
  subheadline:
    "WebDealer Solutions was founded in 2015 with a simple belief: the best technology in the world can't replace a genuine human conversation when the stakes are high.",
  paragraphs: [
    "We've watched the industry chase every new chatbot trend — and we've watched those same businesses quietly come back to us when their conversion rates dropped, their CRM filled with junk data, and their customers started complaining.",
    "For over a decade, we've been the quiet partner behind some of the most trusted brands in automotive, B2B services, and professional services. We don't advertise loudly. We don't promise AI magic. We deliver trained human professionals who treat your customers the way they deserve to be treated.",
    "Every one of our 48 agents goes through a rigorous certification process on your specific business before they ever interact with your customers. They know your inventory, your pricing boundaries, your brand voice, and your compliance requirements.",
    "The result? 286,000+ qualified leads generated for our clients since 2015. Not form fills. Not chat transcripts. Real, qualified, appointment-ready leads from real human conversations.",
  ],
  founderName: "Surkhail",
  founderTitle: "Founder, WebDealer Solutions",
} as const;
