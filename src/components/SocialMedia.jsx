import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://linkedin.com/in/brian-mcgaw">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/bmcgaw">
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
