import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experiences';

const Experience = () => {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Career Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-600 ml-3">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 ml-6">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px]" />
                <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className="text-gray-600">{exp.role}</p>
                      <p className="text-gray-500">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;