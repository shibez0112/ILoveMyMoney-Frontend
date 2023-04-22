import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-body py-5">
      <div className="container-xl">
        <div className="row">
          <div>
            <p className="d-inline fs-4 lh-3">
              Hi, I'm Toan Pham, a Software Engineer. I've worked on a variety
              of projects, including WebApp and Security, and I'm always looking
              for new and interesting challenges. My areas of expertise include
              Software Development, and I'm passionate about learning new
              things. When I'm not coding, you can find me on Instagram. If
              you're interested in working with me, feel free to contact me
              through <Link className="link text-custom-black" to={"/contact"}>this</Link>. Thanks for stopping by!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
