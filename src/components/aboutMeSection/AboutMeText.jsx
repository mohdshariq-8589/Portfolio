import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
         I’m Mohd Shariq, a full-stack developer with a passion for building modern, user-friendly web applications. I mainly work with the MERN stack — MongoDB, Express.js, React, and Node.js — and love creating clean, responsive UIs using tools like Tailwind CSS and Zustand. On the backend, I enjoy working with databases, APIs, and integrations like Stripe and Cloudinary. I’ve recently completed my MCA from MMMUT, Gorakhpur, and I’m always looking to learn new things and take on exciting projects
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
