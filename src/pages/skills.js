import React, { useEffect, useState } from "react";
import { skills, statData } from "../utils/static";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import SectionTitle from "../component/sectionTitle";

const Skills = () => {
  const [progress, setProgress] = useState(skills[0]?.level || 0);
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedSkill && progress < selectedSkill.level) {
        setProgress((prev) => prev + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [selectedSkill, progress]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setProgress(0); // Reset progress to 0 before starting the animation
  };

  const renderProgressBar = () => (
    <CircularProgressbar
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathColor: "#ff4901",
        textColor: "#ff4901",
        trailColor: "lightgray",
        strokeLinecap: "butt",
      })}
    />
  );

  return (
    <section id="skills" className="bg-zinc-600 h-screen w-full">
      <div
        className="text-dark-main bg-light-main grid text-left p-3"
        data-scroll
        data-scroll-section
        data-scroll-speed=".3"
      >
        <SectionTitle title={"Skills"} />
        <div className="text-2xl mb-4">Tech I am proficient with:</div>
        <div className="flex flex-wrap justify-between items-start p-8 bg-gray-100">
          <div className="flex flex-wrap justify-center w-full md:w-1/2">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={`bg-white shadow-lg rounded-lg p-4 m-4 w-60 cursor-pointer hover:border-main 
                ${
                  selectedSkill?.id === skill?.id
                    ? "border border-red-500"
                    : ""
                }`}
                onClick={() => handleSkillClick(skill)}
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  {skill.value}
                </h3>
                <p className="text-gray-500">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="h-[250px] w-[250px]">{renderProgressBar()}</div>
          </div>
        </div>

        <div className="responsive-container-block bigContainer p-4">
          <div className="responsive-container-block Container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 responsive-container-block cardContainer">
              {statData?.map((stat) => (
                <div
                  key={stat?.id}
                  className="bg-light-main border border-dark-main p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center"
                >
                  <p className="text-main text-5xl font-bold mb-2">
                    {stat?.value}
                  </p>
                  <p className="text-blk cardHeading text-lg font-semibold">
                    {stat?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
