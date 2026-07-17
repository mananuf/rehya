export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  type: "news" | "announcement";
  excerpt: string;
  tag: string;
  body: ArticleBlock[];
};

export const NEWS: NewsArticle[] = [
  {
    slug: "roadmap-summit",
    title:
      "Board adopts Strategic Development Roadmap ahead of maiden regional summit",
    date: "2026-06-10",
    type: "news",
    tag: "Strategy",
    excerpt:
      "The Governing Board has approved the Commission's Strategic Development Roadmap, to be unveiled at the maiden North Central Regional Stakeholders Development Summit and aligned with the NRDP 2026–2030.",
    body: [
      {
        type: "p",
        text: "The Governing Board of the North Central Development Commission has approved the Commission's Strategic Development Roadmap, the master framework that will guide its interventions with clear priorities, timelines and performance indicators.",
      },
      {
        type: "p",
        text: "The Roadmap is being aligned with the National Regional Development Policy (NRDP) 2026–2030 and will be unveiled at the maiden North Central Regional Stakeholders Development Summit, bringing together state governments, the FCT Administration, traditional institutions, civil society and development partners.",
      },
      { type: "p", text: "Key pillars of the Roadmap include:" },
      {
        type: "ul",
        items: [
          "Agriculture and agro-industrialisation as the region's economic engine",
          "Peace, security support and the rehabilitation of conflict-affected communities",
          "Infrastructure and regional connectivity",
          "Responsible solid-minerals development",
          "Human capital — health, education, and youth and women's empowerment",
          "Ecology, flood resilience and erosion control",
        ],
      },
      {
        type: "p",
        text: "The Commission invites stakeholders across the region to engage with the Roadmap process through its state liaison offices and this website.",
      },
    ],
  },
  {
    slug: "mining-jobs-partnership",
    title: "FG and NCDC move to boost North Central mining and create jobs",
    date: "2026-04-13",
    type: "news",
    tag: "Solid Minerals",
    excerpt:
      "The Commission is partnering with the Federal Ministry of Solid Minerals Development and state governments to develop community-based mining cooperatives across the zone's mineral belts.",
    body: [
      {
        type: "p",
        text: "The Federal Government and the North Central Development Commission are working together to unlock the North Central zone's solid-minerals potential and create jobs for host communities.",
      },
      {
        type: "p",
        text: "Under the partnership with the Federal Ministry of Solid Minerals Development and state governments, the Commission will:",
      },
      {
        type: "ul",
        items: [
          "Support the formation of community-based mining cooperatives, formalising artisanal miners with training, safety standards and equipment",
          "Promote responsible and sustainable mining practices across the zone's lithium, tin, barite, iron-ore and coal belts",
          "Strengthen local content and value addition so mineral wealth benefits the communities that host it",
        ],
      },
      {
        type: "p",
        text: "The Commission also reiterated its statutory mandate to assess and report on projects executed in the zone by mineral-extracting and mining companies, ensuring extractive activity translates into visible community development.",
      },
    ],
  },
  {
    slug: "strategy-retreat-spring",
    title: "NCDC holds strategy retreat with SPRiNG programme in Lafia",
    date: "2026-03-12",
    type: "news",
    tag: "Partnerships",
    excerpt:
      "A two-day retreat organised with the UK FCDO-funded Strengthening Peace and Resilience in Nigeria (SPRiNG) programme shaped the Commission's approach to peacebuilding and development planning.",
    body: [
      {
        type: "p",
        text: "The Commission held a two-day strategy retreat in Lafia in collaboration with the Strengthening Peace and Resilience in Nigeria (SPRiNG) programme, funded by the United Kingdom's Foreign, Commonwealth and Development Office (FCDO).",
      },
      {
        type: "p",
        text: "The retreat brought the Governing Board and management together with development partners to shape the Commission's strategic direction, with sessions on:",
      },
      {
        type: "ul",
        items: [
          "Conflict-sensitive development planning and peacebuilding",
          "Designing empowerment programmes for youths, women and persons with disabilities",
          "Sustainable, community-based approaches to solid-minerals development",
          "Monitoring, evaluation and evidence-based delivery",
        ],
      },
      {
        type: "p",
        text: "Outcomes from the retreat feed directly into the Commission's Strategic Development Roadmap, which is being aligned with the National Regional Development Policy (NRDP) 2026–2030.",
      },
    ],
  },
  {
    slug: "senate-approves-2026-budget",
    title: "Senate approves ₦140 billion 2026 budget for the Commission",
    date: "2026-02-16",
    type: "news",
    tag: "Budget",
    excerpt:
      "The National Assembly has approved the Commission's ₦140 billion appropriation for the 2026 fiscal year — about 86% of it capital expenditure — and urged priority focus on agriculture and security.",
    body: [
      {
        type: "p",
        text: "The Senate has approved a ₦140 billion budget for the North Central Development Commission for the 2026 fiscal year, comprising approximately 86% capital expenditure with the balance for personnel and overheads.",
      },
      {
        type: "p",
        text: "In adopting the report of the Senate Committee on the North Central Development Commission, lawmakers urged the Commission to give agriculture “pride of place” in its interventions, leveraging the region's vast farming potential, and to provide logistical and strategic support to security agencies working to stabilise affected communities.",
      },
      {
        type: "p",
        text: "The Senate also noted the gap between the Commission's approved budget and its current monthly takeoff releases, and called on the Federal Government to improve funding flows so the Commission can deliver its capital programme.",
      },
      {
        type: "p",
        text: "The Commission thanked the National Assembly for its support and reaffirmed its commitment to transparent, verifiable project delivery across the six states and the FCT.",
      },
    ],
  },
  {
    slug: "lafia-headquarters",
    title: "Commission takes possession of Lafia headquarters",
    date: "2025-10-06",
    type: "announcement",
    tag: "Announcement",
    excerpt:
      "The Nasarawa State Government has donated an office complex in Lafia to serve as the Commission's national headquarters.",
    body: [
      {
        type: "p",
        text: "The North Central Development Commission has taken possession of its national headquarters in Lafia, Nasarawa State, following the donation of an office complex by the Nasarawa State Government.",
      },
      {
        type: "p",
        text: "The Commission expresses its profound gratitude to the Government and people of Nasarawa State for this contribution to the take-off of the Commission.",
      },
      {
        type: "p",
        text: "Management and secretariat operations are now domiciled at the Lafia headquarters, while liaison offices across the member states and the Federal Capital Territory are being established in phases.",
      },
      {
        type: "p",
        text: "All official correspondence should be directed to the Commission's headquarters in Lafia or through the contact channels on this website.",
      },
    ],
  },
  {
    slug: "board-inauguration",
    title: "Governing Board of the NCDC inaugurated in Abuja",
    date: "2025-08-28",
    type: "news",
    tag: "Governance",
    excerpt:
      "The 19-member pioneer Governing Board of the North Central Development Commission has been inaugurated, with Barr. Cosmas Tenenge Akighir as Chairman and Dr. Cyril Yilten Tsenyil as Managing Director/CEO.",
    body: [
      {
        type: "p",
        text: "The 19-member pioneer Governing Board of the North Central Development Commission was inaugurated on 28 August 2025 by the Honourable Minister of Regional Development, Engr. Abubakar Momoh, following Senate confirmation of the nominees in June.",
      },
      {
        type: "p",
        text: "Barr. Cosmas Tenenge Akighir (Benue State) serves as Chairman of the Governing Board, with Dr. Cyril Yilten Tsenyil (Plateau State), a chartered accountant and former Accountant-General of Plateau State, as pioneer Managing Director and Chief Executive Officer.",
      },
      {
        type: "p",
        text: "The Board's composition follows the NCDC (Establishment) Act 2024, with executive directors and members representing the states of the North Central zone and the other geopolitical zones of the federation.",
      },
      {
        type: "p",
        text: "Speaking at the inauguration, the Minister charged the Board to deliver visible, verifiable development to the people of the North Central region, describing the Commission as a key vehicle of the administration's regional development agenda.",
      },
      {
        type: "p",
        text: "The Board has since constituted operational committees and commenced work on the Commission's Strategic Development Roadmap.",
      },
    ],
  },
];

export const getArticle = (slug: string) => NEWS.find((n) => n.slug === slug);
