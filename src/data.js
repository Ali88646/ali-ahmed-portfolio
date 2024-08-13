import { AiFillHome } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";

export const navBarData = [
  { title: "Home", icon: AiFillHome },
  { title: "About", icon: FaExclamationCircle },
  { title: "Works", icon: MdOutlineWork },
  { title: "Services", icon: GrTechnology },
  { title: "Contact", icon: RiContactsFill },
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
      "/images/myWorks/dashboard/dashboard.webp",
      "/images/myWorks/dashboard/dashboard_2.webp",
    ],
    title: "Admin Dashboard",
    type: "Only styling admin dashboard",
    link: "https://chakra-admin-dashboard.netlify.app/",
  },
  {
    id: 651,
    img_url: [
      "public/images/myWorks/hyphen-systems/Hyphen-Systems-1.webp",
      "public/images/myWorks/hyphen-systems/hyphen-systems-2.webp",
      "public/images/myWorks/hyphen-systems/hyphen-systems-3.webp",
      "public/images/myWorks/hyphen-systems/hyphen-systems-4.webp",
      "public/images/myWorks/hyphen-systems/hyphen-systems-5.webp",
      "public/images/myWorks/hyphen-systems/hyphen-systems-6.webp",
    ],
    title: "Hyphen-Systems",
    type: "Static Website",
    link: "https://hyphen-systems.netlify.app/",
  },
  {
    id: 651,
    img_url: ["/images/myWorks/shoeStore/filtering.webp"],
    title: "Shoe Store",
    type: "Advanced Filtering",
    link: "#",
  },
];
