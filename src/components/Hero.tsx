import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-white">
          <h1 className="text-5xl font-bold mb-6">Front-End Developer</h1>
          <h2 className="text-3xl text-gray-300 mb-4">
            With 8+ Years of Experience
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Crafting modern web experiences with React, optimizing performance,
            and delivering scalable solutions with clean architecture.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Innovative-dev"
              target="_blank"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ram-meena-/"
              target="_blank"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:raampm1023@gmail.com"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-90"></div>
            <img
              src="/avatar.jpeg"
              alt="Professional headshot"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
