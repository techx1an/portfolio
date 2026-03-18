import React from "react";

function Experience() {
  return (
    <div className="mx-auto">
      <h1
        className="text-white text-center text-4xl md:text-6xl"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="100"
      >
        My Experiences
      </h1>
      {/* cart */}

      <div className=" text-white block md:flex gap-5 md:gap-8 mx-auto justify-center items-center mt-10">
        <div
          className="cart"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <div className="">
            <div className="title">
              <h4>2023-2024</h4>
              <h1>Youth Resource Development Program</h1>
              <h2>Program Assistant Volunteer</h2>
            </div>
            <div className="content">
              <h4>
                <div className="w-[15px] h-2 bg-cyan-400 mt-2 rounded-full" />
                Photographer, videographer, video editor, and graphic desinger.
              </h4>
              <h4>
                <div className="w-[15px] h-2 bg-cyan-400 mt-2 rounded-full" />
                Produced video and photo materials for social media platform
              </h4>
              <h4>
                <div className="w-[14px] h-2 bg-cyan-400 mt-2 rounded-full" />
                Assisted in organizing and implementing media projects.
              </h4>

              <h4>
                <div className="w-[18px] h-2 bg-cyan-400 mt-2 rounded-full" />
                Contributed to advocacy programs and campaigns through media
                production.
              </h4>
            </div>
          </div>
        </div>
        <div
          className="cart"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <div>
            <div className="title">
              <h4 className="">2024-2026</h4>
              <h1>Mojokor Institute</h1>
              <h2>Media Assistant</h2>
            </div>
            <div className="content">
              <h4>
                <div className="w-[15px] h-2 bg-cyan-400 mt-2 rounded-full" />
                Photographer, videographer, video editor, and graphic desinger.
              </h4>
              <h4>
                <div className="w-[15px] h-2 bg-cyan-400 mt-2 rounded-full" />
                Produced video and photo materials for social media platform
              </h4>
              <h4>
                <div className="w-[28px] h-2 bg-cyan-400 mt-2 rounded-full" />
                managing Facebook pages with ads, with a keen eye for detail and
                a talent for transforming concepts into compelling visuals.
              </h4>
              <h4>
                <div className="w-[18px] h-2 bg-cyan-400 mt-2 rounded-full" />
                Collaborated with teams to deliver high-quality projects under
                tight deadlines.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
