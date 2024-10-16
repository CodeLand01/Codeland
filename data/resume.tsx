import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "CODELAND",
  initials: "CL",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Your partner in creating seamless, efficient digital platforms.",
  summary:
    "With over 5 years of collective experience in the tech and creative industries, our team has partnered with diverse clients to deliver innovative, functional, and visually engaging digital solutions.",
  avatarUrl: "/codeland.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Dart",
    "Docker",
    "Php",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    tel: "https://wa.me/+2348133127067",
    social: {
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  apps: [
    {
      title: "Elite Ndolo",
      href: "/",
      dates: "September 2023 - February 2024",
      active: true,
      description:
        "Designed & Developed a premier platform tailored for African professionals and the diaspora, enabling seamless dating, networking, and community engagement with 100% privacy and free premium features.",
      technologies: [
        "Flutter",
        "PHP",
        "GraphQL",
        "Firebase",
        "WebSockets",
        "AWS",
        "Google Analytics",
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/ng/app/elite-ndolo-afro-dating/id6474093349",
          icon: <Icons.appstore className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.elitendolo.app.prod",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/mockup/1.png",
      image2: "/mockup/2.png"
    },
    {
      title: "Haayaa",
      href: "/",
      dates: "June 2023 - October 2023",
      active: true,
      description:
        "Designed & Developed a platform for businesses to connect via phone numbers and usernames, enabling multi-channel selling, in-app messaging, streamlined order management, and global marketplace integration.",
      technologies: [
        "Flutter",
        "GraphQL",
        "PostgreSQL",
        "Firebase Authentication",
        "Paystack",
        "AWS",
        "Twilio",
        "Google Analytics"
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/ng/app/haayaa-shop-sell-earn/id1631151890",
          icon: <Icons.appstore className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=africa.haayaa",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/mockup2/1.png",
      image2: "/mockup2/2.png"
    },
    {
      title: "ClubHouse",
      href: "/",
      dates: "February 2024 - August 2024",
      active: true,
      description:
        "Designed & Developed a platform where users can join live conversations, connect with friends, and explore personalized topics. Features include real-time discussions, the ability to listen or speak up, private messaging, hosting rooms, and curating a personalized feed of rooms based on user interests.",
      technologies: [
        "Flutter",
        "Elixir",
        "Phoenix",
        "PostgreSQL",
        "WebRTC",
        "Firebase Authentication",
        "AWS",
        "Google Analytics",
        "SSL/TLS",
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/ng/app/clubhouse/id1503133294",
          icon: <Icons.appstore className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.clubhouse.app",
          icon: <Icons.playstore className="size-3" />,
        },
      ],
      image: "/mockup3/1.png",
      image2: "/mockup3/2.png"
    },
  ]
  } as const;
