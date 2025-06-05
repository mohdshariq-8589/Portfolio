import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Care Connect",
    year: "Apr 2025",
    align: "right",
    image: "../../public/images/care-connect.jpg",
    link: "https://github.com/mohdshariq-8589/CareConnect",
  },
  {
    name: "Heart Sync",
    year: "Feb 2025",
    align: "left",
    image: "../../public/images/heart-sync.png",
    link: "https://github.com/mohdshariq-8589/HeartSync",
  },
  {
    name: "Prestige Enclave",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/real-estate.webp",
    link: "https://github.com/mohdshariq-8589/Prestige-Enclave",
  },
  {
    name: "Hire Hub",
    year: "May2024",
    align: "left",
    image: "../../public/images/job-portal.jpg",
    link: "https://github.com/mohdshariq-8589/Hire-Hub",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
