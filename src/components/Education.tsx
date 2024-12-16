import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-gray-50" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">
                  Bachelor of Computer Science
                </h3>
                <p className="text-gray-600">RGPV University</p>
                <p className="text-gray-500">2011 - 2015</p>
              </div>
            </div>
            <p className="text-gray-700">
              Focus on Software Engineering and Web Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
