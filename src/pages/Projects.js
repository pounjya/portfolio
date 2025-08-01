import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "پروژه فروشگاه آنلاین",
    description: "فروشگاه ساده با React و Redux + طراحی ریسپانسیو با Tailwind",
    image: "/images/shop-demo.png",
    github: "https://github.com/username/shop",
    demo: "https://yourshopdemo.com",
  },
  {
    title: "پروژه Weather App",
    description: "نمایش آب و هوا با API و طراحی تمیز",
    image: "/images/weather-demo.png",
    github: "https://github.com/username/weather",
    demo: "https://yourweatherdemo.com",
  },
  {
    title: "پروژه فروشگاه آنلاین",
    description: "فروشگاه ساده با React و Redux + طراحی ریسپانسیو با Tailwind",
    image: "/images/shop-demo.png",
    github: "https://github.com/username/shop",
    demo: "https://yourshopdemo.com",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects" className="bg-[#07080d] min-h-screen py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-12"
          >
            پروژه‌ها
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#0f111d] rounded-xl shadow-lg overflow-hidden border border-cyan-400/20 hover:shadow-cyan-400/10 transition transform hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="px-4 py-2 bg-cyan-400 text-[#0f111d] font-semibold rounded-lg hover:bg-cyan-300 transition"
                    >
                      مشاهده دمو
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-[#0f111d] transition"
                    >
                      سورس کد
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
