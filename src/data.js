import { AiFillHome } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";

export const navBarData = [
  { title: "Home", icon: AiFillHome  },
  { title: "About", icon: FaExclamationCircle  },
  { title: "Works", icon: MdOutlineWork  },
  { title: "Services", icon: GrTechnology  },
  { title: "Contact", icon: RiContactsFill  },
];

export const myWorksData = [
  {
    id: 646,
    title: "Energy Saver - Website Design",
    type: "Web Design",
    image: "url",
    btn: "Component",
  },

  {
    id: 647,
    title: "Creative Agency Design",
    type: "Landing Page Design",
    image: "url",
    btn: "Component",
  },

  {
    id: 648,
    title: "Financial Application Design",
    type: "Mobile App Design",
    image: "url",
    btn: "Component",
  },
];

export const myOfferings = [
  {
    id: 649,
    title: "Web Design",
    text: "Passionate web designer with 3 years of experience. user-centric, visually captivating. lets create your digital masterpiece together",
  },

  {
    id: 649,
    title: "UI/UX Design",
    text: "Experienced UI/UX designer, intuitive, delightfull digital experiences. let's design user-centered solutions that resonate and inspire.",
  },
];

export const myWorks = [
  {
    id: 650,
    img_url: [
      "src/assets/images/myWorks/dashboard/dashboard.webp",
      "src/assets/images/myWorks/dashboard/dashboard_2.webp",
    ],
    title: "Admin Dashboard",
    type: "Only styling admin dashboard",
  },
  {
    id: 651,
    img_url: [
      "src/assets/images/myWorks/ochi/ochi.webp",
      "src/assets/images/myWorks/ochi/ochi_2.webp",
    ],
    title: "Ochi",
    type: "Animation project",
  },
  {
    id: 651,
    img_url: ["src/assets/images/myWorks/shoeStore/filtering.webp"],
    title: "Shoe Store",
    type: "Advanced Filtering",
  },
];
