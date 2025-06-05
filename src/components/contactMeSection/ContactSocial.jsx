import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/mohdshariq01/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/mohdshariq-8589" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/_shariq______/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
