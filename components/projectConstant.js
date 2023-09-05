import vstreamImg from "@/public/images/vStream.jpg";
import letsChatImg from "@/public/images/letsChat.jpg";
import bookRecImg from "@/public/images/bookRec.jpg";
import comingSoonImg from "@/public/images/commingSoon.png";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const projectsData = [
  {
    title: "VStream",
    backgroundImg: vstreamImg,
    projectUrl: "https://vstreams.netlify.app/",
    // tech: "React JS, Firebase, Tailwind",
    tech: [
        {name:"React JS"},
        {name: "Tailwind CSS"}],
  },
  {
    title: "Let's Chat",
    backgroundImg: letsChatImg,
    projectUrl: "https://velvety-haupia-f41530.netlify.app/",
    tech: "React JS, Firebase, Tailwind",
    tech: [
        {name:"React JS"},
        {name: "Firebase"},
        {name: "Tailwind"},
    ],
  },
  {
    title: "NextBook",
    backgroundImg: bookRecImg,
    projectUrl: "https://github.com/sDEV-eloper/nextBook",
    tech: "Machine Learning, Python, Flask, Html, Css",
    tech: [
        {name:"Machine Learning"},
        {name: "Python"},
        {name: "Flask"},
        {name: "HTML"},
        {name: "CSS"},
    ],
  },
  {
    title: "Comming...",
    backgroundImg: comingSoonImg,
    projectUrl: "",
    tech: [
        {name:"React JS"},
        {name: "Firebase"},
        {name: "Tailwind"},
    ],
  },
];
