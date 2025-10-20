import { minify } from "next/dist/build/swc";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently working on improving my skills in advanced Next.js, backend integrations, and Flutter app development.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
{
  id: 1,
  mini_title: "Digital Invoicing System",
  title: "Digital Invoicing System (FBR Integrated)",
  des: "A secure and efficient invoicing system integrated with FBR APIs, allowing users to create, post, and manage invoices digitally with automated tax reporting.",
  img: "/digital_invoicing.jpg",
  iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  link: "https://di.tmrconsult.com/login",
}
,
 {
  id: 2,
  mini_title: "SaaS Tools Platform",
  title: "Nifawow – SaaS Tools Platform",
  des: "A modern SaaS project built with Next.js and TypeScript that offers a wide range of online tools for file conversion, editing, and other daily tasks — all in one simple and user-friendly platform.",
  img: "/nifawow.png",
  iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  link: "https://www.nifawow.com/",
}
,
 {
  id: 3,
  mini_title: "GSAP Frontend Project",
  title: "Animated Cocktail UI – GSAP Frontend Project",
  des: "A visually engaging frontend project built with GSAP, showcasing smooth animations and creative UI transitions for a cocktail-themed website.",
  img: "/gsap-cocktail.png",
  iconLists: ["/re.svg", "/tail.svg", "/gsap.svg"],
  link: "https://gsap-cocktail-tau.vercel.app/",
},
  {
    id: 4,
    mini_title: "3D Animated Website",
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IT Tutor",
    company: "Iqbal College of Sciences",
    year: "2021 – 2022",
    desc: "Taught programming fundamentals including HTML, CSS, JavaScript, and Python. Helped students develop logic-building and real-world project development skills.",
    thumbnail: "/exp1.svg",
    skills: ["HTML", "CSS", "JavaScript", "Python", "Teaching"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "TMR Consulting",
    year: "2022 – 2025",
    desc: "Worked on creating modern, responsive, and pixel-perfect UIs using React.js and Tailwind CSS. Collaborated with backend teams to improve performance and UX.",
    thumbnail: "/exp2.svg",
    skills: ["React.js", "Tailwind CSS", "UI/UX", "API Integration", "Git"],
  },
  {
    id: 3,
    title: "Next.js Full Stack Developer",
    company: "MarkInfiniti Technologies",
    year: "2023 – 2024",
    desc: "Developed full-stack web applications using Next.js, Node.js, and MongoDB. Focused on building fast, scalable, and SEO-optimized platforms with a smooth UI experience.",
    thumbnail: "/exp3.svg",
    skills: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  // {
  //   id: 4,
  //   title: "Flutter Developer (Freelance)",
  //   company: "Remote",
  //   year: "2024 – Present",
  //   desc: "Designed and developed cross-platform mobile applications using Flutter and Firebase. Delivered sleek UI and robust backend integrations for multiple freelance clients.",
  //   thumbnail: "/exp4.svg",
  //   skills: ["Flutter", "Dart", "Firebase", "UI/UX", "App Deployment"],
  // },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/ZarqaShehwar/"
  },
  
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/zarqa-shehwar-2b4b621b4/"
  },
];
