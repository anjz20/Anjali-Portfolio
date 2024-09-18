import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://x.com/Anjalisharma_90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/anjali-sharma-3b58961b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://leetcode.com/u/Anjz2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="text-2xl text-orange-500" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/anjz20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          {/* <a
            className="inline-block mx-2"
            href="https://www.instagram.com/sahhh1l"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a> */}
        {/* </div>
        <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://dev.to/kiet7uke"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev
          </a> */}
          {/* <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://devpost.com/19btcse69?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devpost
          </a> */}
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://leetcode.com/u/Anjz2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leetcode
          </a>
          {/* <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://devfolio.co/@KIET7UKE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devfolio
          </a> */}
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.google.com/file/d/14Wzm7a5qc2A1NUiJlD5vhHJejiBfZOlo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/anjz20"
              className="text-primary hover:underline"
              target="blank"
            >
              Anjali Sharma
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
