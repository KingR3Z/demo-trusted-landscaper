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
    { name: "Peter Banks", rating: 5, text: "⭐⭐⭐⭐⭐ 5 Stars  I had a fantastic experience with Trusted Landscaper. I’ve always been a bit nervous about hiring tradespeople after being let down in the past, so finding the right people to completely transform my garden felt stressful at first. Trusted Landscaper made the whole process so much easier.  They connected me with the right professionals quickly, and knowing the landscapers were hand-selected and properly vetted gave me real peace of mind. It removed that uncertainty of not knowing who you’re hiring. The service being completely free to use was also a huge bonus.  The entire process was straightforward and stress-free, and the team they helped me find have completely transformed my garden, it’s better than I imagined. I’d highly recommend Trusted Landscaper to anyone in Bedfordshire or Buckinghamshire who wants reliable, accredited professionals without the usual hassle of searching blindly.  A genuinely excellent service from start to finish.", date: "a month ago", badge: "Local Guide" },
    { name: "Minoo19", rating: 5, text: "You are a great team. You are on time hardworking and very polite. We are very happy with the jobs you have done so far. We also planning to use your services in the future.  Thank you", date: "Edited 6 months ago", badge: "Local Guide" },
    { name: "Joe French", rating: 5, text: "I have no hesitation recommending these people who installed my new 100’ fence in my back garden. Had a really good experience with these guys. Ultra reliable. Did exactly what they said they were going to do. Kept me informed of progress and had a very positive, can-do attitude. And boy did they work hard! They had to remove three trees, excavate a huge amount of mature buddleia, brambles and ivy from along the 100’ length of the broken old fence that they then removed, and then they put the new one up perfectly. All in just four days, scheduled to suit my own timetable. It was also a very reasonable price. I would not hesitate to get them back. They had already been recommended to us, and I can see why.", date: "7 months ago" },
    { name: "Sunny Singh", rating: 5, text: "Really easy dealing with Martin to get the our garden landscaped by one of his trusted landscapers. Very happy with the job and the garden now looks lovely.", date: "9 months ago" },
    { name: "D F", rating: 5, text: "I'd highly recommend Marcin and the process he offers. We found Nuyard online and popped in to choose porcelain paving slabs. Marcin not only helped us choose the most suitable products, but introduced us to a referral service for choosing an installer. This whole process worked really well and our patio has just been completed to a high standard. We are very pleased with the result.", date: "11 months ago" },
    { name: "stamityle", rating: 5, text: "Great platform that matches you with people who are genuinely interested in your project which makes it super easy to find the right landscaper. We were connected with 3 contractors as requested. The landscaper we selected completed the work to a high standard and at very reasonable budget.", date: "a year ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Trusted Landscaper | Landscaper in Bedford",
    description: "Professional landscaper in Bedford. 5.0-star rated on Google. Call for a free quote.",
  },
};
