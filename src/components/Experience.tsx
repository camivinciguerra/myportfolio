import React from 'react';
import { Briefcase, Award, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Process and Quality Improvement Intern',
    company: 'YPF S.A.',
    period: 'September 2024 - Present',
    description: 'My responsibilities include identifying opportunities for improvement, optimizing processes, managing non-quality costs, automating workflows, using collaboration tools, performing data analysis, and participating in quality audits. I also develop solutions using SharePoint and utilize Power BI for data analysis and reporting.',
  },
  {
    title: 'E-commerce Operations Manager',
    company: 'Dprom',
    period: '2020 - 2024',
    description: 'I oversaw strategies to improve the performance of the online stores, including product and promotion updates. I managed sales of merchandising products, collaborating with the design team and ensuring timely production and quality standards. I coordinated product supply with suppliers, managed e-commerce inventory, and conducted audits to maintain accuracy. Additionally, I ensured proper warehouse storage and handled the billing process for accurate transactions.',
  },
];

const awards = [
  {
    title: 'Winner for <Code for Good /> 2024',
    description: 'Awarded by JPMorgan Chase for developing an innovative solution focused on creating a positive social impact through technology. The project was recognized for its ability to address pressing challenges in education, fostering collaboration and sustainability. This recognition highlights the team dedication to using coding and technology to drive change and improve communities, exemplifying excellence in social impact initiatives within the tech industry.'
  },
  {
    title: 'Best High School Average in Economics and Administration',
    description: 'Awarded for achieving the highest academic performance in the Economics and Administration track during high school. This recognition reflects a strong understanding of key economic concepts, financial principles, and administrative strategies, demonstrating exceptional academic commitment and the ability to excel in a demanding curriculum.'
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-primary-50 to-secondary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-2xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                Work Experience
              </h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.title} 
                     className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary-100 text-primary-600 rounded-xl">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-gray-900 font-medium">{exp.company}</p>
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-secondary-100 text-secondary-600 rounded-2xl">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 text-transparent bg-clip-text">
                Awards
              </h2>
            </div>
            <div className="space-y-8">
              {awards.map((award) => (
                <div key={award.title} 
                     className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary-100 text-secondary-600 rounded-xl">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-secondary-600 transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-gray-700 mt-2">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}