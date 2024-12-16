import React from 'react';
import { Award } from 'lucide-react';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <section className="py-20 bg-white" id="achievements">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-yellow-500" />
                <div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.organization}</p>
                </div>
              </div>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;