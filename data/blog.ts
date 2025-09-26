export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  cover: string;
  tags: string[];
  html: string; // simple HTML content rendered in .prose
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-hiv-treatment-in-delhi",
    title: "Best HIV Treatment in Delhi: What Comprehensive Care Looks Like",
    date: "2025-09-01",
    excerpt:
      "A practical guide to ART, monitoring, U=U, and how to choose a clinic that respects privacy and provides clear information.",
    cover: "https://picsum.photos/seed/blog-hiv/1200/700",
    tags: ["HIV", "ART", "Delhi"],
    html: `
      <h2>Getting Started with ART</h2>
      <p>Modern regimens are powerful and well tolerated. Your care team will explain doses, side effects, and monitoring in plain language.</p>
      <h2>Understanding Monitoring</h2>
      <p>We review viral load and CD4 trends together and make adjustments only when helpful.</p>
      <h2>Choosing a Clinic in Delhi</h2>
      <p>Look for privacy, clear communication, and practical follow-up plans that fit your life.</p>
    `,
  },
  {
    slug: "pep-within-72-hours-delhi",
    title: "PEP within 72 Hours in Delhi: Steps to Take Now",
    date: "2025-09-05",
    excerpt:
      "If you think you were exposed to HIV, timing matters. Learn how PEP works and what to do in the first 72 hours.",
    cover: "https://picsum.photos/seed/blog-pep/1200/700",
    tags: ["PEP", "Urgent", "Delhi"],
    html: `
      <h2>Why Timing Matters</h2>
      <p>PEP is most effective when started as soon as possible, ideally within 72 hours of a potential exposure.</p>
      <h2>What to Expect</h2>
      <p>Evaluation, a full course of medication, and follow-up testing with clear instructions.</p>
    `,
  },
  {
    slug: "confidential-sti-testing-delhi",
    title: "Confidential STI Testing in Delhi: What to Expect",
    date: "2025-09-10",
    excerpt:
      "A discreet, guideline-based approach to screening, treatment, partner notification, and re-testing intervals.",
    cover: "https://picsum.photos/seed/blog-sti/1200/700",
    tags: ["STI", "Testing", "Privacy"],
    html: `
      <h2>Screening Basics</h2>
      <p>We recommend tests based on symptoms and timing, with window periods explained in simple terms.</p>
      <h2>Treatment & Follow-Up</h2>
      <p>We focus on clear instructions, re-testing intervals, and reducing reinfection risk.</p>
    `,
  },
];
