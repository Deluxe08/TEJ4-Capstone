const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Three",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Dilaany always had a positive attitude while working in a male dominated field.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Don Valley North Toyota - Automotive Technician",
    date: "February 2025 - June 2025",
    responsibilities: [
      "Performed routine maintenance (oil, brakes, tires) on 20+ vehicles weekly, ensuring safety and performance",
      "Utilized diagnostic software and oscilloscopes to efficiently identify faults in vehicles",
      "Provided assistance to senior technicians with complex engine rebuilds and electrical system diagnostics, fostering a supportive environment",
    ],
  },
  {
    review: "Dilaany... ’s (Insert Mr lu/ishi comment)",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Summer Robotics Camp Volunteer Lead",
    date: "July 2025",
    responsibilities: [
      "Led lessons in teaching children programming the basics of PID in FLL robots.",
      "Collaborated with the team of camp counsellors to implement lesson plans to enhance the educational experience.",
      "Developed promotional materials and community outreach strategies (e.g., digital marketing, school visits) that successfully increased camp enrollment by 10%",
    ],
  },
  {
    review: "Dilaany’s leadership style always encourages open communication with students to understand their challenges and confidence levels.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Math Tutor",
    date: "July 2025 - Present",
    responsibilities: [
      "Improved student test scores by an average of 15% through targeted instruction in algebra and geometry",
      "Simplified complex mathematical principles (e.g., algebra, statistics) into easy-to-understand terms for middle and elementary students.",
      "Mentored students, building confidence and fostering a positive attitude towards math",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Vincent Lu",
    mentions: "@vincent.lu@tdsb.on.ca",
    review:
      "Comment #2",
    imgPath: "/images/lu.png",
  },
  {
    name: "James ishiguoro",
    mentions: "@james.ishiguro@tdsb.on.ca",
    review:
      "Comment #3",
    imgPath: "/images/ishi.png",
  },
  {
    name: "Amy Chow",
    mentions: "@amy.chow@tdsb.on.ca",
    review:
      "Comment #4",
    imgPath: "/images/chow.png",
  },
  {
    name: "Peter MacKay",
    mentions: "@peterm@dvntoyota.com",
    review:
      "comment #5 Dilaany...",
    imgPath: "/images/peter.png",
  },
  {
    name: "Victor Kong",
    mentions: "@victor.kong567@gmail.com",
    review:
      "comment #6",
    imgPath: "/images/victor.png",
  },
  {
    name: "Sam Lourdson", // could also be sarmiyah.elanthirayan@tdsb.on.ca
    mentions: "@lourdson29@hotmail.com",
    review:
      "comment #1",
   // imgPath: "/images/victor.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  //logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
