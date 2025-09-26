export type VlogPost = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  youtubeId: string;
  cover: string; // thumbnail or hero
  tags: string[];
};

export const vlogPosts: VlogPost[] = [
  {
    slug: "hiv-treatment-basics-delhi",
    title: "HIV Treatment Basics: Getting Started in Delhi",
    date: "2025-09-02",
    excerpt:
      "A quick primer on ART, monitoring, and what to expect in your first few visits.",
    youtubeId: "dQw4w9WgXcQ",
    cover: "https://picsum.photos/seed/vlog-hiv/1200/700",
    tags: ["HIV", "ART", "Delhi"],
  },
  {
    slug: "pep-guidance-within-72-hours",
    title: "PEP Guidance: What To Do Within 72 Hours",
    date: "2025-09-06",
    excerpt:
      "If you think you were exposed to HIV, this video explains your next steps clearly.",
    youtubeId: "oHg5SJYRHA0",
    cover: "https://picsum.photos/seed/vlog-pep/1200/700",
    tags: ["PEP", "Urgent", "Delhi"],
  },
  {
    slug: "confidential-sti-testing-delhi-video",
    title: "Confidential STI Testing in Delhi",
    date: "2025-09-12",
    excerpt:
      "How screening works, which tests are done, and how follow‑ups are planned—without stigma.",
    youtubeId: "3GwjfUFyY6M",
    cover: "https://picsum.photos/seed/vlog-sti/1200/700",
    tags: ["STI", "Testing", "Privacy"],
  },
];
