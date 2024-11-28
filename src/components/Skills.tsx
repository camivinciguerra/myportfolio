import React from 'react';
import { Code2, Palette, Database, Git, Figma } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'C++' },
      { name: 'Java' },
      { name: 'SQL Server' },
    ]
  },
  {
    title: "Design & Tools",
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: 'Tailwind CSS' },
      { name: 'Figma' },
      { name: 'Git' },
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
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="text-gray-700">
                    {skill.name}
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
