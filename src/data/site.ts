export const site = {
  name: "Firas Freajah",
  url: "https://firasfreajah.com",
  location: "NC / NYC",
  role: "Senior Director of Technology Solutions",
  organization: "Jacob K. Javits Convention Center",
  linkedin: "https://www.linkedin.com/in/111freajah/",
  avatar: "/me.jpg",
  headline: "Technology, when it has to work live.",
  thesis: "Building software got cheap. Owning it didn’t.",
  description:
    "Technology executive for one of the busiest convention centers in the US. Live events at scale, AI adoption and governance, and business results.",
} as const;

export const impact = [
  {
    value: "10+",
    label: "years leading enterprise technology",
    pending: false,
  },
  {
    value: "100+",
    label: "large-scale, high-visibility operations supported each year",
    pending: false,
  },
  {
    value: "20%",
    label: "customer satisfaction improvement",
    pending: false,
  },
  {
    value: "25%",
    label: "increase in project win rates",
    pending: false,
  },
  {
    value: "TODO",
    label:
      "Confirmed figure for year-over-year revenue lift for technology solutions.",
    pending: true,
  },
] as const;

export const beliefs = [
  {
    index: "01",
    title: "Cheap to start",
    body: "Building software got cheap. The scarce work is owning it: reliability, adoption, and an operating model that still holds after the launch.",
  },
  {
    index: "02",
    title: "AI with an owner",
    body: "Adoption should be practical and governed. A use case, a boundary, and training belong with the rollout, not as a follow-up project.",
  },
  {
    index: "03",
    title: "Personalized, then accountable",
    body: "Software should fit the people who use it. Personalized does not mean unfinished. The result that matters is a business result.",
  },
] as const;

export const speaking = {
  show: "Cyber Business Podcast",
  status: "Coming soon",
  titleTodo: "TODO: episode title",
  linkTodo: "TODO: public link to the episode",
} as const;
