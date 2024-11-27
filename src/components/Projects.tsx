import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'Fundacion Escolares',
    description: 'Platform designed to support rural education in Argentina. It allows students to track their progress on educational activities, while teachers can upload reports and request new activities or funding for projects. The platform promotes collaboration between students and educators, ensuring that rural schools have access to resources and support for sustainable educational development.',
    image: '/Escolares.jpeg',
    tags: ['React', 'Node.js', 'Java'],
    githubLink: 'https://github.com/username/fundacion-escolares',
    liveLink: 'https://fundacion-escolares.com'
  },
  {
    title: 'AcademiCo',
    description: 'AcademiCo is a digital platform that promotes collaboration and knowledge-sharing among students across Argentina. It allows students to connect, share experiences, and exchange educational resources like solved exercises, past exams, and academic reviews. The platform enhances learning by providing access to diverse study materials and fosters a sense of community and peer-to-peer support for academic success.',
    image: '/AcademiCo.jpg',
    tags: ['TypeScript', 'Next.js', 'Java'],
    githubLink: 'https://github.com/username/academico',
    liveLink: 'https://academico.com'
  },
  {
    title: 'Servicios Públicos',
    description: 'The website developed for detecting faults in public services is designed to help users report issues with services such as water, electricity, or gas. Through the platform, individuals can submit reports detailing the problem they encountered, including location and description. The system tracks these reports, enabling service providers to address and resolve the issues more efficiently. The platform enhances public service reliability by facilitating communication between users and providers, ensuring quicker response times and better service quality.',
    image: '/ServiciosPublicos.jpg',
    tags: ['Handlebars', 'CSS', 'Java', 'SQL'],
    githubLink: 'https://github.com/username/servicios-publicos',
    liveLink: 'https://serviciospublicos.com'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-transparent bg-clip-text inline-block">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-4">Some of my favorite works</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} 
                 className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {/* 
                        Comentando los iconos de GitHub y enlace externo para que no aparezcan
                      */}
                      {/* <a href={project.githubLink} target="_blank" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors" aria-label="View GitHub">
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a href={project.liveLink} target="_blank" className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors" aria-label="Open live project">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
