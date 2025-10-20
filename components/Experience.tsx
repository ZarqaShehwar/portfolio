import React from "react";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section className="py-20 w-full" id="experience">
      <h1 className="heading text-center">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="relative mt-16 border-l-2 border-purple/50 max-w-4xl mx-auto">
        {workExperience.map((item, index) => (
          <div key={item.id} className="mb-12 ml-8 relative">
            {/* Step Circle */}
            <span className="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-gradient-to-r from-[#4c1d95] to-[#9333ea] border-2 border-purple shadow-lg" />

            {/* Content Card */}
            <div className="bg-gradient-to-br from-[#04071d] to-[#0c0e23] p-6 rounded-2xl shadow-xl border border-purple/20 hover:border-purple/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{item.company}</p>
                  <p className="text-sm text-gray-500">{item.year}</p>
                </div>
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    alt={item.company}
                    className="w-12 h-12 object-contain mt-3 md:mt-0"
                  />
                )}
              </div>

              <p className="text-gray-300 mt-4">{item.desc}</p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills?.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-purple/20 text-purple font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
