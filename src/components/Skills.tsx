import React from 'react';
import { Code2, Palette, Database, Git, Figma } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'React', level: 90 },
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'C++', level: 85 },
      { name: 'Java', level: 88 },
      { name: 'SQL Server', level: 85 },
    ]
  },
  {
    title: "Design & Tools",
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Figma', level: 82 },
      { name: 'Git', level: 87 },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-transparent bg-clip-text inline-block">
            My Superpowers
          </h2>
          <p className="text-gray-600 mt-4">Technologies and tools I love working with</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} 
                 className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}