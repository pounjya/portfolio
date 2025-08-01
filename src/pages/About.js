import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Git",
  "Github",
  "Figma",
  "Next.js"
];

const About = () => {
  return (
    <section id="about" className="bg-[#07080d] min-h-screen py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-10"
        >
          درباره من
        </motion.h2>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="../style/Imageme3.jpg"
              alt="پروفایل"
              className="w-64 h-64 rounded-2xl object-cover shadow-xl border border-cyan-400/20"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl text-gray-300 mb-4 font-semibold">
              سلام! من پویا نجاتی زادگانم 👋
            </h3>
            <p className="text-gray-400 leading-relaxed">
              من یک توسعه دهنده فرانت اند با علاقه شدید به طراحی رابط های
              کاربردی خلاقانه و تمیز و همچنین تجربه های جدید و یادگیری چیزای
              تازه ام.
            </p>
            <p className="text-gray-400 mt-4">
              زمان‌هایی که پای کد نیستم، توی دنیای طراحی، موزیک و پروژه‌های
              خلاقانه غرق میشم 🎧🎨@@@@@@@@@
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl text-cyan-400 mb-6 font-bold">مهارت‌ها</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#0f111d] border border-cyan-400/30 text-white rounded-full text-sm shadow-md hover:bg-cyan-400 hover:text-[#0f111d] transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
