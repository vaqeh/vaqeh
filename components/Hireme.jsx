import React from "react";
import hireMe from "/assets/images/hireMe.png";
import Image from "next/image"

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          Hire me for your next project! As a skilled front-end developer with expertise in JavaScript, ReactJS, Next.js, and Tailwind CSS, I am equipped to deliver outstanding results. I have a proven track record of creating responsive and interactive user interfaces that elevate user experiences. My knowledge of MongoDB further enhances my ability to handle data management tasks. With a strong work ethic and a passion for innovation, I am ready to tackle any challenge that comes my way. Don"t miss the opportunity to collaborate with me on your project. Let"s create something amazing together!
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <Image
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
