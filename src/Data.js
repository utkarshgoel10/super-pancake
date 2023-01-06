import { FaTwitter, FaYoutubeSquare, FaNodeJs, FaPhp, FaPython, FaReact, FaSass, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript1, DiLinux } from "react-icons/di";
import { SiExpress, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaLinkedin />,
  <FaTwitter />,
  <FaInstagram />,
  <FaYoutubeSquare />
]
export const socialLinks = [
  "https://www.linkedin.com/in/goelutkarsh/",
  "https://twitter.com/Utkarshgoel_10",
  "https://www.instagram.com/utkarsh_goel.10/",
  "https://www.youtube.com/channel/UCStJJmtgJnLoTKBRi9cOQSg"
]
export const bios = [
  // {
  //   id: 1,
  //   icon: <FaUser />,
  //   key: "Name",
  //   value: "Utkarsh Goel"
  // },  
  // {
  //   id: 3,
  //   icon: <FaPaperPlane />,
  //   key: "Mail",
  //   value: "goelutkarsh7u@gmail.com"
  // },
  // {
  //   id: 2,
  //   icon: <FaSearchLocation />,
  //   key: "Location",
  //   value: "Remote"
  // }
]

export const icons = [  
   <DiJavascript1 />, <FaReact />, <FaNodeJs />, <SiExpress />, 
  <SiNextdotjs />, <FaPhp />, <FaPython />, <FaSass />, 
  <SiMongodb />, <SiMysql />, <VscAzure />, <DiLinux />
]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Technical Lead",
    company: "Salaah Mentor Community"
  },
  {
    di: 2,
    year: "2022",
    position: "Software Engineer",
    company: "AIP SG PTE. LTD."
  },
  {
    id: 3,
    year: "2021",
    position: "Web Developer",
    company: "Bending Tech"
  }
]
export const finishes = [
  {
    id: 1,
    number: '1',
    itemName: "Year Of Experience"
  },
  {
    id: 2,
    number: "150+",
    itemName: "Developers Trained"
  },
  {
    id: 3,
    number: "5+",
    itemName: "Dev & Company referred"
  },
  {
    id: 4,
    number: "5+",
    itemName: "Projects completed"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Salaah",
    category: "Freelance",
    github: "https://github.com/salaah-community/Salaah",
    demo: "http://salaah.org.in/"
  },
  {
    id: 2,
    img: work2,
    name: "Logistics Dashboard",
    category: "Contest",
    github: "https://github.com/Rashmi1526/TECHNOEC__2",
    demo: "https://technoec-prob2.vercel.app/"
  },
  {
    id: 3,
    img: work3,
    name: "ChatBizz",
    category: "Mern",
    github: "https://github.com/utkarshgoel10/ChatBizz",
    demo: "https://github.com/utkarshgoel10/ChatBizz"
  },
  {
    id: 4,
    img: work4,
    name: "Coin Finder",
    category: "Contest",
    github: "https://github.com/utkarshgoel10/CryptoSearch",
    demo: "https://mycrypto-finder.netlify.app/"
  },
  {
    id: 5,
    img: work5,
    name: "JotLog",
    category: 'Mern',
    github: "https://github.com/utkarshgoel10/JotLog",
    demo: "https://github.com/utkarshgoel10/JotLog"
  },
  {
    id: 6,
    img: work6,
    name: "FYB",
    category: "Freelance",
    github: "https://github.com/utkarshgoel10/FybHome",
    demo: "https://utkarshgoel10.github.io/FybHome/"
  }
]


export const workNavs = [
  "All", "Mern", "Freelance", "Contest"
]

export const contacts = [
  // {
  //   id: 1,
  //   icon: <FaMapMarkerAlt />,
  //   infoText: "India/Remote"
  // },
  // {
  //   id: 2,
  //   icon: <FaPaperPlane />,
  //   infoText: "goelutkarsh7u@gmail.com"
  // }
]
