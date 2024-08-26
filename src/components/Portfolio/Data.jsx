import Work1 from "../../assets/Work1.png";
import Work2 from "../../assets/Work2.png";
import Work3 from "../../assets/Work3.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Marketing Dashboard",
    category: "Business Analysis",
    description: "A comprehensive marketing dashboard created using React and D3.js to visualize key marketing metrics and insights.",
    date: "January 2024",
    technologies: ["React", "D3.js", "CSS", "HTML"],
    link: "https://example.com/marketing-dashboard", // Link to project demo or repository
  },
  {
    id: 2,
    image: Work2,
    title: "Commercial Dashboard",
    category: "Data Analytics",
    description: "A commercial dashboard that helps analyze sales data and forecast trends using advanced data visualization techniques.",
    date: "February 2024",
    technologies: ["React", "Chart.js", "Node.js", "Express"],
    link: "https://example.com/commercial-dashboard",
  },
  {
    id: 3,
    image: Work3,
    title: "Bidder",
    category: "AI & Data Science",
    description: "An AI-powered bidding platform designed to optimize the bidding process in real-time auctions.",
    date: "March 2024",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    link: "https://example.com/bidder",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Business Analysis",
  },
  {
    name: "Data Analytics",
  },
  {
    name: "AI & Data Science",
  },
  {
    name: "Others",
  },
];