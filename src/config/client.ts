export const client = {
  // Business Details
  name: "Trusted Landscaper",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bedford.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "0800 970 7157",
  email: "",
  website: "",

  // Location
  address: "Bedford",
  city: "Bedford",
  county: "",
  postcode: "",
  basedIn: "Bedford",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "3",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Joe French", rating: 5, text: "I have no hesitation recommending these people who installed my new 100’ fence in my back garden. Had a really good experience with these guys. Ultra reliable. Did exactly what they said they were going to do. Kept me informed of progress …    Resp", date: "7 months ago" },
    { name: "D F", rating: 5, text: "I'd highly recommend Marcin and the process he offers. We found Nuyard online and popped in to choose porcelain paving slabs. Marcin not only helped us choose the most suitable products, but introduced us to a referral service for choosing …  ", date: "11 months ago" },
    { name: "Minoo19", rating: 5, text: "You are a great team. You are on time hardworking and very polite. We are very happy with the jobs you have done so far. We also planning to use your services in the future.  Thank you ", date: "Edited 6 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Trusted Landscaper | Landscaper in Bedford",
    description: "Professional landscaper in Bedford. 5.0-star rated on Google. Call for a free quote.",
  },
};
