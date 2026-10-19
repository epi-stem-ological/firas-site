export const site = {
  name: "Firas Freajah",
  url: "https://firasfreajah.com",
  role: "Senior Director of Technology Solutions",
  linkedin: "https://www.linkedin.com/in/111freajah/",
  avatar: "/me.jpg",
  headline: "Same building. Very different job.",
  description: "I build technology for the people who use it.",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#speaking", label: "Speaking" },
  { href: "#contact", label: "Let's talk" },
] as const;

export const about = [
  "I build technology for the people who use it. At the Javits Center, that's staff, customers, and partners. They're the hosts, and they should be the ones who benefit most.",
  "In 2015, I bought a one-way ticket and started at Javits as a business and marketing analyst on the event side of IT. Today I'm Senior Director of Technology Solutions.",
  "Same building. Very different job.",
  "Along the way I learned where the hard part is. It's people. Getting a team and an entire organization to change how they work – while 160+ high-visibility events a year keep moving – is the real job. There are no do-overs.",
  "That's shaped how I think about AI. I'm not doing AI for the sake of doing AI. It belongs in the background, so people can do their best work up front. When a tool only almost fits, we look at building one that does. Twice now, that's saved real money every year.",
  "Here's what I believe. AI is creating demand for more upskilled people in every domain – hands-on work and judgment calls alike. My job is to help people get there: Curiosity → Fluency → Instinct.",
  "I hold a CISSP and a business degree from the University of South Carolina. I speak English, Spanish, and Arabic.",
] as const;

export const speaking = {
  heading: "Speaking & podcasts",
  intro: "Happy to talk shop. Bring the hard questions.",
  show: "Cyber Business Podcast",
  status: "Coming soon",
  topicsHeading: "Topics I talk about",
  topics: [
    "AI adoption that keeps people at the center: Curiosity → Fluency → Instinct",
    "Why AI is creating demand for more upskilled people",
    "Build or buy in the AI era: the end of almost-fits",
    "Leading technology where there are no do-overs",
    "From analyst to tech executive: systems, people, and change",
  ],
  inquiry: "Send an inquiry",
} as const;

export const contact = {
  heading: "Let's talk",
  body: "I'm open to senior technology leadership roles – CIO, CTO, or VP of Technology – and to advisory conversations about AI adoption, enterprise technology, and leading people through change.",
  formNote: "The best way to reach me is on LinkedIn.",
  primary: "Connect on LinkedIn",
  secondary: "Send an inquiry",
} as const;
