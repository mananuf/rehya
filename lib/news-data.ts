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
    slug: "plateau-coordinating-unit-inaugurated",
    title:
      "Plateau State Coordinating Unit inaugurated in Jos as national rollout continues",
    date: "2026-08-05",
    type: "news",
    tag: "State Rollout",
    excerpt:
      "The Plateau State Coordinating Unit of the Renewed Hope Youth Engagement was inaugurated in Jos, with the state government pledging support for youth empowerment and inclusive governance.",
    body: [
      {
        type: "p",
        text: "The Plateau State Coordinating Unit of the Renewed Hope Youth Engagement was inaugurated in Jos on 5 August 2026, continuing the programme's rollout of coordinating structures across the federation.",
      },
      {
        type: "p",
        text: "At the inauguration, the state government reaffirmed its commitment to youth empowerment and inclusive governance, while the programme's leadership set out the administration's interventions in student financing, welfare for security personnel, allocations to states and efforts to restore investor confidence.",
      },
      {
        type: "p",
        text: "The new unit is responsible for mobilisation across Plateau's 17 local government areas, working down through local government and ward-level coordinators.",
      },
      { type: "p", text: "The unit's immediate priorities are:" },
      {
        type: "ul",
        items: [
          "Induction of local government and ward coordinators across all 17 LGAs",
          "Civic education and voter-awareness activity in markets, motor parks and campuses",
          "Peace advocacy with religious and traditional institutions",
          "Signposting young people to federal skills and student financing schemes",
        ],
      },
    ],
  },
  {
    slug: "benue-executive-committee-inaugurated",
    title:
      "Benue State Executive Committee inaugurated with charge to reach every community",
    date: "2026-07-28",
    type: "news",
    tag: "State Rollout",
    excerpt:
      "Governor Hyacinth Alia, represented by Deputy Governor Dr. Sam Ode, inaugurated the Benue State Executive Committee with a charge to build an inclusive, results-driven structure across the state.",
    body: [
      {
        type: "p",
        text: "The Benue State Executive Committee of the Renewed Hope Youth Engagement was inaugurated in Makurdi by Governor Hyacinth Iormem Alia, represented by Deputy Governor Dr. Sam Ode.",
      },
      {
        type: "p",
        text: "Officials were charged to build an inclusive and results-driven structure that would reach communities, markets, religious institutions and young people throughout the state, and to mobilise young Benue people for active participation in governance.",
      },
      {
        type: "p",
        text: "The programme's standing message on conduct was repeated at the ceremony: active participation in politics, and a firm rejection of violence, hate speech, intimidation and misinformation.",
      },
      {
        type: "p",
        text: "Fidelis Unongo leads the Benue State Coordinating Unit, which covers the state's 23 local government areas.",
      },
    ],
  },
  {
    slug: "national-ward-mobiliser-induction-opens",
    title: "National ward mobiliser induction opens across the six zones",
    date: "2026-09-01",
    type: "announcement",
    tag: "Structure",
    excerpt:
      "The National Secretariat has opened a rolling induction for ward-level mobilisers, cascading through zonal and state coordinating units toward all 8,809 wards.",
    body: [
      {
        type: "p",
        text: "The National Secretariat has opened a rolling induction programme for ward-level mobilisers, running through the zonal coordinators and state coordinating units.",
      },
      {
        type: "p",
        text: "The induction covers the programme's eight pillars, the conduct expected of every coordinator, and the practical work of organising at ward level — the smallest unit of the programme's structure, of which there are 8,809 nationwide.",
      },
      {
        type: "p",
        text: "State coordinating units will publish induction schedules for their local government areas. Participation is free; the programme charges no fee for membership, registration or appointment to any position.",
      },
    ],
  },
  {
    slug: "peace-pledge-campaign-launch",
    title: "National Peace Pledge Campaign launched against political violence",
    date: "2026-08-22",
    type: "news",
    tag: "Peace",
    excerpt:
      "A nationwide pledge campaign asks young Nigerians to commit publicly against political violence, hate speech, intimidation and misinformation, anchored by religious and traditional institutions.",
    body: [
      {
        type: "p",
        text: "The programme has launched a National Peace Pledge Campaign asking young Nigerians to commit publicly against political violence, hate speech, intimidation and the spread of misinformation.",
      },
      {
        type: "p",
        text: "The campaign is anchored in each participating state by religious and traditional institutions, with state coordinating units convening pledge ceremonies at local government level.",
      },
      {
        type: "p",
        text: "Peace and non-violence is one of the programme's eight pillars. The charge against violence and hate speech has been repeated at every state inauguration to date.",
      },
    ],
  },
  {
    slug: "student-loan-clinics-expand",
    title: "Student loan application clinics expand to campuses in ten states",
    date: "2026-08-14",
    type: "news",
    tag: "Education",
    excerpt:
      "Campus clinics helping students complete federal student loan applications are expanding, run alongside institutional student affairs offices.",
    body: [
      {
        type: "p",
        text: "Application clinics for the federal student loan scheme are expanding to campuses in ten states, run by state coordinating units alongside institutional student affairs offices.",
      },
      {
        type: "p",
        text: "The clinics do not administer the scheme and do not handle any applicant funds. They help students understand eligibility, assemble documentation and complete applications to the responsible federal body.",
      },
      {
        type: "p",
        text: "Student financing has been among the administration's interventions highlighted by the programme's leadership at state inaugurations.",
      },
    ],
  },
  {
    slug: "young-farmers-clusters-benue",
    title: "Young farmers' clusters take root in Benue local governments",
    date: "2026-07-15",
    type: "news",
    tag: "Agriculture",
    excerpt:
      "Local government clusters are connecting young farmers to inputs, extension advice and buyers, with a focus on farming as an enterprise rather than a fallback.",
    body: [
      {
        type: "p",
        text: "Young farmers' clusters are being established at local government level in Benue, connecting young producers to inputs, extension advice and buyers.",
      },
      {
        type: "p",
        text: "The clusters are built around a simple proposition: farming treated as an enterprise, with the same access to advice, finance and markets that any other business would expect.",
      },
      {
        type: "p",
        text: "Agriculture and agripreneurship is one of the programme's eight pillars, and the model is planned for replication in other states as coordinating units are inaugurated.",
      },
    ],
  },
  {
    slug: "fraud-warning-appointments",
    title: "Notice: RHYE charges no fee for any appointment or registration",
    date: "2026-09-04",
    type: "announcement",
    tag: "Notice",
    excerpt:
      "The National Secretariat warns against individuals demanding payment for RHYE positions, registration or programme access. Participation is free.",
    body: [
      {
        type: "p",
        text: "The National Secretariat has been made aware of individuals soliciting payment in the programme's name, in exchange for coordinating positions, registration or access to programme activities.",
      },
      {
        type: "p",
        text: "Participation in the Renewed Hope Youth Engagement is free. The programme charges no fee for membership, registration, appointment to any coordinating position at any level, or attendance at any programme activity.",
      },
      {
        type: "p",
        text: "Anyone demanding such a payment is acting fraudulently and without authority. Report it through the Report page on this website, or to your state coordinating unit.",
      },
      {
        type: "p",
        text: "Verify every notice, appointment and invitation against this website before acting on it.",
      },
    ],
  },
  {
    slug: "eight-pillars-published",
    title: "Programme publishes the eight pillars behind every RHYE activity",
    date: "2026-08-01",
    type: "announcement",
    tag: "Structure",
    excerpt:
      "Every activity the programme runs now falls under one of eight published pillars, from civic engagement and peace to agriculture, enterprise and inclusion.",
    body: [
      {
        type: "p",
        text: "The programme has published the eight pillars under which every RHYE activity falls, giving coordinating units a common framework for planning and reporting.",
      },
      { type: "p", text: "The eight pillars are:" },
      {
        type: "ul",
        items: [
          "Civic Engagement & Governance",
          "Peace & Non-Violence",
          "Leadership & Capacity Building",
          "Digital Skills & Innovation",
          "Education & Student Support",
          "Agriculture & Agripreneurship",
          "Enterprise & Employment",
          "Inclusion — Young Women & PWDs",
        ],
      },
      {
        type: "p",
        text: "State coordinating units are asked to map their activity to these pillars so that reporting is comparable across the federation.",
      },
    ],
  },
];

export const getArticle = (slug: string) => NEWS.find((n) => n.slug === slug);
